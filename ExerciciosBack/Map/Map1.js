//Dentro do map existe um laço
//A ideia é mapear um array com o array de mesmo tamanho
//só que com os dados transformados
//Exemplo, vc tem um array com valores 1,2,3 e quer outro array com o dobro de cada valor do array anterior
//O map serve para mapear os elementos de um array para outro
//O tamanho dos arrays tem que ser o mesmo

const nums = [1,2,3,4,5]

//Map é um for com proposito, internamente ele tem um for
//só que internamente ele fará uma transformação


let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado,nums)

const soma10 = e => e + 10
const triplo = e => e *3
const paraDinheiro = e => `RS ${parseFloat(e).toFixed(2).replace('.',',')}`
//result recebe um array que usa o array nums e soma10 e com esse resultado faz o triplo e com esse resultado passa para dinheiro
result = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(result)