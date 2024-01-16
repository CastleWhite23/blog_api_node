const processarPromise  = require( "../utilities/processarPromise")
const usuarioModel  = require("../models/usuarioModel")
class UsuarioController{

    buscarCadastros(req, res){
        const resUserModel = usuarioModel.buscarCadastros()
        processarPromise(resUserModel, 200, 400, res)
    }

     cadastro(req, res){

        const resUserModel = usuarioModel.cadastrar(req.body)
        if (resUserModel[0].message) {
            console.log("sss")
            return res.status(400).json(resUserModel[0].message)
        }
        console.log(resUserModel)
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