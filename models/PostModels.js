const { error } = require("console")
const connection = require("../inc/connection")


class PostModel{

    buscar(){   
        const sql = `SELECT * FROM post`

        return new Promise((resolve, rejects)=>{
            connection.query(sql, (error, resposta)=>{
                if(error){
                    rejects(error)
                    return;
                }
    
                resolve(resposta)
            })
        })

    }

    buscarById(id){   
        const sql = `SELECT * FROM post WHERE id_post = '${id}'`

        return new Promise((resolve, rejects)=>{
            connection.query(sql, (error, resposta)=>{
                if(error){
                    rejects(error)
                }
                resolve(resposta)
            })
        })
       
    }

    criar(params){
        const sql = `INSERT INTO \`post\` SET ?`

        return new Promise((resolve, rejects)=>{
            connection.query(sql, params, (error, response)=>{
                if(error){
                    rejects(error)
                    return;
                }

                resolve(response)
            })
        })

    }

    atualizar(params, id){
        const sql = `UPDATE post SET ? WHERE id_post = ?`

        return new Promise((resolve, rejects)=>{
            connection.query(sql, [ params, id ], (error, resposta)=>{
                if(error){
                    rejects(error)
                    return;
                }

                resolve(resposta)
            })
        })
    }

    deletar(id){
        const sql = `DELETE FROM post WHERE id_post = ?`

        return new Promise((resolve, rejects)=>{
            connection.query(sql, id , (error, resposta)=>{
                if(error){
                    rejects(error)
                    return;
                }

                resolve(resposta)
            })
        })
    }


}
module.exports = new PostModel()
