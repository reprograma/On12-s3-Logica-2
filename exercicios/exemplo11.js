//Imprima na tela a partir de 20 e depois de 10 em 10 até o 100, mas em vez dos numeros 60 e 90 imprima a palavra "CONTINUE".

let i = 10;

while (i<= 90) {
    i+=10

    if (i === 60 || i === 90 ){
        console.log("CONTINUE")
        continue
    }

    console.log(i)
}