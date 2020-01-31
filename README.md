# desafio01
desafio 01 do bootcamp - gostack

Desafio 01 - Conceitos em node JS.

Criar rotas GET, POST, PUT E DELETE para manipular um array de objetos.

Exemplo:

[
  {
    id: "1",
    title: "Novo projeto",
    tasks: ["Nova tarefa"]
  }
];

GET /projects: Rota que lista todos projetos e suas tarefas;

PUT /projects/:id: A rota deve alterar apenas o título do projeto com o id presente nos parâmetros da rota;

DELETE /projects/:id: A rota deve deletar o projeto com o id presente nos parâmetros da rota;

POST /projects/:id/tasks: A rota deve receber um campo title e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do id presente nos parâmetros da rota;

Criado middleware para realizar validação se o ID a ser utlizado existe.

para rodar o server basta executar "YARN DEV" ou "NPM DEV" no seu terminal.
