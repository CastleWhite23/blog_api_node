
const { response } = require('express');
const postModel = require('../models/PostModels');
const usuarioModel = require("../models/usuarioModel")
const processarPromise =  require('../utilities/processarPromise');
const { error } = require('console');

class PostController {

    buscar(req, res) {
        const resPostModel = postModel.buscar()
        processarPromise(resPostModel, 200, 400, res)
    }

    buscarById(req, res, id) {
        const resPostModel = postModel.buscarById(id);
        processarPromise(resPostModel, 200, 400, res)
       
    }

    async criar(res, req, params) {
        const usuario =  await usuarioModel.buscarByUsername(params.fk_id_user)
        params.autor_post = usuario[0].username
        params.fk_id_user = usuario[0].id_user

        const resPostModel = postModel.criar(params)
        
        processarPromise(resPostModel, 201, 400, res)
    }

    atualizar(req, res, params, id) {
        const resPostModel = postModel.atualizar(params, id)

        processarPromise(resPostModel, 200, 400, res)
    }

    deletar(req, res, id) {
        const resPostModel = postModel.deletar(id)
        processarPromise(resPostModel, 204, 400, res)
    }
}


module.exports = new PostController()
