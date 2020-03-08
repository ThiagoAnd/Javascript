//Destructuring Objects

const pessoa = {
    nome: 'Pedro',
    idade: 25,
    peso: 80,
    endereco: {
        rua: "Mexico",
        numero: 51
    }
}

const carro = {
    marca: 'Peugeot',
    modelo: '208'
}

//Output: Mexico 51
const { endereco: { rua, numero } } = pessoa;
console.log(rua, numero);

//Output: Peugeots 208
const { marca, modelo } = carro;
console.log(marca + ' ' + modelo);

//Output: 25 Pedro
const { nome, idade } = pessoa;
console.log(idade, nome);

//Output: Pedro 25
const { nome: n, idade: i } = pessoa;
console.log(n, i);

//Output: 80 undefined true
const { peso, sobrenome, x = true } = pessoa;
console.log(peso, sobrenome, x);



