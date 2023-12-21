const routerPostagem = require("./routerPostagem")

const router = (app, express) =>{
    app.use(express.json())
    app.use(express.urlencoded({ extended: true}))
    app.use(routerPostagem)
}

module.exports = router;