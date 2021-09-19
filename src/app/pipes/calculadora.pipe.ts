import { Pipe, PipeTransform } from "@angular/core";

/*
 Las pipe (tuberías son pequeñas funcionalidades que tiene ts). 
 En el siguiente ejemplo creamos una calculadora.
*/
@Pipe({
    name:'calculator'
})
export class CalculadoraPipe implements PipeTransform{
    // dato | calculadora
    // param1 
    transform(value: any, value_two: any){
      
      let operaciones = `
      
      Suma: ${value + value_two} -
      Resta: ${value - value_two}  -
      Multiplicación: ${value * value_two} -  
      División:${value / value_two} - 
      Resto:${value % value_two} - 
      `
   
      ;
    
      return operaciones; 
    }
    
}

