function establecerAlto() {
	var altoVentana	= window.innerHeight;
	$('.seccion').css('height',altoVentana+'px');
}
$(document).on('ready', function() {
	establecerAlto();
	$('.desplegar-menu').on('click', function() {
		$('.menu-navegacion').toggleClass('desplegado');
	})
})
$(window).on('resize', function() {
	establecerAlto();
})