let cadena = "oso";
const CONSTANTE=9.8;


let i=0; 
let j = cadena.length -1;
let bandera=false;
while(i<=j){
  if(cadena[i] == cadena[j]){
    i++;
    j--;  
    bandera=true;  
  }else{
    bandera=false;
    break;
  }
}
if(bandera){
  console.log("Palindromo");
}else{
  console.log("NO Palindromo");
}

cadena="jsahdjahsdf";



// const arreglo=[];
// for (let i = cadena.length - 1; i >= 0; i--) {
//   console.log(cadena[i]);
//   nuevaCadena += cadena[i];
// }
// let contador = 0;

// for (let i = 0; i < cadena.length; i++) {
  // if (nuevaCadena[i] == cadena[i] ) {
//     contador++;
//   } else {
//     contador = 0;
//     break;
//   }
// }

// if (contador != 0) {
//   console.log("Palindromo");
// } else {
//   console.log("NO Palindromo");
// }
// console.log(nuevaCadena);


