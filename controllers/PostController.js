
const { response } = require('express');
const postModel = require('../models/PostModels');
const { error } = require('console');

class PostController {

    async processarPromise(promise, status, error, res) {
        try{
            const response = await promise;
            console.log(promise)
            res.status(status)
            res.json(response)
        }catch{
            res.status(error)
        }   
    }

    buscar(req, res) {
        const resPostModel = postModel.buscar()
        this.processarPromise(resPostModel, 200, 400, res)
    }

    buscarById(req, res, id) {
        const resPostModel = postModel.buscarById(id);
        this.processarPromise(resPostModel, 200, 400, res)
       
    }

    criar(res, req, params) {
        const resPostModel = postModel.criar(params)
        this.processarPromise(resPostModel, 201, 400, res)
    }


    atualizar(req, res, params, id) {
        const resPostModel = postModel.atualizar(params, id)

        this.processarPromise(resPostModel, 200, 400, res)
    }

    deletar(req, res, id) {
        const resPostModel = postModel.deletar(id)
        this.processarPromise(resPostModel, 200, 400, res)
    }


}


module.exports = new PostController()
