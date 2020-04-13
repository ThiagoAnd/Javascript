var a = 5;
var b = 10;
console.log('Quinze é ' + (a + b) + ' e\nnão ' + (2 * a + b) + '.');

//Usando Template String. Ela é usada com apostrofo chaves e cifrão, não é necessario o uso de \n para pular linha
console.log(`Quinze é ${a + b} e 
não ${2 * a + b}.`);