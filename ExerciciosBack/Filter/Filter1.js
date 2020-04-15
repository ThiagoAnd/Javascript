//Filtra um array . Por exemplo filtrar todos os alunos que tem nota igual a 7

const produtos = [
{nome: 'Notebook',preco: 2499,fragil: true},
{nome: 'Ipad Pro',preco: 4199,fragil: true},
{nome: 'Copo de vidro',preco: 12.49,fragil: true},
{nome: 'Copo de Plastico',preco: 18.99,fragil: false},

]
//No filter o array final normalmente é menor ou igual ao array original
console.log(produtos.filter(function(p){
return p.preco > 2500
}))

//Filtrando duas vezes

const caro = produto => produto.preco >= 500
//basta retornar fragil que ele vai retornar verdadeiro ou falso
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))