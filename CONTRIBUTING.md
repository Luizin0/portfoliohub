# Como contribuir com o PortfolioHUB

O projeto pertence a Luiz Eduardo. Visitantes podem ler o código e propor mudanças por fork e pull request. Somente o titular ou pessoas explicitamente autorizadas podem integrar alterações. Nenhum convite de acesso é necessário para visualizar o portfólio.

## Preparação

Clone `https://github.com/Luizin0/portfoliohub.git`, use Node.js 22 ou superior e Python 3.12 ou superior. O site não exige dependências npm.

```bash
git switch main
git pull --ff-only origin main
git switch -c feat/minha-mudanca
python3 -m http.server 8000
```

Abra `http://localhost:8000`. O JavaScript utiliza módulos e deve ser servido por HTTP.

## Testes antes do envio

```bash
node --check script.js
node --check github-projects.js
node --test tests/*.test.js
python3 tests/check_site.py
```

Confira o menu em celular, navegação por teclado, foco visível, links de documentos e a lista de repositórios. Se a API estiver indisponível, o link permanente para o perfil deve continuar acessível.

## Revisão

Crie commits com um objetivo por vez e mensagem descritiva. Envie a branch e abra um pull request para `main`. Explique o motivo, as alterações e os testes. Aguarde a verificação `qualidade` antes de integrar. A aprovação de outra pessoa só deve ser declarada quando houver revisão real; em trabalho individual, registre a revisão do diff e os testes.

## Issues

Informe os passos para reprodução, comportamento observado e esperado. Não coloque credenciais ou dados privados em issues, comentários ou capturas. Vulnerabilidades devem seguir o procedimento privado do SECURITY.md.

## Recuperação

Crie uma branch de correção, execute `git revert <commit-com-falha>`, repita os testes e abra um novo pull request. Não reescreva o histórico público com force push. Confirme o site após o GitHub Pages concluir a publicação.
