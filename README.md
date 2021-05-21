# Lógica Aplicada - Loop, Escopo e Função 🚀

**Semana 3 – Resolução de Problemas/Lógica aplicada e JavaScript (sintaxe básica)**

- Aprendizado de funções e escopo;
- Aprendizado de estrutura de repeticação.


<br>
<br>


## Plano da aula:
------
### 0. Chamada, apresentação das monitoras e acordos
<img src="https://i.pinimg.com/474x/b4/17/86/b41786b5e7627ed0c678a0ef4a62e9f6.jpg" alt="video chamada" width="200">

* Usar as reações do zoom e levantar a mão para sinalizar que gostaria de falar
* Enviar as dúvidas no chat
* Manter microfone desligado quando outras pessoas estiverem falando
* Manter câmera ligada o máximo possível
* Momento mão no código, momento de olho na tela

<br>

### 1. Funções

1. Conceito
1. O que são funções?

    "São ações executadas assim que são chamadas ou em decorrência de algum evento."
    "Uma função pode receber parâmetros e retornar um resultado."

    Na oficina, a gente colocou no html uma chamada pra ação que ocorria quando o botão de calcular era clicado. No arquivo js criamos a função abaixo:

```
    function clicar() {
        resposta.innerHTML = input.value
    }
```
- chamada -> no evento de clique
- parâmetros -> nao recebiamos 
- ação -> Pegar o valor digitadi do input e fazer aparecer na tela no elemento resposta
- retorno -> texto na tela com sucesso

A verdade é que na vida real, todas nós temos também tarefas e rotinas que seguem alguns critérios.

Exemplo jogar o lixo. Todas as segundas, quartas e sextas, eu posso jogar lixo organico.
Todas as tercas e quintas, eu posso jogar o lixo reciclável.

- chamada -> nos dias e horários referentes 
- parâmetros -> o lixo
- ação -> separar o lixo, amarrar o saco, levar até ao local destinado
- retorno -> lixo descartado com sucesso

E trazendo isso para o mundo do javascript, podemos criar um programa que me lembra de jogar o lixo corretamente. Vamos lá?

```  
function jogarLixo(dia) {
    if(dia === 'segunda'|| dia === 'quarta' || dia ==='sexta'){
        console.log('lixo organico') 
        } else if (dia === 'terca'|| dia === 'quinta') {
            console.log('lixo reciclavel')
        } else {
            console.log('nao pode jogar lixo')
        }  
        return dia 
}

let qualTipoJogarHoje = jogarLixo('sabado')
console.log(qualTipoJogarHoje)
```

2. Por que (Quando) utilizar?
Quando precisamos de uma instrução, uma ação que pode ser executada em diferentes momentos no nosso código.

2. Declaração
- Usamos a palavra reservada function
- Podemos dar um nome ou deixála anônima
- não esequecer de usar os parenteses, nele podemos passar parametros ou nao
- e dentro das chaves colocamos as instruções que podem ter um retorno ou não

3. Parâmetros
São informacões que se comportam como variaveis dentro daquela função e que podem ser usadas nas instruções

4. Retorno
Usando a palavra reservada return podemos, instruir nosso código a retornar algo.

5. Nomeando funções
- Sempre prefira usar verbos que descrevem exatamente o que a sua função irá fazer. 
- Não se preocupe se os nomes ficarem grandes, desde que sejam descritivos o suficiente.
- Use também o camelcase, quando usamos a segunda palavra com a primeira letra maiuscula.


### 2. Escopo

1. Conceito
Refere-se ao lugar em seu algoritmo ou função.

2. Escopo Global
Refere-se ao arquivo atual do js.

3. Escopo Local ou de Bloco
Refere-se à função ou aquele bloco de código.

Lembrete: Var não respeita escopo de bloco

4. Escopo Léxico

Um variavel recebe um indetificador único (nome) e o trecho de código que retorna quando ela é recuperada é o escopo léxico.

### 3. Estrutura de repetição
Loop, laço, iteração ou estrutura de repetição. 

A gente faz diariamente atividades com repetição, por exemplo num exercicío físico. Digamos que nosso personal nos mandou fazer uma série de 10 pulos de corda. 

A gente pode criar uma função pulaCorda() e quando ela for chamada, dentro dela irá executar 10 vezes o console.log com a string pulei a corda e o valor da repetição digitado manualmente. 

Agora se o professor mudar a série para 100 vezes, vai ficar chato digitar 100 consoles, certo? É aí que as estruturas de repetição podem nos ajudar, temos um ponto de partida e um ponto de chegada para nosso sistema, vamos começar do pulo 1 e vamos até o pulo 100 e queremos mostrar isso no console. 

Podemos fazer isso com for, while e também com o do...while.

```
function pulaCorda() {
    console.log('Pulei a corda com function 1')
    console.log('Pulei a corda com function 2')
    console.log('Pulei a corda com function 3')
    console.log('Pulei a corda com function 4')
    console.log('Pulei a corda com function 5')
    console.log('Pulei a corda com function 6')
    console.log('Pulei a corda com function 7')
    console.log('Pulei a corda com function 8')
    console.log('Pulei a corda com function 9')
    console.log('Pulei a corda com function 10')
}

pulaCorda();
```
```
console.log('inicio')
for(let i = 1; i <=3; i++) {
    console.log(`Pulei a corda com for ${i}`)
}
console.log('fim')
```
```
console.log('inicio')
let i = 1;
while(i <=3) {
    console.log(`Pulei a corda com while ${i}`)
    i++
}
console.log('fim')
```
```
console.log('inicio')
let index = 1;
do{
    console.log(`Pulei a corda com do...while ${index}`) 
    index++
}while(index<=3)
console.log('fim')
```
1. Conceito
for é a estrutura de repetição com variavél de controle, a gente usa quando sabe exatamente qual são os nossos pontos de partida e de chegada.

while faz o teste lógico no início e sendo verdadeiro ele executa o bloco de código

do...while primeiro executa o bloco e depois faz o teste lógico


2. Comandos especiais
    1. break: podemos encerrar uma instrução

    2. continue: podemos pular uma instrução

```
for(let i = 10; i > 0; i--) {

  console.log(i);

  if(i === 5) {
    break;
  }  
}

console.log("Deu o break");
```

```
let x = 10;

while(x < 100) {

  x += 10;
  
  if(x === 60 || x === 90) {
    console.log("CONTINUE");
    continue;
  }

  console.log("Testando continue " + x);

}
```
Vamos debugar para perceber como funciona?

**Extra: ferramenta debug do VSCode**
- clica no besouro
- criar launch do debug
- define a variavel no watch
- marca o breakpoint
- dá o play e vai apertando f10



<br>

#### 6.5 **Exemplos:**

| Exemplo 01 | Descrição |
| --- | --- |
| `IMC` | Vamos criar uma função que calcula o IMC de uma pessoa, dado a altura em m e a massa em kg. |

| Exemplo 02 | Descrição |
| --- | --- |
| `Par ou Impar` | Crie uma função que determina se um número é par ou impar.  |

| Exemplo 03 | Descrição |
| --- | --- |
| `Tabuada` | Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10. |

| Exemplo 04 | Descrição |
| --- | --- |
| `Pares` |Imprima na tela os números pares existentes entre 0 e 100..|

| Exemplo 05 | Descrição |
| --- | --- |
| `conversor de temperatura` | Crie uma função que recebe uma temperatura em graus celsius retorna o valor convertido em Fahrenheit. |

| Exemplo 06 | Descrição |
| --- | --- |
| `Fatorial` | Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo:  3! = 3 * 2 * 1 // 6 |

```
Irei incluir mais 4 exercícios
```
<br>


---
**Desafio entregavel:**

#### Calma! É só uma TAREFINHA DE CASA pra chamar de sua! Já treinamos bastante com nossos exemplos na aula!

Resolva as questões abaixo: 

> Passo a passo:
1) Crie uma pasta que irá conter um arquivo  com extensão .js para cada questão abaixo de apenas um README.md

```
    Irei definir a tarefinha de casa
```
2) A entrega é pelo classroom

## Simara Conceição
- [instagram](https://www.instagram.com/simara_conceicao)
- [linkedin](https://www.linkedin.com/in/simaraconceicao/)
- [github](https://github.com/simaraconceicao)
- [spotify](https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3)
- [quero ser dev](https://queroserdev.com)
