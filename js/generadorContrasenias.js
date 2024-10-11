//Seleccionar elementos HTML
const longitudEl = document.getElementById("longitud");
const minusculaEl = document.getElementById("minuscula");
const mayusculaEl = document.getElementById("mayuscula");
const numeroEl = document.getElementById("numeros");
const simboloEl = document.getElementById("simbolos");
const passwordEl = document.getElementById("password");
const generarBtnEl = document.getElementById("generarBtn");

generarBtnEl.addEventListener("click", function () {
  const MAYUSCULAS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const MINUSCULAS = "abcdefghijklmnopqrstuvwxyz";
  const SIMBOLOS = "!@#$%^&*()_-+=[]{}|;:,.<>/?";
  const NUMEROS = "0123456789";
  let caracteres = "";
  let password = "";

  const longitud = longitudEl.value;
  if (minusculaEl.checked) caracteres += MINUSCULAS;
  if (simboloEl.checked) caracteres += SIMBOLOS;
  if (numeroEl.checked) caracteres += NUMEROS;
  if (mayusculaEl.checked) caracteres += MAYUSCULAS;
  
  if (caracteres === "") return "No se seleccionó nada";

  for (let i = 0; i < longitud; i++) {
    let numAleatorio = Math.floor(Math.random() * caracteres.length);
    password += caracteres[numAleatorio];
  }

  passwordEl.value= password;

});

// function generarPassword(longitud, mayusc=true, minusc=true, simbolos=true, numeros=true){

// const MAYUSCULAS="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const MINUSCULAS="abcdefghijklmnopqrstuvwxyz";
// const SIMBOLOS = "!@#$%^&*()_-+=[]{}|;:,.<>/?";
// const NUMEROS = "0123456789";

// let caracteres="";
// let password="";

// //Forma extendida del if
// if(mayusc==true){
//     caracteres+=MAYUSCULAS;
// }
// //Forma simplificada del if
// if(minusc)caracteres+=MINUSCULAS;
// if(simbolos)caracteres+=SIMBOLOS;
// if(numeros)caracteres+=NUMEROS;

// if(caracteres==='') return "No se seleccionó nada";

// for(let i=0; i< longitud;i++){
//     let numAleatorio = Math.floor(Math.random()*caracteres.length);
//     password+=caracteres[numAleatorio];
// }
// return password;

// }

// console.log(generarPassword(12,1,1,1,1));
