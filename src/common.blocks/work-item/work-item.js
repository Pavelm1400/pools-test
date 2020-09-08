/* eslint-disable */

if (document.querySelector('.work-item__slider') !== null) {
  var mySwiper = new Swiper ('.work-item__slider .swiper-container', {
    direction: 'horizontal',
    
    spaceBetween: 20,
    loop: false,
    pagination: {
      el: '.work-item__slider .slider-pagination',
    },
    navigation: {
      nextEl: '.work-item__slider .slider-button-next',
      prevEl: '.work-item__slider .slider-button-prev',
    },
  });
}

