// import bycript from 'bcript'

require('dotenv').config()
const jwt = require('jsonwebtoken');


class AuthModel{
        login(username){
            try{
                const token =  jwt.sign({username: username}, process.env.SECRET)
                return {message: 'token gerado', auth: true, token: token}
            }catch(e){
                console.log(e)
                return {message: 'Não foi possivel gerar token',  auth: false, token: ""}
            }
        }
}

module.exports = new AuthModel()