const accordionHeader = $('.accordion__header');

accordionHeader.click((e) => {
  $(e.target).closest('.accordion').toggleClass('is-open');
});
