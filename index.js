const express = require('express');
const app = express();

app.use(express.json());

app.use((req, resp, next)=>{
    
    console.count("Total de requisições");
    return next();
});

function checkIdExists(req, resp , next){
    const {id} = req.params;
    const projeto = projetos.find(p => p.id == id);

    if(!projeto){
        return resp.status(400).json({error: "o projeto selecionado não foi encontrado."});
    }

    return next();
}

const projetos = [];

app.post('/projects', (req, resp)=>{
    const {id} = req.body;
    const {title} = req.body;

    const obj = {
        id,
        title,
        tasks: []
    }

    projetos.push(obj);

    return resp.json(projetos);

});

app.get('/projects', (req, resp) =>{
    return resp.json(projetos);
});

app.put('/projects/:id', checkIdExists, (req, resp) =>{
    const {title} = req.body;
    const {id} = req.params;
    const projeto = projetos.find(p => p.id == id);

    projeto.title = title;

    return resp.json(projetos);

});

app.delete('/projects/:id', checkIdExists, (req, resp) => {
    const {id} = req.params;
    const indexProject = projetos.findIndex(p => p.id == id);

    projetos.splice(indexProject, 1);

    return resp.json(projetos);
});

app.post('/projects/:id/tasks', checkIdExists, (req, resp)=>{
    const {id} = req.params;    
    const {tasks} = req.body;
    const projeto = projetos.find(p => p.id == id);

    projeto.tasks = tasks;

    return resp.json(projetos);

});

app.listen(3001);