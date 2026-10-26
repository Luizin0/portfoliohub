# Entrega final do Bootcamp I

Autor: Luiz Eduardo. Data: 26 de outubro de 2026.

## Acessos

- Site: https://luizin0.github.io/portfoliohub/
- Plano de implantação: https://docs.google.com/document/d/1TCXbbBSYrMw8mCcmzZ6qhPKDTAF6t_0fcX46J0qbQ58/edit?usp=drivesdk
- Código: https://github.com/Luizin0/portfoliohub
- Política: [SECURITY.md](../SECURITY.md)
- Colaboração: [CONTRIBUTING.md](../CONTRIBUTING.md)

## Planejamento e Gemini

O plano mantém as seis etapas do desafio. A consulta ao Gemini em 26/10/2026 orientou uma arquitetura estática proporcional ao portfólio, separação entre configuração de contas e código, controles de acesso e testes. Recomendações foram revisadas antes de aplicação; respostas da IA não substituem testes.

## Integrações implementadas na versão 1.1.0

A área Documentação reúne plano no Google Documentos, política, contribuição e arquivo ZIP do código. A seção GitHub consulta a API pública para exibir até seis repositórios, sem token e sem acesso a dados privados. Erros de rede, limite da API, listas vazias e dados inválidos têm tratamento; o link fixo do perfil permanece disponível.

## Usuários e segurança

O visitante lê o conteúdo; alterações dependem das permissões do GitHub. Documentos públicos usam o papel leitor. A política de segurança, a lista de arquivos ignorados e o guia de contribuição foram adicionados ao repositório. Proteção da branch, situação de dois fatores e resultados da publicação serão registrados depois da conferência nas plataformas.

## Colaboração e testes

A entrega foi preparada na branch `feat/entrega-final`. O fluxo automatizado verifica sintaxe JavaScript, dados e erros da API, links internos, recursos e documentação. A validação final da página publicada e o pull request serão registrados após a publicação.

## Recuperação

Use uma branch de correção e `git revert`, preservando o histórico. Execute os testes antes de integrar e confirme o site após a implantação.
