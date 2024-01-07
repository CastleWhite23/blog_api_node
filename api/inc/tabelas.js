class Tabelas {
    init(connection) {
        this.connection = connection
        this.createTabelaPostagem()
        this.createTableUsuario()
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

    createTableUsuario() {
        const sql = `CREATE TABLE IF NOT EXISTS usuario(
        id_user INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(30),
        username VARCHAR(30),
        email VARCHAR(60),
        password VARCHAR(150)
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


module.exports = new Tabelas()