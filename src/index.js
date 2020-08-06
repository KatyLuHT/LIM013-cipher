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

//Cifrado

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

// Decifrado

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


