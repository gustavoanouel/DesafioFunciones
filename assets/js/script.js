function pintar(elemento, color = "green") {
  elemento.style.backgroundColor = color;
}

ele = document.getElementById("ele1");
pintar(ele); // Se llama a la función pintar con el color verde como valor predeterminado

ele.addEventListener("click", function () {
  pintar(ele, "yellow");
  });
