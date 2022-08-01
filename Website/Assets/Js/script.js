const dropdownMenu = document.querySelector('.dropdown-menux');
const toggleNavbar = document.querySelector('.toggle-navbar');
const dropdownClose = document.querySelector('.dropdown-closex');
const navMenu = document.querySelector('.nav-menux');

dropdownMenu.previousElementSibling.addEventListener('click', function () {
	if(window.innerWidth < 576) {
		dropdownMenu.classList.add('show');
		toggleNavbar.classList.add('hide');
	}
})

dropdownClose.addEventListener('click', function () {
	if(window.innerWidth < 576) {
		dropdownMenu.classList.remove('show');
		toggleNavbar.classList.remove('hide');
	}
})


toggleNavbar.addEventListener('click', function () {
	if(window.innerWidth < 576) {
		navMenu.classList.toggle('show');

		if(navMenu.classList.contains('show')) {
			this.classList.replace('bx-menu', 'bx-x');
		} else {
			this.classList.replace('bx-x', 'bx-menu');
		}
	}
})



$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		responsiveClass: true,
		center:true,
		nav: true,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:3,
			},
			1000:{
				items:4,
			}
		}
	})
})