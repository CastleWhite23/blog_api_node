
const connection = require("../inc/connection")
const executarQuery  = require("../utilites/executarQuery")

class PostModel {

  

    buscar() {
        const sql = `SELECT * FROM post`
        return executarQeury(sql);
    }

    buscarById(id) {
        const sql = `SELECT * FROM post WHERE id_post = '${id}'`
        return executarQeury(sql)
    }

    criar(params) {
        const sql = `INSERT INTO \`post\` SET ?`
        return executarQeury(sql, params)
    }

    atualizar(params, id) {
        const sql = `UPDATE post SET ? WHERE id_post = ?`
        return executarQeury(sql, [params, id])
    }

    deletar(id) {
        const sql = `DELETE FROM post WHERE id_post = ?`

        return this.executarQeury(sql, id)
    }


}
module.exports = new PostModel()
