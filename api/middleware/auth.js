//arquivo responsavel por verificar se existe ou não um token jwt
const jwt = require('jsonwebtoken')
require('dotenv').config()
const verificaToken = (req, res, next) => {
    const tokenHeader = req.headers['authorization']
    const token = tokenHeader && tokenHeader.split(" ")[1];
    console.log(token)


    if (!token) return res.status(401).json({ message: 'Não autorizado' });

    try{
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            req.username = decoded.username;
            next()
        })
    
    }catch{
        return res.staus(500).json({ message: "Falha na autenticacao" })
    }
   

}

module.exports =  verificaToken