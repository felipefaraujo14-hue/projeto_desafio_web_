function entrar() {
    let codigo = document.getElementById("codigo").value;
    let senha = document.getElementById("senha").value;

    let resultado;

    if (codigo === "ABCD1234" && senha ==="1234" ) {
        resultado = "Acesso permitido.";
    } else {
        resultado = "Acesso negado.";
    }

    document.getElementById("resultado").innerHTML = resultado;
}