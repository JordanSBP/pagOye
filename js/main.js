

function registro(){
    location.href ="registro.html";
}
function verCanciones(){
    location.href = "canciones.html";
}



/* Funcion del Buscador de Palabras */
function buscador() {
    var input, filter, section, div, h5, i;
    input = document.getElementById("buscadorVer");
    filter = input.value.toUpperCase();
    section = document.getElementById("mySection");
    div = section.getElementsByClassName("card");
  
  
  
    for (i = 0; i < div.length; i++) {
      h5 = div[i].getElementsByTagName("h5")[0];
      if (h5) {
        var palabrasEnFiltro = filter.split(' ');
        var hallado = 0;
        for (var filtro of palabrasEnFiltro) {
          if (h5.innerHTML.toUpperCase().indexOf(filtro) > -1) {
            hallado++;
          }
        }
  
        if (hallado === palabrasEnFiltro.length) {
          div[i].style.display = "";
        } else {
          div[i].style.display = "none";
        }
  
      }
    }
  
  }

  let btMenu = document.querySelector(".bt-menu");
  let navMenu = document.querySelector(".containerLi");

  btMenu.addEventListener("click", () => {
    navMenu.classList.toggle("menu_visible");
  });



