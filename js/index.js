/*nav con JS*/

let cad = `
<div class="brand">
<img class="brand-image" src="Assets/logo-restaurant-removebg-preview.png" alt="Logo de El Restaurant">
</div>
<button class="open-menu" id="abrir"><i class="bi bi-list"></i></button>
<nav class="navbar" id="navbar">
    <button id="cerrar" class="close-menu"><i class="bi bi-x-circle"></i></button>
    <ul class="nav-list text-serif">
    <li><a href="./index.html">Home</a></li>
    <li><a href="./quienessomos.html">Quiénes somos</a></li>
    <li><a href="./historia.html">Historia</a></li>
    <li><a href="./chefs.html">Chefs</a></li>
</ul>
<!--<div class="actions">
    <img src="Assets/icons/menu.svg" alt="Boton de menu">
</div>-->
</nav>

`
document.querySelector("header").innerHTML=cad

/*----------------------------------------------*/


/*Menu Hamburguesa:*/

const nav = document.querySelector(".navbar");
const abrir = document.querySelector(".open-menu");
const cerrar = document.querySelector(".close-menu");

abrir.addEventListener("click", ()=>{
    nav.classList.add("visible");
})

cerrar.addEventListener("click", ()=>{
    nav.classList.remove("visible")
})

/*----------------------------------------------*/


