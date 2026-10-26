import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeRepository, getRepositories, API_URL } from '../github-projects.js';

const sample = { name: 'portfoliohub', private: false, html_url: 'https://github.com/Luizin0/portfoliohub', description: 'Portfólio acadêmico', language: 'HTML' };

test('preserva dados de um repositório público do autor', () => {
  assert.equal(normalizeRepository(sample).url, sample.html_url);
});
test('descarta repositórios privados e dados incompletos', () => {
  assert.equal(normalizeRepository({ ...sample, private: true }), null);
  assert.equal(normalizeRepository(null), null);
});
test('rejeita esquemas executáveis, outro domínio e outro autor', () => {
  for (const url of ['javascript:alert(1)', 'https://example.com/Luizin0/portfoliohub', 'https://github.com/outro/portfoliohub', 'https://github.com@evil.test/Luizin0/portfoliohub', 'https://x:senha@github.com/Luizin0/portfoliohub']) {
    assert.equal(normalizeRepository({ ...sample, html_url: url }), null, url);
  }
});
test('mantém descrições como texto limitado e oferece campos alternativos', () => {
  const repo = normalizeRepository({ ...sample, description: '<img onerror=alert(1)>'.repeat(50), language: null });
  assert.equal(repo.description.length, 180);
  assert.equal(repo.language, 'Código e documentação');
});
test('consulta somente a API pública, sem credenciais, e filtra dados inválidos', async () => {
  const values = await getRepositories(async (url, options) => {
    assert.equal(url, API_URL);
    assert.equal(options.credentials, 'omit');
    assert.ok(options.signal);
    return { ok: true, json: async () => [sample, { ...sample, private: true }] };
  });
  assert.equal(values.length, 1);
});
test('trata limite da API e resposta sem estrutura de lista como falhas', async () => {
  await assert.rejects(getRepositories(async () => ({ ok: false, status: 403 })), /403/);
  await assert.rejects(getRepositories(async () => ({ ok: true, json: async () => ({ message: 'erro' }) })), /inválida/);
});
test('limita o número de cartões a seis e aceita uma conta sem projetos', async () => {
  assert.equal((await getRepositories(async () => ({ ok: true, json: async () => Array(9).fill(sample) }))).length, 6);
  assert.deepEqual(await getRepositories(async () => ({ ok: true, json: async () => [] })), []);
});
