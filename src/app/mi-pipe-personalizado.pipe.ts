import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipePersonalizado'
})
export class MiPipePersonalizadoPipe implements PipeTransform {


  /**
   * Este pipe te devuelve el valor en may.
   * El pipe y la directiva tambien se añaden en app.module.ts
   * @param value
   */
  transform(value: string):string{
    return value.toUpperCase() || '';
  }

}
