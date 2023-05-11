// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(x => x.director); // devuelvo un array con solamente los nombres de los directores.
}
console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let stevenMoviesArray = moviesArray.filter(x => x.director === "Steven Spielberg"); //creo un nuevo array solo con las peliculas cuyo director sea "Steven Spielberg".
  return stevenMoviesArray.filter(x => x.genre.indexOf("Drama") >= 0); // filtro el nuevo array creado dejando solamente los titulos con genero "drama" y lo devuelvo como resultado de la funcion.
}
console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let average = 0;
  const initialValue = 0;
  const sum = moviesArray.reduce((accumulator, currentValue) => accumulator + currentValue.score, initialValue); //sumo todos los score de cada titulo y lo guardo en la variable "sum".
  average = sum/moviesArray.length; //calculo el promedio del score
  return average.toFixed(2); // limito a 2 la cantidad de decimales y devuelvo el resultado. 
}
console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let average = 0;
  const initialValue = 0;
  let dramaMovies = moviesArray.filter(x => x.genre.indexOf("Drama") >= 0); // creo un nuevo array solo con los titulos que tengan como genero: "drama"
  const sum = dramaMovies.reduce((accumulator, currentValue) => accumulator + currentValue.score, initialValue); //sumo el score de cada titulo dentro del array con peliculas de drama.
  average = sum/dramaMovies.length; //calculo el promedio del score
  return average.toFixed(2); // limito a 2 la cantidad de decimales y devuelvo el resultado. 
}
console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return moviesArray.toSorted((a, b) => a.year - b.year); // genero y devuelvo un nuevo array ordenado por años ascendente.
}
console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let titlesArray = moviesArray.map(x => x.title); //creo un nuevo array solo con los titulos. 
  titlesArray.sort(); // ordeno el array de titulos. 
  return titlesArray.slice(0,20); //limito a solo 20 elementos y devuelvo el array. 
}
console.log(orderAlphabetically(movies));
console.log(orderAlphabetically(movies10)); //prueba de que tambien funciona si los datos iniciales son menos de 20. 

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let newArray = moviesArray.map(x => x); //copio el Array en uno nuevo para no modificar el original. 
  for(let i = 0 ; i < newArray.length ; i++){
    let [hoursString , minutesString] = newArray[i].duration.split(" "); // separo el string de duration entre las horas y los minutos. 
    newArray[i].duration = parseInt(hoursString) * 60 + parseInt(minutesString); //combierto los string en enteros y calculo el tiempo total en minutos. 
  }
  return newArray;
}
console.log(turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
