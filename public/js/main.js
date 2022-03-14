// HEADER
const _menu = document.getElementById('menu')
const _btnMenu = document.getElementById('btnMenu')

_btnMenu.addEventListener('click', (e)=>{
    // console.log('diste click en el btn menu')
    setTimeout(() => {_menu.classList.toggle('mostrar')}, 400);

    // _menu.classList.toggle('mostrar')
})

