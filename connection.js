const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    "crud_orm",
    "fatec",
    "P@ssword1234",
    {
        host: "localhost",
        dialect: "mysql"
    }
)

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: " + erro)
})

module.exports = sequelize;