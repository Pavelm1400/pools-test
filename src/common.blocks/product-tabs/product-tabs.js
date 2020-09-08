$(document).ready(() => {
  $('.product-tabs__layer').hide();
  $('.product-tabs__layer.is-active').show();

  $('.product-tabs__button').click((e) => {
    $('.product-tabs__button').removeClass('is-active');
    $('.product-tabs__layer').hide();
    var $tabPanelAttr = $(e.target).attr('data-tab-order'); // eslint-disable-line
    const selectTab = $(`.product-tabs__layer[data-tab-order=${$tabPanelAttr}]`);
    $(selectTab).fadeIn();
    $(selectTab).addClass('is-active');
    $(e.target).addClass('is-active');
  });
});
