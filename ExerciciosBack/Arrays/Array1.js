//Forma não tão usual de declarar um array
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

//Usando notação literal, recomendada no dia a dia
aprovados = ['Bia','Carlos','Ana']
console.log(aprovados[0])

//Adicionando um elemento no array
aprovados.push('Marcos')
console.log(aprovados)

//Ordenar o array
aprovados.sort()
console.log(aprovados)

//Deletar a partir de um elemento uma quantidade de elementos. Automaticamente junta as pontas para o que foi deletado não ficar undefined
//splice(indice onde comeca,quantidade de indices a deletar)
aprovados.splice(1,1)
console.log(aprovados)

//Pode adicionar tambem com o splice sem deletar, utilizando zero para quantidade de elementos a excluir
aprovados.splice(1,0,'Novoelemento1','Novoelemento2')
console.log(aprovados)