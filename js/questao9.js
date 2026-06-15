document.getElementById("formProduto").addEventListener("submit", function (e) {
    e.preventDefault();
  
    let nome = document.getElementById("nome").value;
    let valorCompra = parseFloat(document.getElementById("valorCompra").value);
  
    let percentual = 0;
    let valorVenda = 0;
  
    if (valorCompra < 10) {
      percentual = 0.70;
    } else if (valorCompra >= 10 && valorCompra < 30) {
      percentual = 0.50;
    } else if (valorCompra >= 30 && valorCompra < 50) {
      percentual = 0.40;
    } else {
      percentual = 0.30;
    }
  
    valorVenda = valorCompra + (valorCompra * percentual);
  
    document.getElementById("resultado").innerHTML =
      "Produto: <strong>" + nome + "</strong><br>" +
      "Valor de venda: <strong>R$ " + valorVenda.toFixed(2) + "</strong>";
  });