const bcryptjs = require("bcryptjs")

class Criptografia{
    constructor(
        bcrypt = bcryptjs
    ){
        this.bcrypt = bcrypt
        this.salt = this.bcrypt.genSaltSync(10)
    }

    criptografar(senha){
        const hash = this.bcrypt.hashSync(senha, this.salt)
        return hash
    }

    validar(senha, dbSenha){
        const isValidPassword = this.bcrypt.compareSync(senha, dbSenha)
        return isValidPassword
    }
}

module.exports =  new Criptografia()