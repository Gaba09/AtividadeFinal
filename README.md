# GSC Eventos

Protótipo acadêmico de uma plataforma para organizar atividades, inscrições e projetos relacionados à FECITEC do COTIL/UNICAMP.

## Sobre o projeto

O GSC Eventos reúne telas de programação, vitrine de projetos, inscrições demonstrativas, certificados e área de organização. O projeto possui interfaces para navegador e uma versão Desktop executada com Electron.

> **Atenção:** este projeto é um protótipo. As atividades, datas, vagas e inscrições são ilustrativas. Não utilize senhas reais nem informações pessoais sensíveis.

## Tecnologias utilizadas

- **HTML:** estrutura das páginas.
- **CSS:** estilos e adaptação das interfaces a diferentes tamanhos de tela.
- **JavaScript:** navegação e regras da demonstração.
- **Electron:** execução da interface Desktop como aplicativo.
- **Node.js e npm:** ambiente de execução e gerenciamento das dependências do aplicativo.

## Aplicativo Desktop

A versão Desktop é iniciada pelo Electron e carrega a página `desktop.html` em uma janela do aplicativo.

Os principais arquivos dessa versão são:

- `main.cjs`: configura e abre a janela do Electron, definindo opções de segurança e carregando a página Desktop.
- `desktop.html`: página HTML de entrada da interface Desktop.
- `app.js`: implementa a navegação e as funcionalidades da aplicação, incluindo a área de organização.
- `style.css`: reúne os estilos visuais utilizados pela interface.
- `package.json`: define as dependências e os comandos de execução e empacotamento.

## Funcionalidades demonstrativas

### Área de organização

O painel de organização apresenta indicadores do sistema e permite gerenciar atividades. O formulário de atividade contempla título, eixo, data, horário, local, responsável ou palestrante, quantidade de vagas e ícone.

Na demonstração, o organizador pode:

- Cadastrar uma atividade.
- Visualizar as atividades cadastradas.
- Editar os dados de uma atividade.
- Excluir uma atividade.

### Inscrições e certificados

O protótipo permite simular inscrições em atividades e apresenta uma área de certificados na navegação.

**A emissão real de certificados não está implementada:** o painel indica que não há emissão real e que a confirmação de presença ainda não faz parte do sistema.

## Como executar a versão Desktop

É necessário ter o Node.js instalado. Na pasta do projeto, execute:

```bash
npm install
npm start
```

Para gerar o instalador do Windows, execute:

```bash
npm run dist
```

## Armazenamento e limitações

Na versão atual, os dados da demonstração são armazenados localmente por meio do `localStorage`, no navegador ou no perfil local do Electron, conforme a forma de execução. As informações de sessão utilizam `sessionStorage`.

Não existe, nesta versão, sincronização de dados entre computadores nem integração com um banco de dados ou serviço de backend.

O protótipo também não realiza autenticação institucional real, pagamentos ou emissão efetiva de certificados. As informações e contas utilizadas devem ser fictícias.

## Observação

Este repositório contém uma versão de protótipo para fins acadêmicos e demonstração das interfaces e funcionalidades descritas acima.