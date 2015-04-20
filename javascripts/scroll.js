//var tamaño= $(".contenedor")

//		{
//if (@media screen and (min-width: 600px)){
//	$(.fondo).hide();
//	$(.col-sm-6).toggleClass(".relative")
//}
//espeor que eso se pued aleer
//y que esto también

$(document).scroll(function() {    
    var scroll = $(this).scrollTop();

    if (scroll >= 350) {
        $(".container-fluid").addClass("active");
    } else {
        $(".container-fluid").removeClass("active");
    }

});

/* Smooth scrolling para anclas */
/*Enlace: http://www.berriart.com/2012/06/29/scroll-suave-smooth-scrolling-con-jquery/*/
/*$(document).on('click', 'a.smooth', function(e) {
	e.preventDefault();
    var $link = $(this);
    var anchor  = $link.attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top
    }, 1000);
});*/

/*Exelente:http://pixelar.me/smooth-scrolling-con-2-lineas-de-jquery/ */
$('a.smooth').click(function(e){
	e.preventDefault();
	$('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
});