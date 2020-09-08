$('.category-filter__header').click((e) => {
  $('.category-filter__title').innerHTML = 'скрыть фильтр';
  $(e.target).closest('.category-filter').toggleClass('is-open');
});
