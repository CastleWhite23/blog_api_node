const express = require("express");
const app = express();
const port = 3000;

const router = require("./routes/index")

router(app, express)

app.listen(port, (error)=>{
    if(error){
        console.log(error);
        return;
    }

    console.log(`API rodando em: localhost:${port}`)
})