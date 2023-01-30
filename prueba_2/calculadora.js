
document.getElementById('boton_cuentas').addEventListener('click', function(){
    //VARIABLES (ingresadas en el tag input)
        //Primer número
    let numeroA = document.getElementById('numero1').value;
    console.log('El valor del numero A es: '+numeroA);
        //Segundo número
    let numeroB = document.getElementById('numero2').value;
    console.log('El valor del numero B es: '+numeroB);

    //OPERACIONES
        //Resultado SUMA
    let resultadoS = sumar(parseFloat(numeroA), parseFloat(numeroB));
    console.log('El resultado de la suma es: '+resultadoS);
        //Mostrar resultado SUMA
    document.getElementById('resultadoSuma').innerHTML = resultadoS;
    document.getElementById('contenedorResultadoSuma').style.display = "block" ;

        //Resultado RESTA
    let resultadoR = restar(parseFloat(numeroA), parseFloat(numeroB));
    console.log('El resultado de la resta es: '+resultadoR);
        //Mostrar resultado RESTA
    document.getElementById('resultadoResta').innerHTML = resultadoR;
    document.getElementById('contenedorResultadoResta').style.display = "block" ;

        //Resultado MULTIPLICACIÓN
    let resultadoM = multiplicar(parseFloat(numeroA), parseFloat(numeroB));
    console.log('El resultado de la multiplicación es: '+resultadoM);
        //Mostrar resultado MULTIPLICACIÓN
    document.getElementById('resultadoMulti').innerHTML = resultadoM;
    document.getElementById('contenedorResultadoMulti').style.display = "block" ;

    //Resultado DIVISIÓN
    let resultadoD = dividir(parseFloat(numeroA), parseFloat(numeroB));
    console.log('El resultado de la división es: '+resultadoD);
        //Mostrar resultado DIVISIÓN
    document.getElementById('resultadoDivi').innerHTML = resultadoD;
    document.getElementById('contenedorResultadoDivi').style.display = "block" ;
});

//FUNCIONES
    //SUMA
function sumar(a,b){
    return a + b;
}
    //RESTA
function restar(a,b){
    return a - b;
}
    //MULTIPLICACIÓN
function multiplicar(a,b){
    return a * b;
}
    //DIVISIÓN
function dividir(a,b){
    return a / b;
}
    //LÓGICA
let Aa = document.getElementById('numero1').value
let Bb = document.getElementById('numero2').value

if (Aa>Bb) {
    console.log("El primer factor es mayor que el segundo")
    
} else {
    console.log("El primer factor es menor que el segundo")
}