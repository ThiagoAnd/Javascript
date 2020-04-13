const aprovados = ['Agatha','Aldo','Daniel','Raquel']
console.log(aprovados)

//Dentro do foreach vai ser criado um callback que sera chamada para cada iteração, passando o proprio elemento e o indice correspondente a este elemento
//Aqui embaixo é usado template string
aprovados.forEach(function(nome,indice){
    console.log(`${indice +1}) ${nome}`) 
})

aprovados.forEach(nome => console.log(nome))