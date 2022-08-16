function encriptar() {
    var texto = document.getElementById("input-texto").value.toLowerCase();
    var txtIngresado = texto.replace(/e/igm, "enter");
    var txtIngresado = txtIngresado.replace(/o/igm, "ober");
    var txtIngresado = txtIngresado.replace(/i/igm, "imes");
    var txtIngresado = txtIngresado.replace(/a/igm, "ai");
    var txtIngresado = txtIngresado.replace(/u/igm, "ufat");

    document.getElementById("margarita").style.display = "none";
    document.getElementById("sin-mensaje").style.display = "none";
    document.getElementById("resultado").innerHTML = txtIngresado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar() {
    var texto = document.getElementById("input-texto").value.toLowerCase();
    var txtIngresado = texto.replace(/enter/igm, "e");
    var txtIngresado = txtIngresado.replace(/ober/igm, "o");
    var txtIngresado = txtIngresado.replace(/imes/igm, "i");
    var txtIngresado = txtIngresado.replace(/ai/igm, "a");
    var txtIngresado = txtIngresado.replace(/ufat/igm, "u");

    document.getElementById("margarita").style.display = "none";
    document.getElementById("sin-mensaje").style.display = "none";
    document.getElementById("resultado").innerHTML = txtIngresado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copy() {
    var contenido = document.querySelector("#resultado");
    contenido.select();
    document.execCommand("copy");
    alert("¡El mensaje se copió correctamente!");
}

