const express = require('express');
const app = express();

app.use(express.json());

const projetos = [{}];

app.post('/projects', (req, resp)=>{
    const {id} = req.body;
    const {title} = req.body;

    let obj = {
        "id": id,
        "title": title,
        "tasks": []
    }

    projetos.push(obj);

    return resp.json(projetos);

});

app.get('/projects', (req, resp) =>{
    return resp.json(projetos);
});

app.put('/projects/:id', (req, resp) =>{
    const {title} = req.body;
    const {id} = req.params;

    for(let i = 0; i < projetos.length; i++){
        if(projetos[i].id == id){
            projetos[i].title = title;
        }
    }

    return resp.json(projetos);

});

app.delete('/projects/:id', (req, resp) => {
    const {id} = req.params;

    for(let i = 0; i < projetos.length; i++){
        if(projetos[i].id == id){
            projetos.splice(i, 1);
        }
    }

    return resp.json(projetos);
});

app.post('/projects/:id/tasks', (req, resp)=>{
    const {id} = req.params;    
    const {tasks} = req.body;

    for(let i = 0; i < projetos.length; i++){
        if(projetos[i].id == id){
            projetos[i].tasks = tasks;
        }
    }

    return resp.json(projetos);

});

app.listen(3001);