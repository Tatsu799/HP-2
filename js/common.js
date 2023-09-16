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

// スライドショ-
$('.slider').slick({
  autoplaySpeed: 2500,
  speed: 1200,
  autoplay: true,       
  autoplaySpeed: 2000,        
  dots: false,          
  arrows: false,        
  infinite: true,       
});

const loadAnime = $('.spinner-box');
$(window).on('load', function() {
    loadAnime.delay(500).fadeOut(1000);
});

function stopLoad() {
    loadAnime.delay(1000).fadeOut(700);
}
setTimeout('stopLoad()', 10000);

// フェードイン
function fadeIn() {
  $('.fadeUpTrigger').each(function() {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass('fadeUp');
    }else {
      $(this).removeClass('fadeUp');
    }
  });

  $('.fadeLeftTrigger').each(function() {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass('fadeLeft');
    }else {
      $(this).removeClass('fadeLeft');
    }
  });

  $('.fadeRightTrigger').each(function() {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass('fadeRight');
    }else {
      $(this).removeClass('fadeRight');
    }
  });
}

$(window).scroll(function() {
  fadeIn();
});