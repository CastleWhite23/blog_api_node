const { Router } = require("express");
const postController = require("../controllers/PostController");
const router = Router(); 

router.get("/postagens", (req, res) =>{
    postController.buscar(req, res);    
})

router.get("/postagens/:id", (req, res) =>{
    const { id } = req.params
    postController.buscarById(res, res, id)
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