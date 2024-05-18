    // function julie () {
    // const saludo = 'Francisco M. Te amo <3';
    // alert (saludo) ;
    // }

    // julie();

 /* Escribir un programa que le pida al usuario que ingrese dos numeros. Dentro, el programa analizara cualde los dos
 es el mayor y le devolvera un alert con el mayor de los numeros. En caso de que ambos numeros sean iguales,
 debe devolver un mensaje que lo indique*/
    
 
    // const numero1 = window.prompt ("Ingrese el primer numero");
    // const numero2 = window.prompt ("Ingrese el segundo numero");


    // function comparar (numero1, numero2) {

    //     if(numero1 == numero2) {
    //         alert("Son iguales")
    //         return 
    //     }

    //     if(numero1 > numero2) {
    //         alert("El mayor es " + numero1)
    //         return
    //     }
    //     if(numero1 < numero2) {
    //         alert("El mayor es " + numero2)
    //         return 
    //     }
        // if (numero1 == numero2) {
        //  return alert (numero1 + "y" + numero2 + " son iguales");
        // }

        // if (numero1 > numero2){
        //     alert ("el numero mayor es " + numero1);
        // } else {

        //     alert ("el numero mayor es " + numero2);
        // }
//     }


// comparar(numero1, numero2)

// //

/* Escribir unprograma que tome un array denumeros y nos devuelva el promedio de esos numeros. Ej si la array
tiene 3 numeros y esos numeros son 20, 25, 45 el promedio sera de 30*/

const notas = [40, 65, 80];
let suma = 0
let promedio = 0

notas.forEach(number => {
suma = suma + number
})

promedio = suma / notas.length
alert("El promedio es: " + promedio)