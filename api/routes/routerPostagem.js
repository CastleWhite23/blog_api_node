const { Router } = require("express");
const postController = require("../controllers/PostController");
const verificaToken =  require("../middleware/auth")
const router = Router();

router.get("/postagens", (req, res) => {
    postController.buscar(req, res);
})

router.get("/postagens/:id", (req, res) => {
    const { id } = req.params
    postController.buscarById(res, res, id)
})


router.post("/postagens/novo", verificaToken, (req, res) => {
    const params = req.body
    params.fk_id_user = res.locals.username

    postController.criar(res, req, params)
})


router.put("/postagens/editar/:id", verificaToken, (req, res) => {
    const { id } = req.params
    const params = req.body

    postController.atualizar(req, res, params, id)

})


router.delete("/postagens/excluir/:id", verificaToken, (req, res) => {
    const { id } = req.params

    postController.deletar(req, res, id)

})





module.exports = router