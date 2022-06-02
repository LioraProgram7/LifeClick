$(function () {

$('.help__subtitle').slideToggle();
  $('.help__btn--one').on('click', function () {
    $('.help__subtitle--one').slideToggle();
    $(this).toggleClass('transform');
  });

  $('.help__btn--two').on('click', function () {
    $('.help__subtitle--two').slideToggle();
    $(this).toggleClass('transform');
  });

  $('.help__btn--three').on('click', function () {
    $('.help__subtitle--three').slideToggle();
    $(this).toggleClass('transform');
  });

});