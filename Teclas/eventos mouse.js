var cuadro = document.getElementById("mi area de dibujo");
var papel = cuadro.getContext("2d");
cuadro.addEventListener("mousedown", lineaInicial);
cuadro.addEventListener("mousemove", lineaMovimiento);

var colorPincel = "#000";
let mouse = false;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle= colorPincel;
    lienzo.lineWidth = 2;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
function lineaInicial(){
    mouse = true;
}

function finLinea(){ 
    mouse = false;
}
function lineaMovimiento(event){ 
    if(mouse == true){ 
        dibujarLinea("colorPincel", event.layerX - 1, event.layerY - 1, event.layerX + 1, event.layerY + 1, papel);
    }
}