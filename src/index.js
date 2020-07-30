import cipher from './cipher.js';

// console.log(cipher);

//cifrado

const btn_codificar = document.getElementById("btn_codificar");
btn_codificar.addEventListener("click", function() {
let textocdf=  document.getElementById("msj").value.toUpperCase();
let n_posicion= parseInt(document.getElementById("offset").value);
document.getElementById("mostrando_msj").value= cipher.encode(n_posicion,textocdf);
});

// decifrado

const btn_decodificar = document.getElementById("btn_decodificar");
btn_decodificar.addEventListener("click", function() {
let textocdf=  document.getElementById("msj").value.toUpperCase();
let n_posicion= parseInt(document.getElementById("offset").value);

document.getElementById("mostrando_msj").value= cipher.decode(n_posicion,textocdf);
});

const input_mensaje = document.getElementById("msj");
input_mensaje.addEventListener("keypress", function(event) {
//function permitir_letras(e) {
    let tecla = (document.all) ? event.keyCode : event.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        // console.log("ingrese ifff");

        return true;
    }
// console.log("ingrese :ddddd");
    // Patron de entrada, en este caso solo acepta numeros y letras
    //patron = /[A-Za-z0-9]/;
    const patron = /[[^A-Z]/;
    let tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
});
