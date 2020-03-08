//Funcao anonima e arrow function
const soma = (x, y) => x + y
console.log(soma(4,2))

//Terceiro parametro recebe a funcao soma por default
const imprimeResultado = function (a,b,operacao = soma){
    console.log(operacao(a,b))
}
imprimeResultado(7,2)

/*Terceiro parametro recebendo funcao anonima e consequentemente
mudando a chamada interna*/
imprimeResultado(3,4,function(x,y){
    return x-y
})

