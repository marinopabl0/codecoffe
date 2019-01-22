$(document).ready(function(){
  //EFECTO MENU
  $(".menu a").each(function(index, elementos){

    $(this).css({      //lo hacemos con cada uno de los elementos "a" por eso se utiliza "this"
      "top": "-200px"    //lo estamos subiendo las letras
    });

    $(this).animate({
      top: "0"                //bajamos los elementos "a" con una animacion
    }, 2000 + (index * 500));     //index es como un arreglo.comienza desde cero

  });

  //EFECTO TEXTO
  if ( $(window).width()>800 ){
      $("header .texto").css({
        opacity: 0,
        marginTop: 0
      });

      $("header .texto").animate({
        opacity: 1,
        marginTop: "-52px"
      }, 1500);
  }

  //scroll elementos menus

  var acercaDe = $("#acerca-de").offset().top,
      menu = $("#platillo").offset().top,
      galeria = $("#galeria").offset().top,
      ubicacion = $("#ubicacion").offset().top;


  $("#btn-acerca-de").on("click", function(e){
    e.preventDefault();
    $("html, body").animate({
      scrollTop: acercaDe
    },2000);
  });
  $("#btn-menu").on("click", function(e){
    e.preventDefault();
    $("html, body").animate({
      scrollTop: menu
    },2000);
  });

  $("#btn-galeria").on("click", function(e){
    e.preventDefault();
    $("html, body").animate({
      scrollTop: galeria
    },2000);
  });

  $("#btn-ubicacion").on("click", function(e){
    e.preventDefault();
    $("html, body").animate({
      scrollTop: ubicacion
    },2000);
  });


});
