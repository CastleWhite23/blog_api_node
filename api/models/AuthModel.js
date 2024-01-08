// import bycript from 'bcript'

require('dotenv').config()
const jwt = require('jsonwebtoken');


class AuthModel{
        login(username){
           
            //responsavel por gerar o token jwt e colocar nos cookies
            try{
                const token =  jwt.sign({username: username}, process.env.SECRET)
                return {message: 'token gerado', token: token, auth: true}
            }catch(e){
                if(e){
                    return {message: 'Erro na geracao de token', token: "", auth: false}
                }
            }
            // jwt.verify(token, process.env.SECRET, (err, decoded) =>{
            //     if (err) {
            //         console.error('Erro ao verificar o token:', err.message);
            //       } else {
            //         console.log('Token verificado com sucesso. Dados decodificados:', decoded);
            //       }
            // })
            
        }
}

module.exports = new AuthModel()