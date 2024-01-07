const processarPromise  = require( "../utilities/processarPromise")
const usuarioModel  = require("../models/usuarioModel")
class UsuarioController{
   
    login(req, res){

    }

    buscarCadastros(req, res){
        const resUserModel = usuarioModel.buscarCadastros()
        processarPromise(resUserModel, 200, 400, res)
    }

    cadastro(req, res){

    }

    atualizarCadastro(req, res){

    }

    excluirCadastro(req, res){

    }

}

module.exports =  new UsuarioController()