
function generarPassword(longitud, mayusc, minusc, simbolos, numeros){

const MAYUSCULAS="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const MINUSCULAS="abcdefghijklmnopqrstuvwxyz";
const SIMBOLOS = "!@#$%^&*()_-+=[]{}|;:,.<>/?";
const NUMEROS = "0123456789";

let caracteres="";
let password="";

//Forma extendida del if
if(mayusc==true){
    caracteres+=MAYUSCULAS;  
}
//Forma simplificada del if
if(minusc)caracteres+=MINUSCULAS;
if(simbolos)caracteres+=SIMBOLOS;
if(numeros)caracteres+=NUMEROS;

for(let i=0; i< longitud;i++){
    let numAleatorio = Math.floor(Math.random()*caracteres.length);
    password+=caracteres[numAleatorio];
}
return password;

}

console.log(generarPassword(12,1,1,1,1));
