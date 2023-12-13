const { Router } = require("express")
const router = Router(); 

router.get("/postagens", (req, res) =>{
    res.send("Todas as postagens")
})



router.get("/postagens/:id", (req, res) =>{
    const { id } = req.params
    res.send(`Postagem ${id}`)
})



router.post("/criar", (req, res) =>{
    const { id } = req.params
    res.send(`Postagem ${id}`)
})


router.put("/atualizar/:id", (req, res) =>{
    const { id } = req.params
    res.send(`Atualizar post ${id}?`)
})


router.get("/deletar/:id", (req, res) =>{
    const { id } = req.params
    res.send(`Deletar post ${id}?`)
})





module.exports = router