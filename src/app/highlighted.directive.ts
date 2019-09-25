import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighligthed]'
})
export class HighligthedDirective {

  @HostListener("click") getInfos(){
    this.color('blue')
  }
  

  constructor(private elem:ElementRef) {}

  private color(action:string){ 
    this.elem.nativeElement.style.color= action;
   }

}