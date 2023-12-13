const { error } = require("console")

class Tabelas {
    init(connection) {
        this.connection = connection
        this.createTabelaPostagem()
    }

    createTabelaPostagem() {
    const sql = `
        CREATE TABLE  IF NOT EXISTS \`post\` (
            \`id_post\` INT PRIMARY KEY AUTO_INCREMENT,
            \`titulo_post\` VARCHAR(30),
            \`conteudo_post\` VARCHAR(500),
            \`autor_post\` VARCHAR(50),
            \`data_criacao\` DATETIME,
            \`data_alteracao\` DATETIME
        );`

    this.connection.query(sql, (error) => {
        if (error) {
            console.log(error)
            return;
        }

        console.log("tabela criada com sucesso");
    })
}


}

module.exports  = new Tabelas()