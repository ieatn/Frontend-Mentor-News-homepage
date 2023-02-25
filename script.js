const mobileNav = document.querySelector('.mobile-nav')
const menu = document.querySelector('#menu')
const menuClose = document.querySelector('#menuClose')

menu.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    menuClose.classList.toggle('hidden')
    mobileNav.classList.toggle('hidden')
    mobileNav.classList.toggle('active')
})
menuClose.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    menuClose.classList.toggle('hidden')
    mobileNav.classList.toggle('hidden')
    mobileNav.classList.toggle('active')
})