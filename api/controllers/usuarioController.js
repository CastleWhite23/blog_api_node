class UsuarioController{
    async processarPromise(promise, status, error, res) {
        try{
            const response = await promise;
            res.status(status)
            res.json(response)
        }catch{
            res.status(error)
        }   
    }

    login(req, res){

    }

    buscarCadastros(req, res){
    }

    cadastro(req, res){

    }

    atualizarCadastro(req, res){

    }

    excluirCadastro(req, res){

    }

}

module.exports =  new UsuarioController()