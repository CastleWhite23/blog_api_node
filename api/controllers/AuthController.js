const usuarioModel = require("../models/usuarioModel")
const authModel = require("../models/AuthModel")

class AuthController {

    async login(req, res) {
        const { username, senha } = req.body

        if (!username || !senha) return res.status(400).json({ error: "Preencha todos os campos" })

        const response = await usuarioModel.verificaConta(username, senha)

        if (response.message) {
            return res.status(400).json({error: response.message})
        }
        const realizarLogin =  await authModel.login(response.username)

        if (!realizarLogin.auth) {
            return res.status(400).json({ error:  "login nao realizado" })
        }

        return res.status(200).json({ token: realizarLogin.token, message: "login realizado com sucesso" })
    }
}


module.exports = new AuthController()