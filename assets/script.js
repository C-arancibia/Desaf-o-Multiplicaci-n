// Solicitar al usuario que ingrese un número del 1 al 20
let numeroIngresado = parseInt(prompt("Ingresa un número del 1 al 20"));

// Función para validar si el número está dentro del rango del 1 al 20
const validarNumero = (numero) => {
    if (numero < 1 || numero > 20) { // Verificar si el número está fuera del rango
        console.log("Número fuera de rango"); // Mostrar un mensaje si el número está fuera del rango
        return false; // Devolver false si el número está fuera del rango
    }
    return true; // Devolver true si el número está dentro del rango
}

// Función para generar y mostrar las tablas de multiplicar del número ingresado
const generarMultiplicacion = (numero) => {
    for (let i = 1; i <= numero; i++) { // Iterar desde 1 hasta el número ingresado
        let resultado = i * numero; // Calcular el resultado de la multiplicación
        console.log(`${i} x ${numero} = ${resultado}`); // Mostrar la tabla de multiplicar
    }
}

// Función para generar y mostrar los factoriales del número ingresado
const generarFactorial = (numero) => {
    for (let i = 1; i <= numero; i++) { // Iterar desde 1 hasta el número ingresado
        let resultado = 1; // Inicializar el resultado del factorial como 1
        for (let j = 1; j <= i; j++) { // Iterar desde 1 hasta el número actual
            resultado *= j; // Calcular el factorial
        }
        console.log(`Factorial de ${i} es: ${resultado}`); // Mostrar el factorial
    }
}

// Validar el número ingresado por el usuario
let validacion = validarNumero(numeroIngresado);

// Si el número es válido, generar y mostrar las tablas de multiplicar y los factoriales
if (validacion) {
    generarMultiplicacion(numeroIngresado);
    generarFactorial(numeroIngresado);
}
