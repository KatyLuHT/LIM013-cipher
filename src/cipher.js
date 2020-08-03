const cipher = {
  encode:(offset, string)=>{
 


  // cifrado
    let msjencode="";
  for(let i=0;i<string.length;i++){
    let posicion_ascii;
    posicion_ascii=parseInt(string.charCodeAt(i));
      if(posicion_ascii>=65 && posicion_ascii<=90 || string[i]==" " ){
        let letra_nueva;
        if(string[i]!=" "){
            if(posicion_ascii+parseInt(offset)>90){
            // almaceno la cantidad de espacio que se excedio a partir del 90
              let reinicio_posicion=posicion_ascii+parseInt(offset)-90;
              let num_letra = 64+parseInt(reinicio_posicion);
              if(num_letra<=90){
                letra_nueva=String.fromCharCode(num_letra);//
              }else{
                letra_nueva=String.fromCharCode(64+(num_letra-90));
              }
            // almacena la nueva letra
            msjencode+=letra_nueva;
            }

            else{
            letra_nueva=String.fromCharCode(posicion_ascii+parseInt(offset));
            msjencode+=letra_nueva;
            }
        }
        else{
          // retorna el espacio vacio
          msjencode+=" ";
        }
      }else{
        msjencode+="-";
      }
  }

  return msjencode;
  },


  // Decifrado

  decode:(offset, string)=>{

    let msjdecode="";

    for(let i=0;i<string.length;i++){

      let letra_nueva_d;
      let posicion_ascii_d;
      posicion_ascii_d=parseInt(string.charCodeAt(i));
      if(posicion_ascii_d>=65 && posicion_ascii_d<=90 || string[i]==" " ){
        if(string[i]!=" "){
          let espacios_retroceder = parseInt(posicion_ascii_d-parseInt(offset));
          if(espacios_retroceder<65){
            let num_letranueva= parseInt(91-(65-espacios_retroceder));
            if(num_letranueva>=65){
              letra_nueva_d=String.fromCharCode(num_letranueva);
              msjdecode+=letra_nueva_d;

            }else{
              letra_nueva_d=String.fromCharCode(91-(65-num_letranueva));
              // alamacena la nueva letra
              msjdecode+=letra_nueva_d;
            }
          }else{
            letra_nueva_d=String.fromCharCode(posicion_ascii_d-parseInt(offset));
            // alamacena la nueva letra
            msjdecode+=letra_nueva_d;
          }
      }else{
        // retorna el espacio vacio
          msjdecode+=" ";
        }

      }else{
        msjdecode+="-";
      }

    }
    return msjdecode;
  }




  // ...
};

export default cipher;
