const { error } = require("console")
const connection = require("../inc/connection")
const { resolve } = require("path")
const { rejects } = require("assert")


class PostModel {

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

    buscar() {
        const sql = `SELECT * FROM post`
        this.executarQeury(sql);
    }

    buscarById(id) {
        const sql = `SELECT * FROM post WHERE id_post = '${id}'`
        this.executarQeury(sql)
    }

    criar(params) {
        const sql = `INSERT INTO \`post\` SET ?`
        this.executarQeury(sql, params)
    }

    atualizar(params, id) {
        const sql = `UPDATE post SET ? WHERE id_post = ?`
        this.executarQeury(sql, [params, id])
    }

    deletar(id) {
        const sql = `DELETE FROM post WHERE id_post = ?`

        this.executarQeury(sql, id)
    }


}
module.exports = new PostModel()
