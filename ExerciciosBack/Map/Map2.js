const carrinho = [
    '{"nome":"Borracha","preco": 3.45}',
    '{"nome":"Caderno","preco": 13.90}',
    '{"nome":"kit de lapis","preco": 41.22}',
    '{"nome":"Caneta","preco": 7.50}'
]
console.log(carrinho)


//Retornar somente os precos

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)