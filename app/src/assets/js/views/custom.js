$(document).ready(function () {
  //imit animaçao dos icones
  AOS.init({
    duration: 1200,
  });
  //effect menu toogle in mobilevie
  $(".navbar-toggle").click(function () {
    $(this).toggleClass("active");
  });

  //imit carousel quem somos
  $('.owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    margin: 200,
    responsive: {
      0: {
        items: 1,
        margin: 0,

      },
      600: {
        items: 3,
      },
      1000: {
        items: 5
      }
    }
  })

});

/*
function validar()
  {
     var Senha1 = formulario.InputSenha.Value
    var Senha2 = formulario.InputConfirmaSenha.Value;
      if(Senha1 == Senha2){
          alert('Senha1');
      }else{
        alert('Senha Errada');
    }

}
*/ 

