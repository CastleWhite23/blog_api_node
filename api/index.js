const { error, Console } = require('console');
const { express } = require('express');
const app = express();

const port = 8081;
const criarTabela = require('./inc/tabelas')
const connection = require('./inc/connection')
const router = require('./routes/index');
const { route } = require('./routes/routerPostagem');

criarTabela.init(connection)
router(app, express)


app.listen(port, (error)=>{
    if(error){
        console.log('Deu erro', error)
    }

    console.log("Api rodando em localhost:", port)
})