'use strict'

const images = document.querySelectorAll('.thumbs__thumb')
const box = document.querySelectorAll('.boxs__box')
const close = document.querySelector('.lightbox__svg')

images.forEach((image, i) => {
	image.addEventListener('click', () => {
		box[i].classList.add('ver')
		close.classList.add('ver')
	})
	close.addEventListener('click', () => {
		box[i].classList.remove('ver')
		close.classList.remove('ver')
	})
})
