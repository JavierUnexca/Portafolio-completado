window.onload = function(){
	$('#onload').fadeOut();
	$('body').removeClass('hidden-loading');
}

function accion(){
	let ancla = document.getElementsByClassName('ancla');
	for(let i = 0; i < ancla.length; i++){
		ancla[i].classList.toggle('desaparece');
	}
}