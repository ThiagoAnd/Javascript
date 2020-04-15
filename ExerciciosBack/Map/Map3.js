Array.prototype.map2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length;i++){
        newArray.push(callback(this[i],i,this))
    }
    return newArray
}

const carrinho = [
    '{"nome":"Borracha","preco": 3.45}',
    '{"nome":"Caderno","preco": 13.90}',
    '{"nome":"kit de lapis","preco": 41.22}',
    '{"nome":"Caneta","preco": 7.50}'
]



//Retornar somente os precos

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map(apenasPreco)
console.log(resultado)