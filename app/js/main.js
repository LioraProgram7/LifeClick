$(function () {

  // $('.your-class').slick({
  //   dots: true,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 1,
  //   centerMode: true,
  //   variableWidth: true
  // });

  // для аккаутов
  $('.profile-header__content').hide();
  $('.profile-header__info').on('click', function () {
    $('.profile-header__content').slideToggle();
  });




});