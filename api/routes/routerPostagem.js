const { Router } = require("express");
const postController = require("../controllers/PostController");
const router = Router();

router.get("/postagens", (req, res) => {
    postController.buscar(req, res);
})

router.get("/postagens/:id", (req, res) => {
    const { id } = req.params
    postController.buscarById(res, res, id)
})


router.post("/postagens/novo", (req, res) => {
    const params = req.body

        postController.criar(res, req, params)
})


router.put("/postagens/editar/:id", (req, res) => {
    const { id } = req.params
    const params = req.body

    postController.atualizar(req, res, params, id)

})


router.delete("/psotagens/excluir/:id", (req, res) => {
    const { id } = req.params



    postController.deletar(req, res, id)

})





module.exports = router