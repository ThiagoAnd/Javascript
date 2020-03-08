/*Intuito de ter uma sintaxe curta, e um "this" associado 
ao contexto a qual a função foi incluida*/

//Função normal
let dobro = function (a) {
    return 2 * a
}
console.log(dobro(3))

//Arrow function. Tambem é uma função anonima.
dobro = (a) => {
    return 2 * a
}
console.log(dobro(4))

//Arrow function reduzida em uma linha e com return
dobro = a => 2 * a
console.log(dobro(7))

//O "this" não varia conforme a função caso usar a arrow function(vantagem)
function pessoa(){
    this.idade=0
    setInterval(()=>{
        this.idade++
        console.log(this.idade)
    },1000)
}
//instanciando sem atribuir
new pessoa



