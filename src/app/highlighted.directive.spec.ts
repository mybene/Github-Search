import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighligthed]'
})
export class HighligthedDirective {

 

  constructor(private elem:ElementRef) {}

  private backgroundColor(action:string){ 
    this.elem.nativeElement.style.backgroundColor= action;
   }

}
