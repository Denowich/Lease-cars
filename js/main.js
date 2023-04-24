const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', ()=> {
  menu.classList.toggle('.menu__btn--active');
});


const swiper = new Swiper(".swiper", {
  effect: "fade",
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
    pagination: {
      el: ".swiper-pagination",
    },
  });