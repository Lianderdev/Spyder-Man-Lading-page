const botaoMenuMobile = document.querySelector('.menu-mobile')
const menuMobile = document.querySelector('.menu-navegacao')

botaoMenuMobile.addEventListener('click', () => {
    menuMobile.classList.add('menu-ativo')
})
