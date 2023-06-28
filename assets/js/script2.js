// Variable global para almacenar el color seleccionado
let selectedColor = "";

// Función para cambiar el color del div seleccionado
function changeColor(event) {
  const divId = event.target.id;
  const div = document.getElementById(divId);
  div.style.backgroundColor = selectedColor;
}

// Agregar eventos a los divs
const div1 = document.getElementById("div1");
div1.addEventListener("click", changeColor);
const div2 = document.getElementById("div2");
div2.addEventListener("click", changeColor);
const div3 = document.getElementById("div3");
div3.addEventListener("click", changeColor);
const div4 = document.getElementById("div4");
div4.addEventListener("click", changeColor);

document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    selectedColor = "blue";
    document.querySelector("#colorResult").innerHTML =
      "Color seleccionado: Azul";
  } else if (event.key === "s" || event.key === "S") {
    selectedColor = "silver";
    document.querySelector("#colorResult").innerHTML =
      "Color seleccionado: Plateado";
  } else if (event.key === "o" || event.key === "O") {
    selectedColor = "orange";
    document.querySelector("#colorResult").innerHTML =
      "Color seleccionado: Naranja";
  } else {
    alert("Debe seleccionar un color válido.");
  }
});
