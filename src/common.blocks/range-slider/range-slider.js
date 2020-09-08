// import noUiSlider from 'nouislider';
// import 'nouislider/distribute/nouislider.css';
//
// const lengthRange = document.querySelector('.range-slider_length .range-slider__frame');
//
// noUiSlider.create(lengthRange, {
//   start: [0, 15],
//   connect: true,
//   range: {
//     min: 0,
//     max: 15,
//   },
//   step: 1,
// });
//
// const lenghtNodes = [
//   document.querySelector('.range-slider_length .lower-value'),
//   document.querySelector('.range-slider_length .upper-value'),
// ];
//
// lengthRange.noUiSlider.on('update', (values, handle, unencoded) => {
//   lenghtNodes[handle].innerHTML = unencoded[handle];
// });

$('.range-slider__input').slider({
  range: true,
  tooltip: 'always',
  tooltip_split: true,
  formatter(value) {
    return value;
  },
});
