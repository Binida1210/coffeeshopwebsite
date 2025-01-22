const menuOpenBtn = document.getElementById("menu-open-button");
const menuClosebtn = document.getElementById("menu-close-button");
const navLinks = document.querySelectorAll(".nav-menu .nav-link");

menuOpenBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
})

menuClosebtn.addEventListener("click", () => menuOpenBtn.click());


const swiper = new Swiper('.slider-wrapper', {

    loop: true,
    spaceBetween: 25,
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768:{
            slidesPerView: 2
        },
        1024:{
            slidesPerView: 3
        }
    }
  });


  navLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuOpenBtn.click();
    })
  })