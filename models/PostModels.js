const { error } = require("console")
const connection = require("../inc/connection")


class PostModel{

    buscar(){   
        const sql = `SELECT * FROM post`

        return new Promise((rejects, resolve)=>{
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


}
module.exports = new PostModel()
