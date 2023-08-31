//Challenge 3: Crea un menu que se repite si ingresa la opcion equivocada hasta que ingrese la opcion correcta - reutilizar ejercicio de operaciones matematicas (exercisesLevel3.js, function exerciseTwo())

const btnExerciseThree = document.getElementById("btnExercise3");

function ejercicioThree() {

  let operation = parseInt(
    prompt(
      "OPERACIONES MATEMATICAS BÁSICAS: \n Ingresa 1 para sumar. \n Ingresa 2 para restar. \n Ingresa 3 para multiplicar. \n Ingresa 4 para Dividir."
    )
  );

  while (isNaN(operation) || operation > 4 || operation < 1) {
    alert("Opción invalida, Ingresar enttre 1 y 4");
    operation = parseInt(prompt("OPERACIONES MATEMATICAS BÁSICAS: \n Ingresa 1 para sumar. \n Ingresa 2 para restar. \n Ingresa 3 para multiplicar. \n Ingresa 4 para Dividir."
    )
    );
  }
  const num1 = parseInt(prompt("Ingrese número 1"));
  const num2 = parseInt(prompt("Ingrese número 2"));
  let result = 0;

  if (isNaN(num1) || isNaN(num2)) {
    return alert("Favor ingresar solo numeros");
  }
  // Si todo lo anterior esta OK, hacemos las operationes matematicas
  switch (operation) {
    case 1:
      result = num1 + num2;
      alert("El resultado de la suma es: " + result);
      break;
    case 2:
      result = num1 - num2;
      alert(result);
      break;
    case 3:
      result = num1 * num2;
      alert("El resultado de la multiplicación es: " + result);
      break;
    case 4:
      if (num2 === 0) {
        alert("No es posible dividir por cero");
      } else {
        result = num1 / num2;
        alert("El resultado de la división es: " + result);
      }
      break;

  }


}
btnExerciseThree.onclick = function () {
  ejercicioThree();
}