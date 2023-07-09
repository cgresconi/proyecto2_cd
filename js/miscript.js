// -- MANEJO DE ELEMENTOS --
// -- ENCABEZADO --
//  cambia las clases con el menu hamburguesa (mobile y tablet)
const menuHamb = document.getElementById('mnIcono');
const menuEnlaces = document.getElementById('mnEnlaces');

menuHamb.addEventListener('click', function () {
    menuEnlaces.classList.toggle('active');
});
// -- SECCION DATOS PERSONALES --
// pasa el mouse encima y afuera del titulo principal para cambiar el color del font
// se usa una concatenacion de funciones sin almacenar el elemento
// evento mouseover y mouseout
document.getElementById("txTitPrincipal").addEventListener("mouseover", fnTitPrincipalColorFont);
document.getElementById("txTitPrincipal").addEventListener("mouseout", fnTitPrincipalColorFont2);
// pasa el mouse encima y afuera del boton de descarga del cv para cambiar el color del fondo
// se usa almacenar el elemento en una variable y sobre esa variable se aplican las funciones
// evento mouseover y mouseout
evBnDescargaCv = document.getElementById("btDescargaCv");
evBnDescargaCv.addEventListener("mouseover", fnBtDescargaCvColorBackg);
evBnDescargaCv.addEventListener("mouseout", fnBtDescargaCvColorBackg2);
// mueve el mouse por encima del boton de descarga y 

// -- LIBRERIA DE FUNCIONES --
// -- SECCION DATOS PERSONALES --
// -- titulo principal --
function fnTitPrincipalColorFont() {
  document.getElementById("txTitPrincipal").style.color = "#DAA520";
}
function fnTitPrincipalColorFont2() {
  document.getElementById("txTitPrincipal").style.color = "#ff5f1f";
}
// -- boton descarga cv --
function fnBtDescargaCvColorBackg() {
  evBnDescargaCv.style.backgroundColor = "#DAA520";
}
function fnBtDescargaCvColorBackg2() {
  evBnDescargaCv.style.backgroundColor = "#f4bb44";
}
