const usuarioModel = require("../models/usuarioModel")
const authModel = require("../models/AuthModel")

class AuthController {

    async login(req, res) {
        const { username, senha } = req.body

        if (!username || !senha) res.status(400).json({ error: "Preencha todos os campos" })

        //faz uma chamada ao serv pra ver se existe a conta
        const response = await usuarioModel.verificaConta(username, senha)

        //verifica se existe a mensagem de erro envolvendo a conta
        if (response.message) {
            return res.status(400).json(response.message)
        }

        //senão existe a mesnagem de erro

        //leva pra func que gera o token 
        const realizarLogin = authModel.login(response.username)
        if (!realizarLogin.auth) {
            return res.status(400).json({ message: "login nao realizado" })
        }

        return res.status(200).json({ token: response.token, message: "login realizado com sucesso" })



        //verificar os dados da conta
        //se for true func para gerar token e colocar nos cookies do navegador


    }
}


module.exports = new AuthController()