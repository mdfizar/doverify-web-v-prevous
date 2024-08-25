// bannar slider 
var swiper = new Swiper(".bannarslider", {
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// event-news slider 
var swiper = new Swiper(".event-news-slider", {
  centeredSlides: true,
  slidesPerView: 1,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// service slider ==========
var swiper = new Swiper(".mySwiper", {
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
}); 
// features slider 
var swiper = new Swiper(".features-slider", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
document.querySelector('.features-slider').addEventListener('mouseenter', function() {
  swiper.autoplay.stop();
});
document.querySelector('.features-slider').addEventListener('mouseleave', function() {
  swiper.autoplay.start();
});

