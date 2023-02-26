// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

import Swiper, {
	Pagination,
	EffectFade,
	Autoplay,
	Navigation,
	Thumbs
  } from "swiper";


document.addEventListener('DOMContentLoaded', () => {

	// Swiper.use([Pagination, EffectFade, Autoplay, Navigation,Thumbs]);

	// Custom JS

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

})
