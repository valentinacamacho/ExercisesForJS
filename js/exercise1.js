//Challenge 1: Crea un programa que imprima (log o alert) todos los elementos de un array dado usando for normal. Array de ejemplo: ['manzana', 'banana', 'cereza', 'dátil']

const btnExerciseOne = document.getElementById("btnExercise1");

function ejercicioOne() {
  const fruits = ["apple", "banano", "cherry", "grape", "peach", "papaya"];
  
  for (let i = 0; i < fruits.length; i++) {
    console.log("Fruits: ", fruits[i]);

  }
}

btnExerciseOne.onclick = function () {
  ejercicioOne();
}
