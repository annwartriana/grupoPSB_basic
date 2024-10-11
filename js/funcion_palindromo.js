
function verificarPalindromo(cadena){
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
  }

verificarPalindromo("oso");
verificarPalindromo("ama");
verificarPalindromo("asdasdasd");

