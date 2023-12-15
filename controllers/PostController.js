
const { response } = require('express');
const postModel = require('../models/PostModels');
const { error } = require('console');

class PostController {

    buscar(req, res) {
        const resPostModel = postModel.buscar()
        resPostModel
            .then((response) => (res.status(200).json(response)))
            .catch((error) => (res.status(400).json(error)))
    }

    buscarById(req, res, id) {
        const resPostModel = postModel.buscarById(id);

        resPostModel
            .then((response) => (
                res
                    .status(200)
                    .json(response)
            ))
            .catch((error) => (
                res
                    .status(400)
                    .json(error)
            ))
    }


}


module.exports = new PostController()
