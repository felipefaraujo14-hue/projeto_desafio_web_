function calcularCombustivel() {
    let distancia = Number(document.getElementById("distancia").value);
    let consumo = Number(document.getElementById("consumo").value);
    let preco = Number(document.getElementById("preco").value);

    let combustivel = distancia / consumo;
    let valorTotal = combustivel * preco;

    document.getElementById("resultado").innerHTML =
        "Quantidade de combustível necessária: " +
        combustivel.toFixed(2) + " litros<br>" +
        "Valor total do combustível: R$ " +
        valorTotal.toFixed(2);
}