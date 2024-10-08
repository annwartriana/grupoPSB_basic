#include <iostream>
using namespace std;
int main() {
    /* Nomina. Usuario ingresa 1 valor. App debe determinar Horas extra, normales. ¿Comparar cuál fue el mayor valor? 
    */
    // Entrada
    int horasIngresadas=0;
    int horasExtras=0;
    int horasNormales=0;
    int jornadaLaboral=8;
    int valorHoraNormal= 4000, finalValorHNormales;
    int valorHoraExtra= 8000, finalValorHExtras;
    int n;
    for( int i=1; i<=6;i++){
        cout<<"Ingrese las horas trabajadas para el día "<<i<<": ";
        cin>>n;
         if(n>8){
            horasExtras+=n-8;
            horasNormales+=8;
        }
        //No hay horas extra
        else{
            horasNormales+=n;
        }
    }
    
    //Calcular valor de las horas
    finalValorHExtras = horasExtras*valorHoraExtra;
    finalValorHNormales= horasNormales*valorHoraNormal;
    cout<<"--------------------------------------------" <<endl;
    cout<<"Total Horas trabajadas: "<< (horasNormales + horasExtras)<<endl;
    cout<<"Total Hora Normal:" << horasNormales<<endl;
    cout<<"Valor Horas Normales: $" << finalValorHNormales<<endl;
    cout<<"Total Horas Extra:" << horasExtras<<endl;
    cout<<"Valor Horas Extra: $" << finalValorHExtras<<endl;
    cout<<"--------------------------------------------" <<endl;
    
    //Comparación
    if(finalValorHNormales>finalValorHExtras){
        cout<<"El trabajador ganó más dinero por horas normales.";  
    }
    else if(finalValorHNormales==finalValorHExtras)
    {
        cout<<"El trabajador ganó lo mismo por horas extra que por normales.";     
        
    }
    else{
        cout<<"El trabajador ganó más dinero por horas extra."<<finalValorHExtras;     
    }
    return 0;
}
