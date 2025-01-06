// Función declarada para calcular el promedio
function calcularPromedio(a, b, c) {
    if (!a || !b || !c) {
        console.log('Error: Todos los parámetros deben ser números válidos.');
        return;
    }
    console.log("El promedio es: " + (a + b + c) / 3);
}

// Función expresada para determinar el mayor
let determinarMayor = function (a, b) {
    if (!a || !b) {
        console.log('Error: Todos los parámetros deben ser números válidos.');
        return;
    }
    console.log("El número mayor es: " + (a > b ? a : b));
};

// Función flecha para verificar si un número es par
const esPar = (x) => {
    if (!x) {
        console.log('Error: El parámetro debe ser un número válido.');
        return false;
    }
    return x % 2 === 0;
};

// Llamadas a las funciones
calcularPromedio(15, 20, 16); // Llama a calcularPromedio con números válidos

determinarMayor(25, 30); // Llama a determinarMayor con números válidos

let numero = 3;
console.log("¿El número " + numero + " es par? " + esPar(numero)); // Llama a esPar con un número

// Uso de setTimeout con funciones
setTimeout(function () {
    calcularPromedio(18, 11, 20); // Calcula y muestra el promedio
    console.log("¿El número 2 es par? " + esPar(2)); // Verifica si 2 es par
}, 2000); // Espera 2 segundos antes de ejecutar
