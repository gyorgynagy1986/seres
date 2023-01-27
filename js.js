var swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


/* SCROLL */

const sr = ScrollReveal({
    origin: 'top',
    distance: '10px',
    duration: 4000,
    delay: 150,
    //reset: true
  })

  sr.reveal(`.container`, {distance: '150px', origin: 'center', distance: '0px',} )
  sr.reveal(`.gallery`, {distance: '150px', origin: 'center', distance: '0px', duration: 3000,} )
  sr.reveal(`.social-container`, {distance: '75px', origin: 'top',  duration: 4500,} )
  sr.reveal(`.contact-container`, {distance: '150px', origin: 'top',  duration: 2500,} )
