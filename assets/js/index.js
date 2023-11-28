function cambiarBordeColor() {
    let imagen = document.querySelector("#imgPerrito");
    if (imagen.style.border === "2px solid red") {
        imagen.style.border = "";
    } else {
        imagen.style.border = "2px solid red";
    }
}

function procesarTickets() {
    let inputSticker1 = document.querySelector("#inputSticker1").value;
    let inputSticker2 = document.querySelector("#inputSticker2").value;
    let inputSticker3 = document.querySelector("#inputSticker3").value;

    let cantidadSticker1 = parseInt(inputSticker1);
    let cantidadSticker2 = parseInt(inputSticker2);
    let cantidadSticker3 = parseInt(inputSticker3);

    let mensaje = document.querySelector("#mensaje");

    //validar si los valores son numericos
    if (isNaN(cantidadSticker1) || isNaN(cantidadSticker2) || isNaN(cantidadSticker3)) {
        mensaje.innerText = "Solo se aceptan números";
        return; //detener
    }

    //verificar mayor a 0
    if (cantidadSticker1 < 0 || cantidadSticker2 < 0 || cantidadSticker3 < 0) {
        mensaje.innerText = "Debe ingresar números mayores a 0";
        return; //detener
    }

    let totalStickers = cantidadSticker1 + cantidadSticker2 + cantidadSticker3;

    if (totalStickers <= 10) {
        mensaje.innerText = "Llevas " + totalStickers + " stickers.";
    } else {
        mensaje.innerText = "Llevas demasiados stickers";
    }
}

function verificarContraseña() {
    let selector1 = document.getElementById("selector1").value;
    let selector2 = document.getElementById("selector2").value;
    let selector3 = document.getElementById("selector3").value;

    let contraseña = selector1 + selector2 + selector3;
    let resultado = document.getElementById("resultadoContraseña");

    if (contraseña === "911") {
        resultado.innerText = "Password 1 correcto";
    } else if (contraseña === "714") {
        resultado.innerText = "Password 2 correcto";
    } else {
        resultado.innerText = "Password incorrecto";
    }
}
