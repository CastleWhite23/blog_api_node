const mysql = require("mysql")

const connection = mysql.createConnection({
    port: 3306,
    database: "db_api_blog",
    user: "root",
    password: "",
    host: "localhost"
})


module.exports = connection