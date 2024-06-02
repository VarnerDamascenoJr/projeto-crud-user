# User CRUD App

Este é um projeto de uma aplicação CRUD de usuários desenvolvida em React com TypeScript. Ele permite criar, visualizar, editar e deletar usuários.

## Pacotes Utilizados

- **axios**: Utilizado para fazer requisições HTTP para o backend.
- **react**: Biblioteca JavaScript para criar interfaces de usuário.
- **typescript**: Adiciona tipagem estática ao JavaScript.
- **@types/react**: Pacote de definições de tipo para o React.
- **@types/react-dom**: Pacote de definições de tipo para o ReactDOM.

## Padrões de Código

O projeto segue os seguintes padrões de código:

- **Clean Code**: O código é organizado e legível, seguindo os princípios do Clean Code.
- **Componentização**: Os componentes são organizados de forma modular e reutilizável.
- **TypeScript**: Todo o código é escrito em TypeScript para garantir tipagem estática.
- **Padrão de Nomenclatura**: Nomes de variáveis, funções e componentes seguem o padrão camelCase.

## Requisições CRUD

A aplicação faz as seguintes requisições CRUD para o backend:

- **Create (POST)**: Adiciona um novo usuário ao sistema.
  - Endpoint: `/users`
  - Método: `POST`
  - Corpo da Requisição: Dados do novo usuário em formato JSON.

#### Informação interessante Componente AddUserForm

Este componente é responsável por fornecer um formulário para adicionar um novo usuário ao sistema. Ele utiliza as bibliotecas `react-hook-form` para gerenciamento do estado do formulário e validação com `zod`.
  
- **Read (GET)**: Obtém a lista de usuários ou detalhes de um usuário específico.
  - Listar Todos os Usuários:
    - Endpoint: `/users`
    - Método: `GET`
  - Obter Detalhes de um Usuário:
    - Endpoint: `/users/{id}`
    - Método: `GET`
    - Parâmetros da URL: `id` do usuário.
  
- **Update (PUT)**: Atualiza os dados de um usuário existente.
  - Endpoint: `/users/{id}`
  - Método: `PUT`
  - Parâmetros da URL: `id` do usuário a ser atualizado.
  - Corpo da Requisição: Dados atualizados do usuário em formato JSON.
  
  #### Informação interessante

Note que a validação que fiz no add não fiz no update.
  
- **Delete (DELETE)**: Remove um usuário do sistema.
  - Endpoint: `/users/{id}`
  - Método: `DELETE`
  - Parâmetros da URL: `id` do usuário a ser removido.

Certifique-se de configurar o backend corretamente para lidar com essas requisições.

## Como Executar o Projeto

1. Clone o repositório:git clone https://github.com/seu-usuario/user-crud.git
2. Caso queira apenas usar o front, sem conexão alguma com o backend, é só baixar o json-server e usar o seguinte comando: `json-server --watch db.json --port 8000`
3. Para visualização completa, sugiro setar o front em `[/users](http://localhost:5173/users)`

