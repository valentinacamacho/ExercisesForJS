//Challenge 2: Crea un programa que imprima (log o alert) todos los elementos de un array dado usando forEach. Array de ejemplo: ['manzana', 'banana', 'cereza', 'dátil']

const btnExerciseTwo = document.getElementById("btnExercise2");

function ejercicioTwo() {
  const fruits = ["apple", "banano", "cherry", "grape", "peach", "papaya"];

  fruits.forEach((e) => {
    console.log("Fruits:", e);
  })
}

btnExerciseTwo.onclick = function () {
  ejercicioTwo();
}