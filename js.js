const openModal = document.querySelector('.open-btn');
const closeModal =  document.querySelector('.close-btn');


openModal.addEventListener('click', ()=> {

  document.querySelector('.text-container').style.height = '100%'
  document.querySelector('.open-btn').style.display = 'none'
  closeModal.style.display = 'block'

})

closeModal.addEventListener('click', ()=> {

  console.log('hello');

  document.querySelector('.text-container').style.height = '200px';
  document.querySelector('.open-btn').style.display = 'block';
  closeModal.style.display = 'none';

})






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
  sr.reveal(`.video-container`, {duration: 2000,distance: '80px', origin: 'top',} )
  sr.reveal(`.gallery`, {distance: '150px', origin: 'center', distance: '0px', duration: 3000,} )
  sr.reveal(`.social-container`, {distance: '75px', origin: 'top',} )
  sr.reveal(`.contact-container`, {distance: '150px', origin: 'top',  duration: 2500,} )
