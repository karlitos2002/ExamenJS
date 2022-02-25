function _id(ident) {
    return document.getElementById(ident);
}

function factorial() {

    var entrada = _id("entradaFactorial").value;
    var operacion = "";

    if (entrada < 0) {
        alert ("no se pueden negativos")
    }

    var resultado = 1;
    while (entrada > 0) {
        resultado = resultado * entrada;
        operacion = operacion += entrada;
        if (entrada > 1) {
            operacion += "*";
        }
        entrada--;



    }

    _id("resultatFactorial").innerHTML = resultado;
    _id("operacionsFactorial").innerHTML = operacion;
}


function calculaIVA() {
    
}

function canviaFons(tipus) {
    if (tipus == "random"){
        var gris = Math.floor(Math.random() * 255);
        colorFondo = "rgb(" + gris + "," + gris + "," + gris + ")";    
    }
    else if (tipus == "clear") {
        colorFondo = "white"
    }
    else if (gris > 255) {
        colorTexto = "white" ;
    }
_id("cos").style.backgroundColor = colorFondo;
_id("cos").style.color = colorTexto;
}