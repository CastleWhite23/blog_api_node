const executarQuery = require("../utilities/executarQuery")
class UsuarioModel {

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
         const sql = `DELETE FROM usuario WHERE id_post = ?`

         return executarQuery(sql, id)
     }
 
 

}

module.exports = new UsuarioModel()