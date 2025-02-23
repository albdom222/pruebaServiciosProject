import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appEstiloProductos]'
})
export class EstiloProductosDirective {

  /**+
   * ElementRef viene de Directive
   * @param element
   */
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'green';
    this.element.nativeElement.style.textTransform = 'capitalize';
  }


}
