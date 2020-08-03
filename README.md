# Jatari Warmi

## Índice

* [1. Introducción](#1-Introdución)
* [2. Instrucciones de uso](#2-Instruciónes-de-uso)
* [3. Desarrollo](#3-Desarrollo)
* [4. Tecnologia usada](#3-Tecnologia-usada)
* [5. Consideraciones técnicas](#4-Como-Instalar-Aplicar-Ejecutar)


## 1. Introducción

  El 60% de feminicidios en Perú ocurren en el hogar, de acuerdo con el Observatorio de Criminalidad del Ministerio Público. Este proyecto a sido creado con el fin de apoyar a mujeres vulnerables en situación de riesgo, cualquier usuaria que necesite ocultar(cifrar),personas o entidades que neseciten interpretar (decifrar)un mensaje lo podra hacer a traves de esta plataforma.

  Para este proyecto hemos utilizado la tecnica de cifrado de Cesar el cual una letra en el texto original es reemplazada por otra letra que se encuentra en un número fijo de posiciones.

## 2. Instrucciones de uso

### Para Cifrar:

* Ingresar N° DNI.

* Ingresar texto a cifrar.

* Elegir N° de clave (offset de desplazamiento).

* Oprime boton "Cifrar".

* Recibe tu mensaje cifrado.

* Oprime boton "Restaurar" para actualizar y volver a utilizar.


### Para Descifrar:

* Ingresar texto a descifrar.

* Elegir N° de clave (el mismo que se utilizo para codificar).

* Oprime boton "Decifrar".

* Recibe tu mensaje decifrado.

* Oprime boton "Restaurar" para actualizar y volver a utilizar.


## Imagen final del proyecto

![image](https://i.ibb.co/5GjRYZ6/Jatari-Warmi-final.png)


## 3. Tecnologia usada

* HTML
* CSS
* Javascript


## 4. Desarollo


## Investigación UX
  Los usuarios a quienes va dirigido este proyecto son mujeres que sufren de violencia familiar y las personas o entidades que  le puedan brindar ayuda.
  Los objetivos de este proyecto es que se pueda comunicar mediante un mensaje  cifrado y a la vez la otra persona o entidad podrá brindarle apoyo decifrando el mensaje. Además esto se podria usar como una evidencia de violencia.

## Solución de problemas y necesidades de usuarios

  En la actualidad para que una mujer violentada haga escuchar su voz de ayuda tiene que pasar por cierto canales para que pueda comunicarse con un asesor de la linea 100 el cual toma tiempo. Esta plataforma "Jatari Warmi" ayuda a que deje un mensaje o denuncia oculta y este puede quedar registrado en la base de datos de una identidad como MIMP o Demuna.
  Las usuarias  pueden ocultar sus mensajes de ayuda mediante el cifrado y de la misma manera al recibirlo el receptor podra descifrar y conocer el mensaje.

## Prototipo en papel

  ![image](https://i.ibb.co/x3tjfCs/Prototipo-de-papel.jpg)

## Resumen de feedback
  - Primer feedback: Presenté un problema con el import y export de js y sugirió volver a clonar el cual me ayudo ya que no volvi a tener problemas. Además, me recomendo el uso de un método para JavaScript, reviso el trello, me dio algunas recomendaciones de uso.
  - Segundo feedback: Sugirió que diera un salto de línea entre el texto y el input number para que se viera equilibrado. Además, sugirió algunas validaciones para el Javascript. También, me ayudo a comprender mejor el Dom.
  - Tercer feedback: Presente incovenientes con el testeo me ayudo a solucionarlo, me dio algunas recomendaciones referente JavaScript. También, me dio recomendaciones para CSS y despejo una duda refrente a diseño responsive.

## Imagen del prototipo final.

![image](https://i.ibb.co/mG9vVNG/Prototipo-Jatari-Warmi.png)


## 5. Consideraciones tecnicas

## Como instalar, aplicar y ejecutar

  1.	Copiar url del proyecto
  2.	Para clonar en el git bash pegamos url
  3.	Desde el terminal de visual Estudio instalamos con npm install
  4.	Crear nuevos archivos:
        .gitignore ( dentro agregamos node_modules)
        .babelrc
        .eslintrc
  5.	Para ver el estado de los archivos colocamos git status
  6.	Pgregamos archivos con
      git add .gitignore
      git add .babelrc
      git add .eslintrc
      git add package-lock.json
  7.	Colocamos npm test
  8.	Creamos la carpeta coverage y dentro de:  .gitignore (coverage/)
  9.	Agregamos archivo .gitignore con git add .gitignore
  10.	Luego hacemos un commit con: git commit –m ”comentario”
  11.	Para ejecutar el proyecto colocamos: npm start
  12. Copiamos url y pegamos en el navegdor.


