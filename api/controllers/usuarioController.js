const processarPromise  = require( "../utilities/processarPromise")
const usuarioModel  = require("../models/usuarioModel")
class UsuarioController{
   
    login(req, res){
        //o objetiuvo dessa rota é se o usuario for o correto e as infos baterem entao gerar um token e deixa-lo no cookie do navegador
    }

    buscarCadastros(req, res){
        const resUserModel = usuarioModel.buscarCadastros()
        processarPromise(resUserModel, 200, 400, res)
    }

    cadastro(req, res){
        const resUserModel = usuarioModel.cadastrar(req.body)
        processarPromise(resUserModel, 201, 400, res)   
    }

    atualizarCadastro(req, res){
        const resUserModel = usuarioModel.atualizarCadastrp(req.body, req.params.id)
        processarPromise(resUserModel, 200, 400, res)
    }

    excluirCadastro(req, res){
        const resUserModel = usuarioModel.excluirCadastro(req.params.id)
        processarPromise(resUserModel, 204, 400, res)
    }

}

module.exports =  new UsuarioController()