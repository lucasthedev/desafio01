const express = require('express');
const app = express();

app.use(express.json());

app.get('/projetos', (req, resp) =>{
    return resp.json({nome: 'Lucas'});
});

app.listen(3001);