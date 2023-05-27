window.onunload = function () { };
function size_check() {
  w = window.innerWidth ? window.innerWidth : $(window).width();
  h = window.innerHeight ? window.innerHeight : $(window).height();
}

size_check();
$(function () {
  if (w > 769) {
  } else {
    $("header .drawer").click(function () {
      $('body').toggleClass('nav-open');
      $('header .header-wrapper__nav').fadeToggle(200);
    }); 
    $("header-wrapper__nav__list__item a").click(function () {
      $('body').toggleClass('nav-open');
      $('header .header-wrapper__nav').fadeToggle(200);
    });
  }
});