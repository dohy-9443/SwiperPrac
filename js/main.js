let swiper = new Swiper(".slide", {
  // loop: true,
  spaceBetween: 30,
  slidesPerView: 4,
  // freeMode: true,
  watchSlidesProgress: true,
});

let swiper2 = new Swiper(".thumbs", {
  loop: true,
  spaceBetween: 30,
  thumbs: {
    swiper: swiper,
  },
});
