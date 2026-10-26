# Política de segurança do PortfolioHUB

## Escopo

O PortfolioHUB é um site estático público. Não mantém senhas de visitantes, formulários de dados pessoais ou um servidor de autenticação. O código é administrado no GitHub; os documentos usam as permissões do Google Drive. A API do GitHub consulta somente repositórios públicos e não recebe credenciais.

## Acesso

O titular Luizin0 administra o repositório. Visitantes possuem leitura pública; contribuições passam por branches e pull requests. Novos colaboradores só devem receber o acesso necessário. Documentos de consulta são compartilhados como leitor, sem conceder edição pública.

## Proteção do código

A branch `main` deve exigir pull request e a verificação automatizada `qualidade`, com force push e exclusão bloqueados. O fluxo verifica sintaxe, estrutura da página e tratamento de respostas da API. Os controles efetivamente configurados e sua evidência são registrados em `documentacao/entrega-final.md`.

Dados da API são inseridos com `textContent`; links só são aceitos no domínio github.com e no perfil do titular. Links externos usam `noopener noreferrer`. Nenhum token deve ser colocado no HTML, JavaScript, histórico, issue ou pull request.

## Contas

Use autenticação em dois fatores no GitHub e na Conta Google e guarde códigos de recuperação de forma privada. A ativação é uma configuração da conta do titular; esta política não comprova, por si só, que esteja habilitada. Nunca envie senhas ou códigos a uma IA.

## Comunicação de vulnerabilidades

Use a opção privada "Report a vulnerability" da aba Security quando disponível. Se ela não estiver disponível, abra apenas uma issue solicitando contato reservado, sem reproduzir a vulnerabilidade ou publicar dados sensíveis. O titular avaliará a ocorrência e combinará um canal privado antes de receber os detalhes.

## Incidentes e recuperação

Revogue imediatamente credenciais expostas e substitua-as. Corrija a origem do problema e trate o histórico quando necessário. Para regressões do site, reverta o commit por uma branch de correção e republique somente após os testes. Mantenha uma cópia local do repositório; documentos do Drive exigem cópia separada.
