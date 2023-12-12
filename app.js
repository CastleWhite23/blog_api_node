const { error } = require("console");
const { express } = require("express");
const app = express();
const port = 3000;

app.listen(port, ()=>{
    if(error){
        console.log(error)
        return;
    }
    console.log(`API rodando em: localhost:${port}`)
})