const abrirMenu = document.querySelector(".abrirMenu")
const cerrarMenu = document.querySelector(".cerrarMenu")
const navBar = document.querySelector(".navbar")
const contenedorMenuAbierto = document.querySelector(".navbar-contenedor-abierto")
const contenedorMenuCerrado = document.querySelector(".navbar-contenedor-cerrado")

abrirMenu.addEventListener("click", ()=>{
    navBar.classList.add("navbar-abierto")
    contenedorMenuCerrado.classList.add("dpnone")
    contenedorMenuAbierto.classList.remove("dpnone")

})

cerrarMenu.addEventListener("click", ()=>{
    navBar.classList.remove("navbar-abierto")
    contenedorMenuCerrado.classList.remove("dpnone")
    contenedorMenuAbierto.classList.add("dpnone")
})