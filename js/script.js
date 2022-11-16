$(document).ready(function () {
  $('.header-burger').click(function (event) {
      $('.header-burger,.header-menu').toggleClass('active');
      $('body').toggleClass('lock');
  });
});

$(document).ready(function() {
  $('.header__link').click(function(event) {
    $('body').removeClass('lock');
    $('.header-burger,.header-menu').removeClass('active');
  })
});

// ZOOM
$('.zoom-img').on('click', function() {
  $('#zoom-img-overlay')
      .css({backgroundImage: `url(${this.src})`})
      .addClass('open')
      .one('click', function() {
        $(this).removeClass('open');
      });
});

// Modal Youtube Jquery
$(".js-video-button").modalVideo();

// SLIDERS
// 1. SWIPER1
var swiper1 = new Swiper(".reviewSwiper", {
  spaceBetween: 30,
  // centeredSlides: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  loop: 0,
  navigation: {
    nextEl: ".swiper-button-next-1",
    prevEl: ".swiper-button-prev-1",
  },
  breakpoints: {
    1200: {
      slidesPerView:4,
    },
    995: {
      slidesPerView:3,
    },
    768: {
      slidesPerView:2,
    },
    0: {
      slidesPerView:1,
    }
  }
});


// MASK PHONE INPUT
var phoneMask = IMask(
  document.getElementById('main__modal_tel'), {
    mask: '+{7}(000)000-00-00',
  });
  document.getElementById("main__modal_form").addEventListener('submit', function(e) {
  e.preventDefault()
  let phone =  document.getElementById('main__modal_tel')
  if(phone.value.length < 16){
    phone.style.border = '1px solid red';
    return
  }
  this.submit()
})

