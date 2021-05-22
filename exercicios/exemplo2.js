// Crie uma função que determina se um número é par ou impar.

//1- declarar uma funcao: dar um nome parOuImpar, parametro numero

//2- dentro do bloco {} return 
    // o que define um numero par, o resto da divisao por 2 é zero : numero % 2 === 0
       //return numero + '' + 'par'
    // condicao para numero ímpar numero % 2 !== 0
        //return numero + '' + 'ímpar'
    // se nao for um numero, retorte o texto 'digite uma entrada válida'

//3- criar uma variavel com let e nome verificacao e atribui parOuImpar(3)
//4 - vou dar um console passando verificacao


// function parOuImpar(numero) {
//     if(numero % 2 ===0) {
//         return numero + ' é par'
//     } else {
//         return numero + ' é ímpar'
//     }   
//  }


//caso de testes função

// passar o nome numero 
// console.log(parOuImpar(numero)) // is not defined

//passar a letra n
// console.log(parOuImpar(n)) // is not defined

//passar a string nadinha
// console.log(parOuImpar('nadinha')) // nadinha é ímpar


//passar um numero válido
// console.log(parOuImpar(1934)) // 1934 é par







// Crie uma função que determina se um número é par ou impar, se a usuária incluir uam entrada nao
//que nao é do tipo numero peça para digitar uma  entrada válida

function parOuImpar(entrada){

    if (typeof entrada !== 'number'){
        return 'Digite uma entrada válida!'
    } else if(entrada%2 ===0) {
        return entrada + ' é par'
    } else if (entrada%2 !==0){
        return entrada + ' é ímpar'
    }
  
}

console.log(parOuImpar('qualquer coisa'))