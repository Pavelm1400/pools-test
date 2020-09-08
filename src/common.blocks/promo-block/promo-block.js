/* eslint-disable */

if (document.querySelector('.promo-block__slider') !== null) {
  var mySwiper = new Swiper ('.promo-block__slider .swiper-container', {
    direction: 'horizontal',
    
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: '.promo-block__pagination',
    },
    navigation: {
      nextEl: '.promo-block__slider .slider-button-next',
      prevEl: '.promo-block__slider .slider-button-prev',
    },
  });
}


