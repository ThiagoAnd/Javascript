const pilotos = ['Vettel','Alonso','Raikkonen','Massa']

//Metodo Pop retira o ultimo elemento
pilotos.pop()

console.log(pilotos)

//Adiciona no ultimo indice
pilotos.push('Verstappen')

//Retira do começo da lista
pilotos.shift()
console.log(pilotos)

//Adiciona no inicio
pilotos.unshift('Irvine')
console.log(pilotos)

//Adiciona a partir de um indice em uma lista
pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos)

//Remove a partir de um indice
pilotos.splice(3,1)
console.log(pilotos)

//Constroi um novo array a partir de uma parte do array
const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos)

//Constroi um array a partir de um indice ate outro indice(no ultimo indice vai para um a menos)
const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)
