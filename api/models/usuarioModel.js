class UsuarioModel {
    executarQeury(sql, params = "") {
        return new Promise((resolve, rejects)=>{
             connection.query(sql, params, (error, resposta)=>{
                 if(error){
                     rejects(error)
                     return;
                 }
 
                 resolve(resposta)
             })
        })
     }
 
     buscarCadastros() {
         const sql = `SELECT * FROM usuarios`
         return this.executarQeury(sql);
     }
 
     buscarById(id) {
         const sql = `SELECT * FROM usuario WHERE id_user = '${id}'`
         return this.executarQeury(sql)
     }
 
     cadastrar(params) {
         const sql = `INSERT INTO \`usuario\` SET ?`
         return this.executarQeury(sql, params)
     }
 
     atualizarCadastrp(params, id) {
         const sql = `UPDATE usuario SET ? WHERE id_user = ?`
         return this.executarQeury(sql, [params, id])
     }
 
     excluirCadastro(id) {
         const sql = `DELETE FROM usuario WHERE id_post = ?`

         return this.executarQeury(sql, id)
     }
 
 

}

module.exports = new UsuarioModel()