// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

import Swiper, {
	Pagination,
	Navigation

  } from "swiper";

document.addEventListener('DOMContentLoaded', () => {

	// Slider

	var swiperNew = new Swiper(".services-slider", {
        slidesPerView: 6,
        spaceBetween: 30,

		breakpoints: {
            
            320: {
              slidesPerView: 2.3,
              spaceBetween: 20,

            },
          
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
    
            820: {
              slidesPerView: 3,
              spaceBetween: 30,
            },

            1000: {
                slidesPerView: 6,
            },


        }

    });

	//burger

	let burgerMenu = document.getElementById('burger');
	let overlay = document.getElementById('menu');
	let body = document.querySelector("body");

	burgerMenu.addEventListener('click',function(){
		this.classList.toggle("burger-active");
		overlay.classList.toggle("overlay");
		body.classList.toggle("overflow");
	});

})
