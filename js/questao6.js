function calcularIMC() {
    let nome = document.getElementById("nome").value;
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);

    let imc = peso / (altura * altura) * 10000;

    let faixa;

    if (imc < 20) {
        faixa = "Abaixo do peso";
    } else if (imc < 25) {
        faixa = "Normal";
    } else if (imc < 30) {
        faixa = "Excesso de peso";
    } else if (imc < 35) {
        faixa = "Obesidade";
    } else {
        faixa = "Obesidade mórbida";
    }

    document.getElementById("resultado").innerHTML =
        `Paciente: ${nome}<br>
         IMC: ${imc.toFixed(2)}<br>
         Faixa de risco: ${faixa}`;
}