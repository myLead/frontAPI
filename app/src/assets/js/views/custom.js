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

  selectTempo(texto)
  {
    if (texto == "trimestral") {
      document.getElementById('#TipoDeCadastro').innerHTML = 'RS 39';
      // code...
    }
    if (texto == "semestral") {
      document.getElementById('#TipoDeCadastro').innerHTML = 'RS 59';
    }
    if (texto == "anual") {
      document.getElementById('#TipoDeCadastro').innerHTML = 'RS 79';
    }
  }


});
