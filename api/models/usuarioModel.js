const { error } = require("console")
const executarQuery = require("../utilities/executarQuery")
const e = require("express")
class UsuarioModel {

    async verificaConta(username, senha) {
        //criptografia da senha
        const sql = `SELECT * FROM usuario WHERE username = ? AND password = ?`
            const response = await executarQuery(sql, [username, senha])
            //verificar se exisite um usuario com aqueles dados
            if (!response.data) {
                return response
            }

            return response




    }



    buscarCadastros() {
        const sql = `SELECT * FROM usuario`
        return executarQuery(sql);
    }

    buscarById(id) {
        const sql = `SELECT * FROM usuario WHERE id_user = '${id}'`
        return executarQuery(sql)
    }

    cadastrar(params) {
        const sql = `INSERT INTO \`usuario\` SET ?`
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