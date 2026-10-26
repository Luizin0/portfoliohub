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

O visitante lê o conteúdo; alterações dependem das permissões do GitHub. Documentos públicos usam o papel leitor. A política de segurança, a lista de arquivos ignorados e o guia de contribuição foram adicionados ao repositório. A conta GitHub foi consultada e a autenticação em dois fatores está desativada. A regra para a branch main foi preparada com exigência de pull request, resolução de conversas, bloqueio de force push e exclusão; o salvamento exigiu confirmação de identidade do titular por e-mail. A regra ainda não está confirmada como ativa. O titular deve concluir a confirmação e ativar os dois fatores na própria conta, sem compartilhar códigos.

## Colaboração e testes

A entrega foi preparada na branch `feat/entrega-final`. O fluxo automatizado verifica sintaxe JavaScript, dados e erros da API, links internos, recursos e documentação. O pull request [#1](https://github.com/Luizin0/portfoliohub/pull/1) foi integrado após a aprovação do fluxo automatizado. A [verificação em produção](https://github.com/Luizin0/portfoliohub/actions/runs/40340566071) e a [publicação Pages](https://github.com/Luizin0/portfoliohub/actions/runs/40340564720) concluíram com sucesso. Os sete testes de JavaScript passaram, além da verificação de sintaxe, âncoras, recursos locais e links externos. O menu foi validado em viewport de 390 por 844 pixels: abriu, navegou e fechou após a escolha. Os links do Google Documentos possuem permissão anyone/reader. A publicação usa identificador de versão nos arquivos CSS e JavaScript para evitar que o cache mantenha scripts da versão anterior.

## Recuperação

Use uma branch de correção e `git revert`, preservando o histórico. Execute os testes antes de integrar e confirme o site após a implantação.
