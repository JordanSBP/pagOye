//funcion validar formulario
function validar(formulario){

    if(formulario.gmail.value.trim().length == 0) {
      document.getElementById("errorGmail").innerText = "Campo obligatorio";
      formulario.gmail.focus();
      return false;
    }
    if(formulario.contraseña.value.trim().length == 0){
        document.getElementById("errorPass").innerText = "campo obligatoria";
        formulario.contraseña.focus();
        return false;
    }
    if(formulario.contraseña.value != formulario.confirmar.value){
        document.getElementById("errorPass2").innerText = "No coinciden las contraseñas";
        formulario.confirmar.focus();
        return false;
    }
    if(formulario.gustos.value ==""){
        document.getElementById("errorGusto").innerHTML = "Seleccionar gusto musical";
        formulario.gustos.focus();
        return false;
    }
    if(formulario.checkEdad.value ==""){
        document.getElementById("errorEdad").innerHTML = "Seleccionar edad";
        formulario.checkEdad.focus();
        return false;
    }
    if(!formulario.terminos.checked){
        document.getElementById("errorTerminos").innerText = "Debe aceptar los terminos y condiciones";
        formulario.terminos.focus();
        return false;
    }
  
    alert("Datos enviados");
    return true;
  }

  //registro scroll

  $(document).ready(function(){
      //declaro variable
      let scroll = $('.containerForm').position();

      $('.flecha').click(function(){//span al ser clickeado haga algo
        $('body, html').animate({
            scrollTop: scroll.top//se scrollea automaticamente
        }, 1000);
      });
    });

    //nav scroll

    window.addEventListener("scroll", function(){
        let header =document.querySelector("header");
        header.classList.toggle("abajo", window.scrollY>350);
    })