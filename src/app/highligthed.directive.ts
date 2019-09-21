import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighligthed]'
})
export class HighligthedDirective {

  @HostListener("click") getInfos(){
    this.backgroundColor('aliceBlue')
  }

  constructor(private elem:ElementRef) {}

  private backgroundColor(action:string){ 
    this.elem.nativeElement.style.backgroundColor= action;
   }

}
