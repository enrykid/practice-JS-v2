//1. Escribe una función que reciba un parámetro y lo imprima en consola.
/*
function insertParam() {
    var param = prompt("ingresa un parametro");
    console.log(param)
}
*/
//2. Escribe una función que reciba dos parámetros, los sume e imprima en consola el resultado de la operación.
/*
function sumTwoNumbers(numb1, numb2) {
    let sum = numb1 + numb2;
    console.log(sum)
}
let numb1 = parseInt(prompt("ingrese el primer número: "));
let numb2 = parseInt(prompt("ingrese el segundo número: "));
sumTwoNumbers(numb1, numb2);
*/
//3. Escribe una función que reciba dos parámetros, los reste e imprima en consola el resultado de la operación. 

/*
function subtraction(numb1, numb2) {
    let subtract = numb1 - numb2;
    console.log(subtract)
}
let numb1 = parseInt(prompt("ingrese el primer número: "));
let numb2 = parseInt(prompt("ingrese el segundo número: "));
subtraction(numb1, numb2);
*/
//4. Escribe una función que reciba dos parámetros, los multiplique e imprima en consola el resultado de la operación. 
/*
function multiplication(numb1, numb2) {
    let multip = numb1 * numb2;
    console.log(multip)
}
let numb1 = parseInt(prompt("ingrese el primer número: "));
let numb2 = parseInt(prompt("ingrese el segundo número: "));
multiplication(numb1, numb2)
*/
//5. Escribe una función que reciba dos parámetros, los divida e imprima en consola el resultado de la operación. 
/*
function division(dividend, divisor) {

    if (divisor === 0) {
        alert("no puedes dividir entre 0");
    } else {
        let resultDiv = dividend / divisor;
        console.log(resultDiv)
    }

}

let dividend = parseInt(prompt("ingrese el primer número: "));
let divisor = parseInt(prompt("ingrese el segundo número: "));

division(dividend, divisor)
*/
//6. Escribe una función que reciba el radio de un círculo como parámetro, calcule el área del círculo e imprima en consola.
/*
function calculateArea(raduis) {
    const pi = 3.1416;
    const area = (pi * raduis * raduis);
    console.log(`el area del circulo es ${area} (metros cuadrados)`)
}
const raduis = parseFloat(prompt('Ingrese el valor del radio '));
calculateArea(raduis)

*/
//7. Escribe una función que reciba como parámetro un valor en metros e imprima en consola su equivalente en kilómetros, con máximo dos decimales.
/*
function convert() {
    const meters = parseFloat(prompt('Ingrese el valor en metros '));
    if (typeof meters === 'number') {
        console.log(`el valoen kilometros es ${(meters/1000).toFixed(2)}`)
    } else {
        alert("El dato ingresado no es correcto , intentalo de nuevo")
    }

}
convert()
/*
//8. Escribe una función que reciba como parámetro un valor en grados Celsius e imprima en consola su equivalente en grados Farenheit, con máximo dos decimales.
/*

function degrees(celsius) {
    if (typeof(celsius) !== "number") {
        alert("El dato ingresado no es correcto , intentalo de nuevo")
    } else {
        console.log(`el valor en grados Centigrados es ${((celsius*(9/5)+32)).toFixed(2)}`)
    }
}
const celsius = parseFloat(prompt('Ingrese el valor en grados celcius'));
degrees(celsius)

*/
//9. Escribe una función que reciba las  siguientes listas de números como parámetro y encuentre el valor más alto y más bajo en la lista. Lista1 = [10,4,2,20,5] Lista2=[0,0,0,1,0] Lista3=[-13,10,9,8,0,2000,-1]
/*
function getMaxMin(list) {
    if (typeof(list) === "object" && list.length > 0) {
        let max = list[0];
        let min = list[0];
        for (let i = 0; i < list.length; i++) {
            if (list[i] > max) {
                max = list[i]
            }
            if (list[i] < min) {
                min = list[i]
            }

        }
        console.log("max: " + max + " min " + min)

    } else {
        alert("El dato ingresado no es correcto , intentalo de nuevo")
    }

}

getMaxMin([-13, 10, 9, 8, 0, 2000, -1])
*/
//10. Escribe una función que reciba dos parámetros con los que se calculará el valor exponencial de una base. El primer parámetro será la base y el segundo será el exponente. Imprimir el resultado del valor exponencial de la base en consola.
/*
function exponentialValue(base, expo) {
    if (typeof(base) !== "number" || typeof(expo) !== "number") {
        alert("paremetro no valido")
    } else {
        console.log(`el valor exponencial es ${base**expo}`)
    }
}
const base = parseFloat(prompt('Ingrese el valor de la base'));
const expo = parseFloat(prompt('Ingrese el valor del esponente'));
exponentialValue(base, expo)
*/
//11. Escribe una función que reciba un número como parámetro. Este número será la cantidad de veces que se debe solicitar, con la función prompt, que el usuario ingrese el nombre de un país diferente. Después de que el usuario ingrese el nombre de los países, el sistema debe mostrar un mensaje en pantalla indicando el nombre del país y cuántas letras tiene el nombre del país.
/*
function countries(repeat) {
    if (typeof(repeat) !== "number") {
        alert("paremetro no valido")
    } else {
        const countries = []
        for (let i = 0; i < repeat; i++) {
            const country = prompt('Ingrese el el nombre sel pais ' + i)
            countries.push(country)
        }
        for (let i = 0; i < repeat; i++) {
            alert("el pais en la posicion " + countries[i] + " tiene " + countries[i].length + " letras")

        }
    }
}
const repeat = parseFloat(prompt('Ingrese el numero de repeticiones'));
countries(repeat)
*/