// Imprimir do 0 ate 15, de 5 em 5

// console.log('inicio')
// for (let i = 0; i<= 15; i+=5){
//     console.log(i)
// }
// console.log('fim')

//Vamos criar uma função que calcula o IMC de uma pessoa, dado a altura em m e a massa em kg. massa / (altura**2)

function calcularIMC(altura, massa) {
    return massa / (altura**2)
} 

let imc1 = calcularIMC(1.63, 102)
console.log('seu imc é:' + ' ' + imc1)

let imc2 = calcularIMC(1.58, 102)
console.log(`seu imc é: ${imc2}`)

let imc3 = calcularIMC(1.70, 98)
console.log('seu imc é:' + ' ' + imc3)

