const pessoa = {
    saudacao: "Bom dia",
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

//Forma errada de passar a funcao
const pessoa2 = pessoa.falar
pessoa2()


/*O Bind linka o this ao objeto em que foi criado, 
sem ele não seria possivel utiliza-lo em uma constante que recebe a funcao*/
const pessoaFalando = pessoa.falar.bind(pessoa)
pessoaFalando()


/*Referenciando dentro de uma funcao */
function funcionario () {
    this.idade = 0

    setInterval (function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

//new funcionario
 funcionario()


