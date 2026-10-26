# PortfólioHub

Repositório público de projetos acadêmicos e pessoais de **Luiz Eduardo**. O projeto foi criado como entrega intermediária do Bootcamp I para demonstrar organização, documentação, versionamento com Git e publicação no GitHub Pages.

## Página publicada

O portfólio está publicado em:

**https://luizin0.github.io/portfoliohub/**

## Estrutura do repositório

```text
portfoliohub/
├── index.html
├── styles.css
├── script.js
├── projetos/
│   ├── academicos/
│   │   └── README.md
│   └── pessoais/
│       └── README.md
├── documentacao/
│   ├── planejamento.md
│   └── integracao-linkedin.md
├── CHANGELOG.md
├── LICENSE
└── README.md
```

## Tecnologias

- HTML5 semântico;
- CSS3 responsivo;
- JavaScript;
- Git e GitHub;
- GitHub Pages.

## Como executar localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/Luizin0/portfoliohub.git
   ```

2. Acesse a pasta:

   ```bash
   cd portfoliohub
   ```

3. Abra o arquivo `index.html` no navegador ou execute um servidor local:

   ```bash
   python -m http.server 8000
   ```

4. Visite `http://localhost:8000`.

## Versionamento

A versão inicial está documentada como **v1.0.0** e a entrega final acrescenta a versão **v1.1.0**. As mudanças relevantes são registradas em [CHANGELOG.md](CHANGELOG.md).

## Organização dos projetos

- [Projetos acadêmicos](projetos/academicos/README.md)
- [Projetos pessoais](projetos/pessoais/README.md)
- [Planejamento do repositório](documentacao/planejamento.md)
- [Integração com o LinkedIn](documentacao/integracao-linkedin.md)

## Autor

**Luiz Eduardo**  
GitHub: [@Luizin0](https://github.com/Luizin0)

## Licença

Este projeto está sob a licença MIT. Consulte [LICENSE](LICENSE) para mais informações.

## Entrega final

- [Plano de implantação no Google Documentos](https://docs.google.com/document/d/1TCXbbBSYrMw8mCcmzZ6qhPKDTAF6t_0fcX46J0qbQ58/edit?usp=drivesdk)
- [Registro da implantação e evidências](documentacao/entrega-final.md)
- [Guia de contribuição](CONTRIBUTING.md)
- [Política de segurança](SECURITY.md)

A página reúne os documentos da entrega e consulta a API pública do GitHub para mostrar os repositórios do autor. A consulta não utiliza token nem solicita acesso a dados privados. Se o serviço falhar, o link permanente para os repositórios continua disponível.

## Verificação

Requer Node.js 22 ou superior e Python 3.12 ou superior. Nenhuma dependência npm é necessária.

```bash
node --check script.js
node --check github-projects.js
node --test tests/*.test.js
python3 tests/check_site.py
```

Os mesmos comandos são executados pelo GitHub Actions em pull requests e na branch `main`. Use um servidor HTTP para testar a página, pois o JavaScript utiliza módulos. Veja [CONTRIBUTING.md](CONTRIBUTING.md) para o fluxo de revisão e recuperação.
