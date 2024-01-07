
 const usuarioController = require("../controllers/usuarioController");

const express = require("express");
const router = express.Router();

router.get("/contas", usuarioController.buscarCadastros);
router.post("/conta/login", usuarioController.login);
router.post("/conta/cadastro", usuarioController.cadastro);
router.put("/conta/atualizar", usuarioController.atualizarCadastro);
router.delete("/conta/excluir", usuarioController.excluirCadastro);

module.exports = router;

