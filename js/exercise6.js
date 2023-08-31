//Challenge 6: Crea un programa que multiplique cada elemento de un array por 2 y devuelva un nuevo array con los resultados usando for normal. Array de ejemplo: [3, 7, 2, 8]

const btnExerciseSix = document.getElementById("btnExercise6");

function ejercicioSix() {
  const num =[3, 7, 2, 8];
  const total=1;

  for (let i = 0; i < num.length; i++) {
    if(num[i] !=0)
    total = (num[i]*total);
  }
  return total;
 
}

console.log(total);

btnExerciseSix.onclick = function () {
  ejercicioSix();
}