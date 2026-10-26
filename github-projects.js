const OWNER = 'Luizin0';
export const API_URL = `https://api.github.com/users/${OWNER}/repos?sort=updated&per_page=6`;

export function normalizeRepository(value) {
  if (!value || value.private !== false || typeof value.name !== 'string') return null;
  if (!/^[A-Za-z0-9_.-]{1,100}$/.test(value.name)) return null;
  let address;
  try { address = new URL(value.html_url); } catch { return null; }
  const expectedPath = `/${OWNER}/${value.name}`;
  if (address.protocol !== 'https:' || address.hostname !== 'github.com' ||
      address.username || address.password || address.port ||
      address.pathname.toLowerCase() !== expectedPath.toLowerCase() ||
      address.search || address.hash) return null;
  return {
    name: value.name,
    url: address.href,
    description: typeof value.description === 'string'
      ? value.description.slice(0, 180) : 'Projeto público disponível no GitHub.',
    language: typeof value.language === 'string' ? value.language.slice(0, 40) : 'Código e documentação',
  };
}

export async function getRepositories(fetcher = fetch) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetcher(API_URL, {
      headers: { Accept: 'application/vnd.github+json' },
      credentials: 'omit',
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`GitHub respondeu ${response.status}`);
    const data = await response.json();
    if (!Array.isArray(data)) throw new Error('Resposta inválida do GitHub');
    return data.map(normalizeRepository).filter(Boolean).slice(0, 6);
  } finally {
    clearTimeout(timeout);
  }
}

export async function loadRepositories() {
  const container = document.querySelector('#repositories-list');
  const status = document.querySelector('#repositories-status');
  const button = document.querySelector('#refresh-repositories');
  if (!container || !status || button?.disabled) return;
  if (button) button.disabled = true;
  container.setAttribute('aria-busy', 'true');
  status.textContent = 'Carregando repositórios públicos do GitHub...';
  try {
    const repositories = await getRepositories();
    const cards = repositories.map(repository => {
      const card = document.createElement('article');
      card.className = 'repository-card';
      const heading = document.createElement('h3');
      const anchor = document.createElement('a');
      anchor.href = repository.url;
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
      anchor.textContent = repository.name;
      heading.append(anchor);
      const description = document.createElement('p');
      description.textContent = repository.description;
      const language = document.createElement('small');
      language.textContent = repository.language;
      card.append(heading, description, language);
      return card;
    });
    container.replaceChildren(...cards);
    status.textContent = repositories.length
      ? `${repositories.length} repositório(s) público(s) atualizado(s) diretamente do GitHub.`
      : 'Nenhum repositório público disponível. Consulte o perfil pelo link abaixo.';
  } catch {
    status.textContent = 'Não foi possível atualizar os projetos agora. Você pode consultar todos pelo link do GitHub abaixo.';
  } finally {
    container.setAttribute('aria-busy', 'false');
    if (button) button.disabled = false;
  }
}
