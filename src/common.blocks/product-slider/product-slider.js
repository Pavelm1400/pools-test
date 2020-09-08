/* eslint-disable */

if (document.querySelector('.product-slider') !== null) {
  var mySwiper = new Swiper ('.product-slider_pools .swiper-container', {
    direction: 'horizontal',
    autoplay: {
      delay: 5000,
    },
    loop: false,
    pagination: {
      el: '.product-slider_pools .slider-pagination',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 8
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });
  
  var mySwiper = new Swiper ('.product-slider_other .swiper-container', {
    direction: 'horizontal',
    autoplay: {
      delay: 5000,
    },
    loop: false,
    pagination: {
      el: '.product-slider_other .slider-pagination',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 8
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 8
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 8
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 8
      }
    }
  });
}


