
const { response } = require('express');
const postModel = require('../models/PostModels');
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

    criar(res, req, params) {
        const resPostModel = postModel.criar(params)
        processarPromise(resPostModel, 201, 400, res)
    }

    atualizar(req, res, params, id) {
        const resPostModel = postModel.atualizar(params, id)

        processarPromise(resPostModel, 200, 400, res)
    }

    deletar(req, res, id) {
        const resPostModel = postModel.deletar(id)
        processarPromise(resPostModel, 200, 400, res)
    }
}


module.exports = new PostController()
