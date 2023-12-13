const express = require("express");
const app = express();
const port = 3000;

const router = require("./routes/index")
const connection = require("./inc/connection")
const tabelas = require("./inc/tabelas")
tabelas.init(connection)

router(app, express)


app.listen(port, (error)=>{
    if(error){
        console.log(error);
        return;
    }

    console.log(`API rodando em: localhost:${port}`)
})