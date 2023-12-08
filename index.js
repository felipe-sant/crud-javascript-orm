(async () => {
    const database = require('./connection')
    const Produto = require('./tabelas/produto')
    const Cliente = require('./tabelas/cliente')

    const resultado = await database.sync();

    function insertProduto(nome) {
        const createResult = Produto.create({
            nome: nome
        }).then(() => {
            console.log("Produto criado com sucesso")
        }).catch((error) => {
            console.log("Não foi possivel criar o produto")
        })
    }

    function insertCliente(nome) {
        const createResult = Cliente.create({
            nome: nome
        }).then(() => {
            console.log("Cliente criado com sucesso")
        }).catch((error) => {
            console.log("Não foi possivel criar o cliente")
        })
    }

    function findProduto(id){
        const findResult = Produto.findByPk(id).then((produto) => {
            console.log(produto)
        }).catch((error) => {
            console.log("Não foi possivel encontrar o produto")
        })
    }

    function findCliente(id){
        const findResult = Cliente.findByPk(id).then((cliente) => {
            console.log(cliente)
        }).catch((error) => {
            console.log("Não foi possivel encontrar o cliente")
        })
    }

    function updateProduto(id, newNome) {
        const updateResult = Produto.update({
            nome: newNome
        }, {
            where: {
                id: id
            }
        }).then(() => {
            console.log("Produto atualizado com sucesso")
        }).catch((error) => {
            console.log("Não foi possivel atualizar o produto")
        })
    }

    function updateCliente(id, newNome) {
        const updateResult = Cliente.update({
            nome: newNome
        }, {
            where: {
                id: id
            }
        }).then(() => {
            console.log("Cliente atualizado com sucesso")
        }).catch((error) => {
            console.log("Não foi possivel atualizar o cliente")
        })
    }
    
    function deleteProduto(id) {
        const deleteResult = Produto.destroy({
            where: {
                id: id
            }
        }).then(() => {
            console.log("Produto deletado com sucesso")
        }).catch((error) => {
            console.log("Não foi possivel deletar o produto")
        })
    }

    function deleteCliente(id) {
        const deleteResult = Cliente.destroy({
            where: {
                id: id
            }
        }).then(() => {
            console.log("Cliente deletado com sucesso")
        }).catch((error) => {
            console.log("Não foi possivel deletar o cliente")
        })
    }
})()