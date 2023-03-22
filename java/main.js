// Escribir simulador Java //

//Piedra, Papel o Tijera //

var opciones = ["piedra", "papel", "tijera"];

// Función para obtener una opción aleatoria
function obtenerOpcionAleatoria() {
  var indice = Math.floor(Math.random() * opciones.length);
  return opciones[indice];
}

// Función para comparar la opción del usuario con la opción aleatoria
function comparar(opcionUsuario, opcionAleatoria) {
  if (opcionUsuario === opcionAleatoria) {
    return "Empate";
  } else if (
    (opcionUsuario === "piedra" && opcionAleatoria === "tijera") ||
    (opcionUsuario === "papel" && opcionAleatoria === "piedra") ||
    (opcionUsuario === "tijera" && opcionAleatoria === "papel")
  ) {
    return "Ganaste";
  } else {
    return "Perdiste";
  }
}

// Asignamos los eventos a los botones
var piedra = document.getElementById("piedra");
var papel = document.getElementById("papel");
var tijera = document.getElementById("tijera");

piedra.addEventListener("click", function() {
  var resultado = jugar("piedra");
  document.getElementById("resultado").innerHTML = resultado;
  guardarResultado(resultado);
});

papel.addEventListener("click", function() {
  var resultado = jugar("papel");
  document.getElementById("resultado").innerHTML = resultado;
  guardarResultado(resultado);
});

tijera.addEventListener("click", function() {
  var resultado = jugar("tijera");
  document.getElementById("resultado").innerHTML = resultado;
  guardarResultado(resultado);
});

// Función principal del juego
function jugar(opcionUsuario) {
  // Obtenemos una opción aleatoria
  var opcionAleatoria = obtenerOpcionAleatoria();
  // Comparamos las opciones
  var resultado = comparar(opcionUsuario, opcionAleatoria);
  // Devolvemos el resultado
  return "Elegiste " + opcionUsuario + "<br>La computadora eligió " + opcionAleatoria + "<br>" + resultado;
}

// Función para guardar el resultado en LocalStorage
function guardarResultado(resultado) {
  var resultadosAnteriores = localStorage.getItem("resultados");
  if (resultadosAnteriores === null) {
    resultadosAnteriores = [];
  } else {
    resultadosAnteriores = JSON.parse(resultadosAnteriores);
  }
  resultadosAnteriores.push(resultado);
  localStorage.setItem("resultados", JSON.stringify(resultadosAnteriores));
}
//Resutlados //
var resultados = localStorage.getItem("resultados");
console.log(JSON.parse(resultados));

