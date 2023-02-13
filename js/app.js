
/*window.swiper = new Swiper({
  el: '.slider__contenedor',
   slideClass: 'slider__slide',
   createElements: true,
   loop: true,
   spaceBetween: 20,
   effect: 'coverflow',
   pagination: true,
  navigation: true,
  speed: 700
});*/


var swiper = new Swiper(".swiper", {
  effect: "cards",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
 
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
  navigation: true
});