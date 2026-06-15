function calcularMedia() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);

    let media = (num1 + num2 + num3) / 3;

    document.getElementById("resultado").textContent =
        "A média é: " + media;
}