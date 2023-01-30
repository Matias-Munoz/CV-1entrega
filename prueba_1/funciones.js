
//LOS EVENTOS PUEDO BUSCARLOS EN DEVELOPER.MOZILLA

//EVENTO 1, FORMA UNO. EL EVENTO SUCEDE CUANDO HAGO CLICK EN EL BOTÓN.
/**
document.getElementById('boton_texto').onclick = function () {
    console.log("Capturamos el evento click, solo se ve en la consola");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento con JS"
}
*/


//EVENTO 1, FORMA DOS. EL EVENTO SUCEDE CUANDO HAGO CLICK EN CUALQUIER PARTE.
/**
document.addEventListener('click', function() {
    console.log("Hola mundo desde EventListener");
    document.getElementById("demo").innerHTML = "Nueva prueba"
});
*/


//EVENTO 2: CAMBIAR COLOR DE FONDO CUANDO HAGO CLICK EN EL BOTON
//          Y REETABLECER COLOR CON OTRO BOTON
document.getElementById('boton_color').addEventListener('click', function() {
    console.log("Has cambiado el color de fondo");
    document.body.style.backgroundColor = 'white';
})

document.getElementById('boton_default').addEventListener('click', function() {
    console.log("Has vuelto al color original");
    document.body.style.backgroundColor = 'darksalmon';
})

//EVENTO 3: OCULTAR TEXTO CUANDO HAGO CLICK EN EL BOTON
document.getElementById('boton_ocultar').addEventListener('click', function() {
    console.log("Has ocultado el texto");
    document.getElementById("demo").style.display = "none";
})

