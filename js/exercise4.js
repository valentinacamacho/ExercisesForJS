//Challenge 4: Crea un programa que encuentre el número más grande en un array dado usando for normal y lo imprima en un alert o log. Array de ejemplo: [45, 23, 67, 89, 12, 56]

const btnExerciseFour = document.getElementById("btnExercise4");

function ejercicioFour() {
    var numbers = [110 , 6, 2, 358, 89, 12, 56, 56];
    var numM = 0;
     
    for(i = 0; i < numbers.length; i++){
        if (numbers[i] > numM)
        {
            numM = numbers[i];
        }
    }
     
    console.log(numM);
}

btnExerciseFour.onclick = function () {
  ejercicioFour();
}