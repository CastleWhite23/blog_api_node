const routerPostagem = require("./routerPostagem")
const routerUsuario = require("./routerUsuario")

const router = (app, express) =>{
    app.use(express.json())
    app.use(express.urlencoded({ extended: true}))
    app.use(routerPostagem)
    app.use(routerUsuario)
}

module.exports = router;