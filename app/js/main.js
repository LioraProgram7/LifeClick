$(function () {

    $('.phrases__checkbox-plus').on('click', function () {
      $(this.parentElement.parentElement).toggleClass('active');
      $(this).toggleClass('active');
    });


    // Изменила поведение кнопки
    $('#securityBtn').on('click', function () {
      $('.header__security-list').slideToggle();
    });

});