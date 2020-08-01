import cipher from './cipher.js';

// console.log(cipher);
// evita que ingresa letras para recuadro de dni
window.addEventListener("load", function() {
    let miformulario=document.getElementById("miformulario");
    miformulario.codigo.addEventListener("keypress", soloNumeros, true);
  });

  //Solo permite introducir numeros.
  function soloNumeros(e){
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
      e.preventDefault();
    }
  }
//para que salga un mensaje de aletra por campos vacios
// let input_dni= document.getElementById("idcodigo").value;
// input_dni.addEventListener( "keypress", function(){
//     // console.log("ingrese" );
// }
// )
//cifrado

const btn_codificar = document.getElementById("btn_codificar");
btn_codificar.addEventListener("click", function() {
let textocdf=  document.getElementById("msj").value.toUpperCase();
let n_posicion= parseInt(document.getElementById("offset").value);
let input_dni= document.getElementById("idcodigo").value;
if(input_dni.length==8){
    if(n_posicion>0){
        document.getElementById("mostrando_msj").value= cipher.encode(n_posicion,textocdf);
    }
    else{
        alert("Por favor, ingrese una clave mayor a 0");
    }
}
else{
    alert("Por favor complete campo DNI");
}
});

// decifrado

const btn_decodificar = document.getElementById("btn_decodificar");
btn_decodificar.addEventListener("click", function() {
let textocdf=  document.getElementById("msj").value.toUpperCase();
let n_posicion= parseInt(document.getElementById("offset").value);
if(n_posicion>0){
document.getElementById("mostrando_msj").value= cipher.decode(n_posicion,textocdf);
}
else{
    alert("Por favor, ingrese una clave mayor a 0");
}

});

// const input_mensaje = document.getElementById("msj");
// input_mensaje.addEventListener("keypress", function(event) {
// //function permitir_letras(e) {
//     let tecla = (document.all) ? event.keyCode : event.which;

//     //Tecla de retroceso para borrar, siempre la permite
//     if (tecla == 8) {
//         // console.log("ingrese ifff");

//         return true;
//     }
// // console.log("ingrese :ddddd");
//     // Patron de entrada, en este caso solo acepta numeros y letras
//     //patron = /[A-Za-z0-9]/;
//     const patron = /[[^A-Z]/;
//     let tecla_final = String.fromCharCode(tecla);
//     return patron.test(tecla_final);
// });
