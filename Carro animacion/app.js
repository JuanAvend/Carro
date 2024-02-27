var container = document.querySelector(".container");
var llanta1 = document.querySelector(".llanta1 img");
var llanta2 = document.querySelector(".llanta2 img");
var luces =document.querySelector(".luces");
var sprite=document.querySelector(".sprite");
container.addEventListener('click',mover)

function mover() {
    container.classList.add('containerMover')
    llanta1.classList.add('llanta1Mover')
    llanta2.classList.add('llanta2Mover')
    luces.classList.add('lucesMover')
    sprite.classList.add('spriteMover')
    sprite.classList.remove('oculto')
    luces.classList.remove('oculto2')
}





