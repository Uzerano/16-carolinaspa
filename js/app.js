
window.swiper = new Swiper({
   el: '.slider__contenedor',
   slideClass: 'slider__slide',
   createElements: true,
   autoplay: {
    delay: 3000
   },
   loop: true,
 //spaceBteween: 20
   pagination: true,
   effect: 'coverflow',
   speed: 500,
   navegation: true
});