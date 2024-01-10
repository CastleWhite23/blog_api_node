// import bycript from 'bcript'

require('dotenv').config()
const jwt = require('jsonwebtoken');


class AuthModel{
        login(res, username){
            //responsavel por gerar o token jwt e colocar nos cookies
            try{
                const token =  jwt.sign({username: username}, process.env.SECRET)
                 res.headers('token', token, { httpOnly: true})
                return {message: 'token gerado', auth: true, token: token}
            }catch(e){
                console.log(e)
                return {message: 'Não foi possivel gerar token',  auth: false, token: ""}
            }
            
        }
}

module.exports = new AuthModel()