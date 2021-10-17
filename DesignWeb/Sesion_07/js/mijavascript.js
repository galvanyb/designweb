function compara() {
    var a = 2;
    var b = 2;
    if (a == b)
        alert("a y b son iguales");
    else
        alert("a y b son diferentes");
}

function resta(x, y) {
    var rest = x - y;
    document.write("<h2>La Resta es: " + rest + "</h2>")
}

function suma(a, b) {
    var sum = a + b;
    document.getElementById("sumar").innerHTML = "La suma es: " + sum;
}

function escribir() {
    valor = document.getElementById('entrada').value;
    document.getElementById('contenido').innerHTML = ' ' + valor;
}

$(document).ready(function() {
    $("a").click(function(evento) {
        alert("Has pulsado el enlace. Ahora serás redireccionado a la pagina de la USAT")
    });
});

//Ocultar / Mostrar Bloque
$("#c1b").click(function() {
    $("#cont1").toggle(1500);
}, function() {
    $("#cont1").toggle(1500);
});


//Par Impar

function parImpar(numero) {
    if (numero % 2 == 0) {
        return "par";
    } else {
        return "impar";
    }
}