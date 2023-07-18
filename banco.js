const pg = require("pg")
require('dotenv').config()
const banco = new pg.Client(process.env.DATABASE)

banco.connect((erro) => {
    if (erro) {
        return console.log("Não foi possível se conectar com o ElephantSQL", erro)
    } else {
        return console.log("Conectado ao ElephantSQL")
    }
})
module.exports = banco