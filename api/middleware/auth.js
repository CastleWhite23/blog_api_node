//arquivo responsavel por verificar se existe ou não um token jwt
const jwt = require('jsonwebtoken')
require('dotenv').config()
const verificaToken = (req, res, next) => {
    const token = req.cookies.token
    // console.log(token)

    if (!token) return res.status(401).json({ message: 'Precisa realizar o login antes.' });

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            return res.staus(500).json({ message: "Falha na autenticacao" })
        }
        req.username = decoded.username;
        next()
    })


}

module.exports =  verificaToken