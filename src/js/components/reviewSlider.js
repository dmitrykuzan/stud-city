export const reviewSlider = () => {
  let reviewSlider = new Swiper(".review__slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,
    breakpoints: {
      992: {
          spaceBetween: 26,
          slidesPerView: 2,
      },
      767: {
        slidesPerView: 2,
    },
    },

    navigation: {
      nextEl: ".review__navigation-button--next",
      prevEl: ".review__navigation-button--prev",
    }
  });
}