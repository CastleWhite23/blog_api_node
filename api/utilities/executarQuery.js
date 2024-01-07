export const executarQuery = (sql, params = "") => {
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
