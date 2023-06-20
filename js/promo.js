const hamburger = document.querySelector('.header__hamburger'),
      btnClose = document.querySelector('.menu__close'),
      menuu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menuu.classList.add('show')
    menuu.classList.remove('hidee')
})

btnClose.addEventListener('click', () => {
    menuu.classList.add('hidee')
    menuu.classList.remove('show')
})
