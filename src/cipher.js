const cipher = {
  encode:(offset, string)=>{
    // console.log("*offset "+offset);
    // console.log("*string "+string);

  // cifrado
    let msjencode="";
// // eslint-disable-next-line no-unused-vars
// const string_array = string.split("");
  for(let i=0;i<string.length;i++){
    let posicion_ascii;
    //atraer la posicion del caracter "A" =65
    posicion_ascii=parseInt(string.charCodeAt(i));
    // console.log("posicion_ascii "+posicion_ascii );
      if(posicion_ascii>=65 && posicion_ascii<=90 || string[i]==" " ){
        let letra_nueva;
        // si un estring es distinto a un vacio que retorne el espacio
        if(string[i]!=" "){
          // si es mayor a 90
          if(posicion_ascii+parseInt(offset)>90){
            // almaceno la cantidad de espacio que se excedio a partir del 90
            let reinicio_posicion=posicion_ascii+parseInt(offset)-90;
            // console.log("5555 posicion "+i+" -- "+ (64+parseInt(reinicio_posicion)));
            //la cantidad que se excedio ejm: 1+64=65-A
            let num_letra = 64+parseInt(reinicio_posicion);

            if(num_letra<=90){
              letra_nueva=String.fromCharCode(num_letra);//
            }else{
              // cantida de espacios que se excedio +64 = letra nueva
              letra_nueva=String.fromCharCode(64+(num_letra-90));
            }
            // alamacena la nueva letra
            msjencode+=letra_nueva;
          }
          // en caso fuera menor que 90 -linea17
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
        // msjencode="";
        msjencode+="-";
        // break;
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
      // rango de 65 a 90
      if(posicion_ascii_d>=65 && posicion_ascii_d<=90 || string[i]==" " ){
      // console.log(" string[i] "+string[i]);
        if(string[i]!=" "){
          let espacios_retroceder = parseInt(posicion_ascii_d-parseInt(offset));
          // console.log("posicion_ascii_d-parseInt(offset) "+espacios_retroceder);
          // es menor que 65 ( 64-55-25 )
          if(espacios_retroceder<65){
            // console.log("entre al if valor  "+ parseInt (91-(parseInt(65-espacios_retroceder))));
            // console.log("");0
            let num_letranueva= parseInt(91-(65-espacios_retroceder));
            if(num_letranueva>=65){
              letra_nueva_d=String.fromCharCode(num_letranueva);
              // alamacena la nueva letra
              // console.log("1letra_nueva "+letra_nueva_d);
              msjdecode+=letra_nueva_d;

            }else{
              letra_nueva_d=String.fromCharCode(91-(65-num_letranueva));
              // alamacena la nueva letra
              // console.log("2letra_nueva "+letra_nueva_d);
              msjdecode+=letra_nueva_d;
            }
            // esta dentro del rango de 65 -90
          }else{
            letra_nueva_d=String.fromCharCode(posicion_ascii_d-parseInt(offset));
            // alamacena la nueva letra
            // console.log("3letra_nueva "+letra_nueva_d);
            msjdecode+=letra_nueva_d;
          }
      }else{
        // retorna el espacio vacio
          msjdecode+=" ";
        }

      }else{
        //msjdecode="";
        msjdecode+="-";
        // break;
      }

    }
    return msjdecode;
  }




  // ...
};

export default cipher;
