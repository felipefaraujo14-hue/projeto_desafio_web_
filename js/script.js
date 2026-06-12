/*
console.log("teste")
console.log("Comando de saída")

// marcação

 marcação



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

+ soma
- subtração
* multiplicação
/ divisão
% módulo


console.log("soma das variáveis ", num1 + num2)
console.log("subtração das variáveis ", num3 - num1)
console.log("multiplicação das variáveis ", num5 * 2)
console.log("divisão das variáveis ", num2 / 2)
console.log("resto da divisão ", num2 % 2)
console.log(`resto da divisão ${num3 % 3}`)

// OPERADORES RELACIONAIS

== IGUAL
> MAIOR
< MENOR
>= MAIOR OU IGUAL
<= MENOR OU IGUAL
!= DIFERENTE


// OPERADORES LÓGICOS
/*
&& E
|| OU


console.log('TESTE DE RELACIONAIS ', 10 == 5)
console.log('TESTE RELACIONAIS ', 10 != 5)
console.log('TESTE RELACIONAIS ', 10 > 5)
console.log('TESTE RELACIONAIS ', 10 < 5)
console.log('TESTE RELACIONAIS ', 10 >= 5)
console.log('TESTE RELACIONAIS ', 10 <= 5)
console.log('TESTE LÓGICO ', (10 > 5) && (15 < 8))
console.log('TESTE LÓGICO ', (10 > 5) || (15 < 8))

//TESTE LOGICO

    let idade = 50

    if (idade >= 18) {
        console.log("MAIOR DE IDADE")
    } else {
        console.log("MENOR DE IDADE")
    }

//ANINHAMENTO DE IF
    if (idade < 18) {
    console.log(`COM A IDADE DE ${idade}, NÃO É PERMITIDO POSSUIR CNH`);
} else if (idade < 50) {
    console.log(`COM A IDADE DE ${idade}, 10 ANOS PARA RENOVAR`);
} else if (idade < 70) {
    console.log(`COM A IDADE DE ${idade}, 5 ANOS PARA RENOVAR`);
} else {
    console.log(`COM A IDADE DE ${idade}, 3 ANOS PARA RENOVAR`);
}

//questao 1
let num7 = 5
let num8 = 10
let num9 = 50

let media = (num7 + num8 + num9) / 3

alert("A média é: " + media)

//questao 2

let largura = Number(prompt("Digite a largura da parede (m):"))
let altura = Number(prompt("Digite a altura da parede (m):"))

let area = largura * altura
let tinta = area / 2

alert(
    "Área da parede: " + area.toFixed(2) + " m²\n" +
    "Quantidade de tinta necessária: " + tinta.toFixed(2) + " litros"
)

//questao 3

let distancia = Number(prompt("Digite a distância a ser percorrida (km):"))
let consumo = Number(prompt("Digite o consumo médio do veículo (km/l):"))
let preco = Number(prompt("Digite o preço do litro do combustível (R$):"))

let combustivel = distancia / consumo
let valorTotal = combustivel * preco

alert(
    "Quantidade de combustível necessária: " + combustivel.toFixed(2) + " litros\n" +
    "Valor total do combustível: R$ " + valorTotal.toFixed(2)
)

let nome = prompt("Digite o nome:")
let nota1 = Number(prompt("Primeira nota:"))
let nota2 = Number(prompt("Segunda nota:"))
let nota3 = Number(prompt("Terceira nota:"))

let media = (nota1 + nota2 + nota3) / 3

if (media >= 6) {
    alert(`${nome}, sua média é: ${Math.round(media)}, você foi aprovado`)
} else {
    alert(`${nome}, sua média é: ${Math.round(media)}, você foi reprovado`)
}

//questao 5

let lado1 = Number(prompt("Digite o primeiro lado:"));
let lado2 = Number(prompt("Digite o segundo lado:"));
let lado3 = Number(prompt("Digite o terceiro lado:"));

if (lado1 === lado2 && lado2 === lado3) {
    alert("triângulo é equilátero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    alert("triângulo e isósceles");
} else {
    alert("triângulo é escaleno");
}
*/
//questao 6

let nome = prompt("Digite o nome do paciente:");
let peso = Number(prompt("Digite o peso kg:"));
let altura = Number(prompt("Digite a altura em metros:"));

let imc = peso / (altura * altura) * 10000;

let faixa;

if (imc < 20) {
    faixa = "Abaixo do peso";
} else if (imc >= 20 && imc < 25) {
    faixa = "Normal";
} else if (imc >= 25 && imc < 30) {
    faixa = "Excesso de peso";
} else if (imc >= 30 && imc < 35) {
    faixa = "Obesidade";
} else {
    faixa = "Obesidade mórbida";
}

alert(
    "Paciente: " + nome + 
    "\nIMC: " + imc.toFixed(2) + 
    "\nFaixa de risco: " + faixa
);