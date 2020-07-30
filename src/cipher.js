const cipher = {
  encode:(offset, string)=>{
    // console.log("*offset "+offset);
    // console.log("*string "+string);

  // cifrado
    let msjencode="";

//recomendable variables que solo se usen en este for
  for(let i=0;i<string.length;i++){
    let letra_nueva;//¿seria bueno dentroo o fuera por la memoria???
    let posicion_inicial;
    if(string[i]!=" "){// si un estring es distinto a un vacio
      posicion_inicial=parseInt(string.charCodeAt(i));
      if(posicion_inicial+parseInt(offset)>90){
        let reinicio_posicion=posicion_inicial+parseInt(offset)-90;
      // console.log("posicion "+ posicion_inicial+parseInt(offset));
        letra_nueva=String.fromCharCode(64+reinicio_posicion);
        msjencode+=letra_nueva;// alamacena la nueva letra
      }
      else{
        letra_nueva=String.fromCharCode(posicion_inicial+parseInt(offset));
        msjencode+=letra_nueva;
      }
    }
    else{
      msjencode+=" ";
    }
  }
  // console.log("mensaje final "+msjencode);
  return msjencode;
  },

  // Decifrado


  decode:(offset, string)=>{
//  console.log("entre");
    let msjdecode="";

    for(let i=0;i<string.length;i++){
      // console.log("string "+"["+i+"]"+string[i]);
      let letra_nuevad;
      let posicion_iniciald;
      posicion_iniciald=parseInt(string.charCodeAt(i));
      letra_nuevad=String.fromCharCode(posicion_iniciald-parseInt(offset));
      msjdecode+=letra_nuevad;// alamacena la nueva letra

    }
    return msjdecode;
  }



  // ...
};

export default cipher;
