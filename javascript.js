// JavaScript Document

const card = document.querySelector('.wcard'),
	  sobremi = document.querySelector('.me'),
	  body = document.querySelector('body'),
	  toggle = document.querySelector('.ctoggle');

toggle.addEventListener('click', () => {
		card.classList.toggle("cflip");
		body.classList.toggle("flipmode");
		// sobremi.classList.toggle("active");
	})

toggle.addEventListener('click',() => toggle.classList.toggle("active"));

$('.carousel').carousel({
  interval: false
})

function copiarTexto(){
	var texto = document.getElementById("texto").innerHTML;
	navigator.clipboard.writeText(texto);
	alert("Done");
}