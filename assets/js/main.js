/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER PROJECTS ===============*/
let swiperproject = new Swiper(".projects__container", {
   loop: true,
spaceBetween: 24, 
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,

        },
      },
  });

/*=============== SWIPER TESTIMONIAL ===============*/
let swipertestimonial = new Swiper(".testimonial__container", {
  grabCursor:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== EMAIL JS ===============*/
const contactForm =document.getElementById('contact-form'),
  contactName = document.getElementById('contact-name'),
  contactEmail = document.getElementById('contact-email'),
  contactProject = document.getElementById('contact-project'),
  contactMessage = document.getElementById('contact-message')

const sendEmail =(e)=>{
e.preventDefault()
debugger;
// cheack if the field has values
if(contactName.value ===' '||contactEmail.value=== ' '||contactMessage.value=== ' '||contactProject.value=== ' '){
  // add and remove of color
  contactMessage.classList.remove('color-blue')
  contactMessage.classList.add('color-red')

  contactMessage.textContent="Fill all inputs"
}else{
  // serviceId-Templateid-#form-publicKey
  emailjs.sendEmail('service_uuay66j','template_j1w3ats','#contact-form','9pCZiyGWmcdARb0uI')
  .then(()=>{
    // add and text
    contactMessage.classList.add('color-blue')
    contactMessage.textContent="Message Send"
  })
  
}
}
contactForm.addEventListener('submit',sendEmail)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

