$(document).ready(function() {

  $('.btnIcon').on('click', function() {
    $('nav ul').toggleClass('open');
  });

  $('NAV li').on('click', function() {
    $('nav ul').removeClass('open');
  });

});
