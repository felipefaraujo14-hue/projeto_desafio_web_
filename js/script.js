console.log("teste")
console.log("Comando de saída")

// marcação

/* marcação

*/

// criando variável
let num1 = 50
let num2 = 100
const num3 = 450

console.log(num1)
console.log(num2)
console.log(num3)

if (true) {
    let num4 = 420
    var num5 = 180
    console.log(num4)
}

console.log(num5)

let num = 5

console.log(num)

num2 = 6

console.log(num2)

// num3 = 12

// concatenação
console.log("valor de num " + num)
console.log("valor de num3 ", num3)
console.log(`valor de num2 ${num2}`)
console.log("a soma dos números " + (15 + 8))
console.log("a soma dos números ", 15 + 8)
console.log(`a soma dos números ${15 + 8}`)
console.log("a soma dos números " + (num1 + num2))
console.log("a soma dos números", num2 + 8)
console.log(`a soma dos números ${num3 - num2}`)

// operadores matemáticos
/*
+ soma
- subtração
* multiplicação
/ divisão
% módulo
*/

console.log("soma das variáveis ", num1 + num2)
console.log("subtração das variáveis ", num3 - num1)
console.log("multiplicação das variáveis ", num5 * 2)
console.log("divisão das variáveis ", num2 / 2)
console.log("resto da divisão ", num2 % 2)
console.log(`resto da divisão ${num3 % 3}`)

// OPERADORES RELACIONAIS
/*
== IGUAL
> MAIOR
< MENOR
>= MAIOR OU IGUAL
<= MENOR OU IGUAL
!= DIFERENTE
*/

// OPERADORES LÓGICOS
/*
&& E
|| OU
*/

console.log('TESTE DE RELACIONAIS ', 10 == 5)
console.log('TESTE RELACIONAIS ', 10 != 5)
console.log('TESTE RELACIONAIS ', 10 > 5)
console.log('TESTE RELACIONAIS ', 10 < 5)
console.log('TESTE RELACIONAIS ', 10 >= 5)
console.log('TESTE RELACIONAIS ', 10 <= 5)
console.log('TESTE LÓGICO ', (10 > 5) && (15 < 8))
console.log('TESTE LÓGICO ', (10 > 5) || (15 < 8))