function calcularTinta() {
    let largura = Number(document.getElementById("largura").value);
    let altura = Number(document.getElementById("altura").value);

    let area = largura * altura;
    let tinta = area / 2;

    document.getElementById("resultado").innerHTML =
        "Área da parede: " + area.toFixed(2) + " m²<br>" +
        "Quantidade de tinta necessária: " + tinta.toFixed(2) + " litros";
}