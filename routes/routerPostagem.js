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


router.post("/cadastrar/:rota", (req, res) =>{
    const { rota } = req.params
    const params = req.body
   

    if(rota === "postagem"){
        console.log(params)
        postController.criar(res,req, params)
    }
})


router.put("/atualizar/:rota/:id", (req, res) =>{
    const { id } = req.params
    const { rota } = req.params
    const params = req.body

    if(rota === "postagem"){
        postController.atualizar(req, res, params, id)
    }
})


router.get("/deletar/:id", (req, res) =>{
    const { id } = req.params
    res.send(`Deletar post ${id}?`)
})





module.exports = router