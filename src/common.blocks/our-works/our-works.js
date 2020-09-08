/* eslint-disable */
if (document.querySelector('.our-works__slider') !== null) {
  var mySwiper = null;
  var mediaQuerySize = 1439;
  
  function WorksSliderInit () {
    if (!mySwiper) {
      mySwiper = new Swiper('.our-works__slider .swiper-container', {
        direction: 'horizontal',
        autoplay: {
          delay: 5000,
        },
        loop: false,
        pagination: {
          el: '.our-works__slider .slider-pagination',
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 8
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 12
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 12
          },
        }
      });
    }
  }
  
  function WorkSliderDestroy () {
    if (mySwiper) {
      mySwiper.destroy();
      mySwiper = null;
    }
  }
  
  
  $(window).on('load resize', function () {
    
    var windowWidth = $(this).innerWidth();
    
    if (windowWidth <= mediaQuerySize) {
      WorksSliderInit()
    } else {
      WorkSliderDestroy()
    }
  });
}

