// JavaScript Asincrono


//Ejercicio 1
// setTimeout
// Instrucciones
// Utilice la función setTimeout para mostrar un mensaje “¡Hello World!” después de 3 segundos.

// setTimeout(() => {
//     console.log("Hello World");
// }, 3000);

//////////////////////////////////////////////////

// setInterval #1
// Instrucciones
// Utilice la función setInterval para mostrar un mensaje “Hello, every 3 seconds” cada 3 segundos. Detenga el intervalo después de 10 segundos usando clearInterval.

//mi manera de hacerlo
// let counter = 0;
// setInterval(() => {
//     if (counter < 10){
//         console.log("Hello, every 3 seconds");
//         counter ++;
//     } else{
//         clearInterval();
//     }
// }, 3000);

//la del profesor
// const intervalId = setInterval(() => {
//     console.log("Hello, every 3 seconds");
//   }, 3000);
   
//   setTimeout(() => {
//     clearInterval(intervalId);
//   }, 10000);

////////////////////////////////////////////////////

// setInterval #2
// Instrucciones

// Crea una función llamada countdown que tome un número como argumento y use setInterval() para registrar el número en la consola, contando hacia atrás hasta cero.

let countdown = (valor) => {
    if(!isNaN(valor)){
        if (valor>0) {
            let intervalID = setInterval(() => {
                console.log(valor);
                valor --;
            }, 1000);
            setTimeout(() => {
                clearInterval(intervalID);
                console.log("time's up!");
            }, valor*1000);
        } else{
            console.log("Error: Por favor, proporcione un número mayor que cero");
        }
    } else {
        console.log("Error: Not a number. Entrada inválida, por favor proporcione un valor numérico");
    }
}

countdown(-1);
countdown("six");
countdown(5);