
const authController = require("../controllers/AuthController");
const usuarioController = require("../controllers/usuarioController");
const verificaToken =  require("../middleware/auth")

const express = require("express");
const router = express.Router();

router.get("/contas", verificaToken, usuarioController.buscarCadastros);
router.post("/conta/login", authController.login);
router.post("/conta/cadastro", usuarioController.cadastro);
router.put("/conta/atualizar/:id", usuarioController.atualizarCadastro);
router.delete("/conta/excluir/:id", usuarioController.excluirCadastro);

module.exports = router;

