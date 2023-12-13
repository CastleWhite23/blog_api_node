const routerPostagem = require("./routerPostagem")

const router = (app, express) =>{
    app.use(routerPostagem)
}

module.exports = router;