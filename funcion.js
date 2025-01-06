function calcularPromedio(a, b, c){
    console.log("El promedio es : " + (a+b+c)/3)
}
calcularPromedio(15,20,16);

let determinarMayor = function (a,b ) {
    if(a > b){
        console.log('El numero mayor es : ' + a);
    } 
    else if(a<b){
        console.log('El numero mayor es : ' + b);

    }
    }

const esPar = x => x/2;
if (esPar== 0){
    return true; 
}
else {
    return false;
}
console.log(esPar(3));

setTimeout(function (){
    console.log(calcularPromedio(18,11,20));
    console.log(esPar(2));
})

/*Crea una funcion delcarada llamada calcularPromedio que reciba tres numeros 
como parametro y retorne su promedio 

Declare una funcion expresada llamada determinarMayor que reciba dos numeros como parametros y 
retorne cual de ellos es el mayor 

Crea una funcion flecha llamada esPar que reciba un numro y retorne si el numero 
es par y false si no lo es 

Escribe una funcion anonima autoejecutable que : 
llame a las funciones anteriores ( calcularPromedio,feterminarMayor, y esPar)
use valores de ejemplo y muestre los resultados en la consola 

Reto agrega validaciones para asegurarte de que los parametros son numeros antes de realizar 
las operaciones. 
Si algun parametro no es un numero, lanza un error con un mensaje descriptivo */




