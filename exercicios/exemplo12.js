//Vamos criar uma conta bancária com as 3 operações básicas? rs
// a) A conta deverá iniciar com o saldo de 100
// b) Deverá ser possível escolher uma operação em forma de string: 'depositar', 'sacar', 'consultar saldo'
// c) Deverá ser possível passar 1 valor para a operação escolhida
// d) Deverá retornar o resultado e imprimir no console o saldo atual

function conta(transacao, valor){
    let saldo = 100
    switch(transacao){
        case 'depositar':
            saldo += valor
            break
        case 'sacar':
            saldo -= valor
            break
        case 'consultar saldo':
            saldo
            break
        default:
            console.log('informe dados válidos')
    }
    return `Seu saldo é: ${saldo}`
}

console.log(conta('depositar', 2)) // 102
console.log(conta('sacar', 10)) // 90
console.log(conta('consultar saldo')) // 100