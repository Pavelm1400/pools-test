/* eslint-disable */

if (document.querySelector('.product-page__main-slider') !== null) {
  
  var thumbs = new Swiper ('.product-page__thumbs .swiper-container', {
    direction: 'horizontal',
    centeredSlides: true,
    slidesPerView: 5,
    spaceBetween: 8,
    slideToClickedSlide: true,
    centerInsufficientSlides: true,
    roundLengths: true,
    freeMode: false,
    allowTouchMove: false,
  });
  
  var mainView = new Swiper ('.product-page__main-slider .swiper-container', {
    direction: 'horizontal',
    spaceBetween: 8,
    loop: false,
    noSwiping: true,
    allowTouchMove: false,
    
    thumbs: {
      mainView: thumbs,
    },
  });
  
  mainView.controller.control = thumbs;
  thumbs.controller.control = mainView;
  
  $('.lightgallery-items').lightGallery({
    selector: '.swiper-slide:not(.swiper-slide-duplicate) .lightgallery-item',
  });
}
