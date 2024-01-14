const executarQuery  = require("../utilities/executarQuery")
class PostModel {

  

    buscar() {
        const sql = `SELECT * FROM post`
        return executarQuery(sql);
    }

    buscarById(id) {
        const sql = `SELECT * FROM post WHERE id_post = '${id}'`
        return executarQuery(sql)
    }

    criar(params) {
        const sql = `INSERT INTO \`post\` SET ?`
        return executarQuery(sql, params)
    }

    atualizar(params, id) {
        const sql = `UPDATE post SET ? WHERE id_post = ?`
        return executarQuery(sql, [params, id])
    }

    deletar(id) {
        const sql = `DELETE FROM post WHERE id_post = ?`

        return executarQuery(sql, id)
    }


}
module.exports = new PostModel()
