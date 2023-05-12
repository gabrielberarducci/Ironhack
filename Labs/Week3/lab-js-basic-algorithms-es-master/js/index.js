// Iteration 1: Names and Input
const hacker1 = "jorje";
const hacker2 = "gabriel";
console.log("El nombre del conductor es " + hacker1);
console.log("El nombre del navegante es " + hacker2);

// Iteration 2: Conditionals
if(hacker1.length < hacker2.length){
    console.log("Parece que el navegante tiene el nombre más largo, tiene %d caracteres.", hacker2.length);
}else if(hacker2.length < hacker1.length){
 console.log("Parece que el conductor tiene el nombre más largo, tiene %d caracteres.", hacker1.length);
}else{
    console.log("¡Vaya, ambos tienen nombres igual de largos, %d caracteres!", hacker1.length);
    }

// Iteration 3: Loops
let auxHacker1 = "";    
for(let i = 0 ; i < hacker1.length ; i++){
    auxHacker1 += hacker1[i]; //guardo en una variable auxiliar uno a uno cada caracter del nombre.
    if(i < hacker1.length) // compruebo que no es el ultimo caracter antes de agregar el espacio, para evitar que el nuevo string termine con un espacio vacio. 
        auxHacker1 += " "; //agrego el espacio entre cada caracter.
}
console.log(auxHacker1.toUpperCase());

let auxHacker2 = "";    
for(let i = hacker2.length-1 ; i >= 0 ; i--){ 
    auxHacker2 += hacker2[i]; //recorro el array original de atras hacia adelante y lo voy guardando en un array auxiliar. 
}
console.log(auxHacker2);

if(hacker1 < hacker2){
    console.log("El nombre del conductor va primero.");
}else if(hacker2 < hacker1){
 console.log("Yo, el navegador va primero definitivamente.");
}else{
    console.log("¿Qué? ¿Los dos tienen el mismo nombre?");
    }