const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
  iconMenu.addEventListener('click', function(e) {
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
  })
}

const getBook = document.querySelector('.header_link-book');
const popup = document.getElementById('popup');
const close = document.getElementById('close')
getBook.addEventListener('click', () => {
  popup.classList.add('active') 
})
close.addEventListener('click', () => {
  popup.classList.remove('active')
})

const animate = document.querySelectorAll('.animate');

if (animate.length > 0) {
  window.addEventListener('scroll', animateScroll);
  function animateScroll() {
    for (let i = 0; i < animate.length; i++) {
      const animateItem = animate[i];
      const animateItemHeight = animateItem.offsetHeight;
      const animateItemOffset = offset(animateItem).top;
      const animateStart = 4;

      let animateItemPoint = window.innerHeight - animateItemHeight / animateStart;

      if (animateItemHeight > window.innerHeight) {
        animateItemPoint = window.innerHeight - window.innerHeight / animateStart;
      }

      if ((pageYOffset > animateItemOffset - animateItemPoint) && pageYOffset < (animateItemOffset + animateItemHeight)) {
        animateItem.classList.add('active')
      } else {
        if (!animateItem.classList.contains('animate-hide')) {
          animateItem.classList.remove('active')
        }
      }
    }
  }

  setTimeout(() => {
    animateScroll();
  }, 1000);
  
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
}



new Swiper('.testimonials-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 1,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  autoheight: true,
});