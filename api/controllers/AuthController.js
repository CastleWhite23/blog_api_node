const usuarioModel = require("../models/usuarioModel")
const authModel = require("../models/AuthModel")

class AuthController{
       
     async login(req, res){
        //o objetivo dessa rota é se o usuario for o correto e as infos baterem entao gerar um token e deixa-lo no cookie do navegador
        const { username, senha } = req.body
        const response = await usuarioModel.verificaConta(username, senha)

        if(response){
            const realizarLogin = authModel.login(res, response[0].username)
            // console.log(realizarLogin)
            // console.log(res.headers)
            if(!realizarLogin.token){
                return res.status(400).json({message: "login nao realizado"})
            }

            return res.status(200).json({message: "login realizado com sucesso"})
        }

        return res.send(JSON.stringify({message: "Login nao realizado"}))
        //verificar os dados da conta
        //se for true func para gerar token e colocar nos cookies do navegador


    }
}


module.exports =  new AuthController()