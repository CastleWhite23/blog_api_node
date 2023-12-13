const { Router } = require("express")
const router = Router(); 

router.get("/", (req, res) =>{
    res.send("Pagina inicial")
})

router.get("/postagens", (req, res) =>{
    res.send("postagens")
})


module.exports = router