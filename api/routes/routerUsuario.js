
const authController = require("../controllers/AuthController");
const usuarioController = require("../controllers/usuarioController");
const verificaToken =  require("../middleware/auth")

const express = require("express");
const router = express.Router();

router.get("/contas", verificaToken, usuarioController.buscarCadastros);
router.get("/usuario/posts", verificaToken, usuarioController.meusPosts);
router.post("/conta/login", authController.login);
router.post("/conta/cadastro", usuarioController.cadastro);
router.put("/conta/atualizar/:id",verificaToken, usuarioController.atualizarCadastro);
router.delete("/conta/excluir/:id",verificaToken, usuarioController.excluirCadastro);

module.exports = router;

