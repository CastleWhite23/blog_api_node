const executarQuery = require("../utilities/executarQuery")
const criptografiaClass = require("../utilities/CriptografiaClass")
class UsuarioModel {

    async verificaConta(username, senha) {
        //criptografia da senha
        const sql = `SELECT * FROM usuario WHERE username = ?`
            const usuario = await executarQuery(sql, username)
            //verificar se exisite um usuario com aqueles dados
            if (!usuario[0]){
                return {message: "Usuario Inválido"}
            }

            const isValidPassword = criptografiaClass.validar(senha, usuario[0].password)

            if(!isValidPassword){
                return {message: "Senha Inválida"}
            }   

            return usuario[0]
    }



    buscarCadastros() {
        const sql = `SELECT * FROM usuario`
        return executarQuery(sql);
    }

    buscarById(id) {
        const sql = `SELECT * FROM usuario WHERE id_user = '${id}'`
        return executarQuery(sql)
    }

    buscarByUsername(username) {
        const sql = `SELECT * FROM usuario WHERE username = '${username}'`
        return executarQuery(sql)
    }

    async cadastrar(params) {
        const usernameIsUnic =  await this.buscarByUsername(params.username)
        if(usernameIsUnic[0]) return {message: 'Username já existe!'}

        const sql = `INSERT INTO \`usuario\` SET ?`
        const senha = params.password;
        const novaSenha = criptografiaClass.criptografar(senha)
        params.password = novaSenha;

        return executarQuery(sql, params)
    }

    atualizarCadastrp(params, id) {
        const sql = `UPDATE usuario SET ? WHERE id_user = ?`
        return executarQuery(sql, [params, id])
    }

    excluirCadastro(id) {
        const sql = `DELETE FROM usuario WHERE id_user = ?`

        return executarQuery(sql, id)
    }



}

module.exports = new UsuarioModel()