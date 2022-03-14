// HEADER
const _menu = document.getElementById('menu')
const _btnMenu = document.getElementById('btnMenu')

_btnMenu.addEventListener('click', (e)=>{
    // console.log('diste click en el btn menu')
    _menu.classList.toggle('mostrar')
})

