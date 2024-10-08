 /* Pirámide de asteriscos: Escriba programa que imprima una pirámide de asteriscos con una altura dada por el usuario y en donde cada nivel aumenta con la secuencia de números impares (1,3,5,7,9...). Pista: se pueden colocar ciclos  dentro de ciclos. Por ejemplo, si el usuario ingresa 5, el resultado debe ser:
*
***
*****
*******
*/

int altura = 0;
int contadorAsteriscos=1;
string astImpresos="";
cout<<"Ingrese altura: ";
cin>>altura;
cout<< endl;

for ( int i = 0; i<altura; i++){
    
    for (int j=contadorAsteriscos; j>0; j-- ){
        astImpresos += "*";
    }
        astImpresos += "\n";
        contadorAsteriscos+=2;
}
cout<<astImpresos;

