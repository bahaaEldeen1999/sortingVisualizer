const menu = document.getElementById("menu");
const me = document.getElementById("me");
const openMenu = document.getElementById("openMenu");
const container = document.getElementById("container");
let opened = true;

openMenu.addEventListener('click',()=>{
    if(opened){
    menu.style.left = '-400%';
    menu.style.display = "none"
    me.classList.remove('col-md-3')
    me.classList.add('col-md-1')
    container.classList.remove('col-md-9')
    container.classList.add('col-md-11')
    }else{
        menu.style.left = '0%';
        me.classList.remove('col-md-1')
        menu.style.display = "block"
    me.classList.add('col-md-3')
    container.classList.remove('col-md-11')
    container.classList.add('col-md-9')
    }
    opened = !opened;

})