$(document).ready(function() {

  var pageOffset = $('.wrapper').offset().top;

  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 0) {
      $('.hint').addClass('fade');
    } else {
      $('.hint').removeClass('fade');
    }
  });

  $('.btnIcon').on('click', function() {
    $('nav ul').toggleClass('open');
  });

  $('NAV li').on('click', function() {
    $('nav ul').removeClass('open');
  });

});
