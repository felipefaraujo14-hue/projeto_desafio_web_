function calcular() {
    let numero = Number(document.getElementById("numero").value);

    let resultado;

    if (numero % 3 === 0 && numero % 7 === 0) {
        resultado = "O número é divisível por 3 e por 7.";
    } else {
        resultado = "O número não é divisível por 3 e por 7.";
    }

    document.getElementById("resultado").innerHTML = resultado;
}