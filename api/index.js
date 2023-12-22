
const express  = require("express");
const app = express();
const port = 8081;
const criarTabela = require('./inc/tabelas')
const connection = require('./inc/connection')
const cors = require("cors");
const router = require('./routes/index');

const corsOptions = {
    origin: 'http://localhost:3000/',
  };



app.use(cors(corsOptions));
criarTabela.init(connection)
router(app, express)


app.listen(port, (error) => {
    if(error){
        console.log(error);
        return;
    }
    console.log(`A porta acessada é: ${port}`);
    console.log(`http://localhost:${port}/postagens`);
});