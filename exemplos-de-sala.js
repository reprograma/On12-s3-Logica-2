function soma(numero1, numero2) {
    return numero1 + numero2
}

console.log(soma(2, 3))
console.log(soma(34, 3))
console.log(soma(34, 36))
console.log(soma(100, 35))


function fale(nome) {
    return`Fale, ${nome}`
}

console.log(fale('Leticia'))






function abaixeAmao(nome) {
    return `Abaixe a mão, ${nome}`
}

// console.log(abaixeAmao('Leticia'))

//Meu professor me indicou pular a corda 10x

function pulaCorda() {
    console.log('Pulei 1x com function')
    console.log('Pulei 2x com function')
    console.log('Pulei 3x com function')
    console.log('Pulei 4x com function')
    console.log('Pulei 5x com function')
    console.log('Pulei 6x com function')
    console.log('Pulei 7x com function')
    console.log('Pulei 8x com function')
    console.log('Pulei 9x com function')
    console.log('Pulei 10x com function')
}

pulaCorda()

//Meu professor me indicou pular a corda 100x

for (let repeticao = 1; repeticao <=100;repeticao++) {
    console.log(`pulei a ${repeticao} com for`)
}


//Meu professor me indicou pular a corda 10x com for , so vou ate o 5
for (let i = 1; i <= 10; i++) {
    if(i===6) {
        continue
    }
    console.log(`${i}x com for`)
}

//casos especiais com break e o continue

//Meu professor me indicou pular a corda 10x com while
let index = 0
while (index <= 10) {
    console.log(index + 'x com for')
    index= index+1 // index++
}




//Meu professor me indicou pular a corda 10x com do...while//
let indice = 10
do {
    console.log(indice + 'x com do...while')
    indice++
} while(indice >=1)

//chamada de alunas 

let alunes = ["stefane", "Luna", "Hellyda", "Larisse", "Alines", "Brunas"]

for (let i = 0; i<alunes.length; i++) {
    console.log(alunes[i])
}

console.log(alunes[0])
console.log(alunes[6])