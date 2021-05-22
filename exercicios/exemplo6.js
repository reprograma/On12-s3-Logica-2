// Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo:  
// 3! = 3 * 2 * 1 // 6

function fatorial(numero){
    let contador = 1

    for(let i = numero; i > 1; i--){
        contador*=i
    }

    return contador
}

console.log(fatorial(3))