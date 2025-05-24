/*import Vue from 'vue'
import Component from 'vue-class-component'

Window.addEventListener("load", ()=>{
  const vs = new Vue({
    el: ''
    created: function(){

      .then((val) => {

      })
      .catch((err) => {

      })
    }
    methods: {

    }
  })
})*/



/* ---------------------------------------*/
function Cambio() {
  articulo.style.color = "red";
  window.location.href = "Articulos.html";
};
const articulo = document.getElementById("boton_articulo");
articulo.addEventListener('click', ()=>{
  Cambio();
});

function texto_aleatorio() {
  var textos = [];
  textos[0] = "Conoce sobre el desarrollo de videojuegos."
  textos[1] = "El mundo del desarrollo de videojuegos"
  textos[2] = "te mostramos como se desarrollan los juegos"
  
  aleat = Math.random() * (textos.length)
  aleat = Math.floor(aleat)

  return textos[aleat];
}
  
document.getElementById("ban_titulo2").innerText = texto_aleatorio();
