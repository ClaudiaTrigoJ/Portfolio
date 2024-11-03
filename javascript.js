// JavaScript Document

const card = document.querySelector('.card'),
	  sobremi = document.querySelector('.sobremi'),
	  body = document.querySelector('body'),
	  toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
		card.classList.toggle("flip");
		body.classList.toggle("flipmode");
		sobremi.classList.toggle("active");
	})

toggle.addEventListener('click',() => toggle.classList.toggle("active"));

const imagengrande3 = document.querySelector('.grandecarrusel3'),
	  punto = document.querySelectorAll('.punto');

punto.forEach( ( cadaPunto , i )=> {
	punto[i].addEventListener('click',()=> {

		let posicion = i
		let operacion = posicion * -(100/3)

		imagengrande3.style.transform = `translateX(${ operacion}%)`

		punto.forEach ( (cadaPunto , i )=> {
			punto[i].classList.remove('active')
		})
		punto[i].classList.add('active')
	})
})

document.querySelectorAll(".copy").forEach(copyButton => {
	copyButton.addEventListener('click', () => {
		const targetElement = document.querySelector(copyButton.dataset.copy);
		const textToCopy = targetElement.textContent
			.replace(/\s+/g, " ")
			.trim();
		navigator.clipboard.writeText(textToCopy).then(() => {
			copyButton.disabled = true;

			setTimeout(() => {
				copyButton.disabled = false;
			}, 5000)
		})
	})
})