//Transforma um array em um numero, um array em string,etc
//O resultado da função reduce é passado como resposta da função anterior passada para proxima
 const alunos = [
{nome: 'Joao',nota: 7.3, bolsista: false},
{nome: 'Maria',nota: 9.2, bolsista: true},
{nome: 'Pedro',nota: 9.8, bolsista: false},
{nome: 'Ana',nota: 8.7, bolsista: true}
 ]

 //Aqui somou todas as notas.
 const resultado = alunos.map(a => a.nota).reduce(function(acumulador,atual){
     console.log(acumulador,atual)
     return acumulador + atual
 })
 console.log(resultado)