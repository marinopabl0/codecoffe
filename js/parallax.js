$(document).ready(function(){

  $(window).scroll(function(){
    var windowWidth = $(window).width();

    if (windowWidth > 800){
      var scroll = $(window).scrollTop(); //pasamos el valor del scrollTop a una variable
      $("header .texto").css({
        "transform": "translate(0px," + scroll / 2 + "%)" // estamos contatenando con una operacion de la variable scroll
        });

        $(".acerca-de article").css({
          "transform": "translate(0px, -" + scroll / 4 + "%)" // estamos contatenando con una operacion de la variable scroll
      });
    }

  });

  $(window).resize(function(){
    var windowWidth = $(window).width();
    if(windowWidth < 800) {
      $('header .texto').css({
        'transform': 'translate(0px, 0px)'
      });
    }
  });
  // Regresar el valor  con "resize" en forma normal sin scroll
  // "resize" se ejecuta cuando hay cambios de pantalla
  $(window).resize(function(){
		var windowWidth = $(window).width();
		if(windowWidth < 800) {
			$('.acerca-de article').css({
				'transform': 'translate(0px, 0px)'
			});
		}
	});

});
