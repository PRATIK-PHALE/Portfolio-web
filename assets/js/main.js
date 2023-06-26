/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
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
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
  contactName = document.getElementById('contact-name'),
  contactEmail = document.getElementById('contact-email'),
  contactProject = document.getElementById('contact-project'),
  contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
  e.preventDefault()
  debugger;
  // cheack if the field has values
  if (contactName.value === ' ' || contactEmail.value === ' ' || contactMessage.value === ' ' || contactProject.value === ' ') {
    // add and remove of color
    contactMessage.classList.remove('color-blue')
    contactMessage.classList.add('color-red')

    contactMessage.textContent = "Fill all inputs"
  } else {
    // serviceId-Templateid-#form-publicKey
    emailjs.sendEmail('service_uuay66j', 'template_j1w3ats', '#contact-form', '9pCZiyGWmcdARb0uI')
      .then(() => {
        // add and text
        contactMessage.classList.add('color-blue')
        contactMessage.textContent = "Message Send"
        setTimeout(function () {
          contactMessage.textContent = " ";
        }, 5000);
      },(error)=>{
  alert("opps somthings thais fale ",error)
      });
// clear input field
contactName.value=''
  contactEmail.value=''
  contactProject.value=''
  }
}
contactForm.addEventListener('submit', sendEmail)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

// const sections=document.querySelector('section[id]')

// const scrollActive=()=>{
//   const scrollY=window.pageYOffset

//   sections.forEach(current=>{
//     const sectionHeight=current.offsetHeight,
//     sectionTop=current.offsetTop-58,
//     sectionId=current.getAttribute('id'),
//     sectionsClass=document.querySelector('.nav__menu a[href*='+ sectionId +']')

//     if(scrollY>sectionTop && scrollY<=sectionTop+sectionHeight){
//       sectionsClass.classList.add('active-link')
//     }else{
//       sectionsClass.classList.remove('active-link')
//     }
//   })
  
// }
// window.addEventListener("scroll",scrollActive)

/*=============== SHOW SCROLL UP ===============*/
const scrollup=()=>{
const scrollup=document.getElementById('scroll-up')
this.scrollY>=350 ? scrollup.classList.add('show-scroll'):scrollup.remove('show-scroll') 
}
window.addEventListener('scroll',scrollup)

/*=============== DARK LIGHT THEME ===============*/
const themeButton=document.getElementById('theme-button')
const darkTheme='dark-theme'
const iconTheme='ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme=localStorage.getItem('selected-them')
const selectedIcon= localStorage.getItem('selected-icon')

// we obtain the current theme that the interface has by validating the dark-them class
const getCurrentTheme = () => document.body.classList.contains(darkTheme)? 'dark':'light'
const getCurrentIcon =()=> themeButton.classList.contains(iconTheme)?'ri-moon-line':'ri-sun-line'

// we validate if the user previously chose a topic
if(selectedTheme){
  // If the validation is fulfilled, we ask what the issue was to know if we actived or deactivated the dark

  document.body.classList[selectedTheme==='dark'?'add':'remove'](darkTheme);
  themeButton.classList[selectedTheme==='ri-moon-line'?'add':'remove'](iconTheme);

}

// Activate / deactivate the theme manually with the buttons 
themeButton.addEventListener('click',() =>{
  // add/ remove the dark icon them 
  document.body.classList.toggle(darkTheme)
themeButton.classList.toggle(iconTheme)
// We save the theme and the current item that the user choose
localStorage.setItem('selected-theme',getCurrentTheme())
localStorage.setItem('selected-icon',getCurrentIcon())
})
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader=()=>{
  const header=document.querySelector('#header');

  this.screenY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
}
window.addEventListener('scroll',scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr =ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2500,
  delay:400,
  // reset true  Animation repeate

})

sr.reveal(`.home__data,.testimonial__container,.projects__container,.footer__container`)
sr.reveal(`.home__info div`,{delay:60,origin: 'bottom',interval:200})
sr.reveal(`.skills__content:nth-child(1),.contact__content:nth-child(1)`,{origin:'left'})
sr.reveal(`.skills__content:nth-child(2),.contact__content:nth-child(2)`,{origin:'right'})
sr.reveal(`.qualification__content ,.services__card`,{interval:200})
