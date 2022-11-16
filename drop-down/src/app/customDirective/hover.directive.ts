import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    //console.log(element);
  }

  @HostListener('mouseenter')
  onMouseOver() {
    //this.renderer.setStyle(this.element.nativeElement, 'margin', '5px 10px');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '10px 10px');
    //console.log(this.renderer);
    
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
    this.renderer.setStyle(this.element.nativeElement, 'background-color', '#f781f3');
  }

  @HostListener('mouseleave')
  onMouseOut() {
    //this.renderer.setStyle(this.element.nativeElement, 'margin', '5px 10px');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '0px 0px');
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
    this.renderer.setStyle(this.element.nativeElement, 'background-color', '#ffffff');
  }

  // @HostListener('input',['$event'])
  // check2(event: any) {
  //   let reg = new RegExp("^[a-zA-Z0-9\@]+$");
  //   var val2 = event.data;
  //   let num = val2.charCodeAt(0);
  //   var val = String.fromCharCode(num);
  //   console.log(num);
  //   console.log(reg.test(val2) + ' onInput');
  //   console.log(event.cancelable);
  //   if (!reg.test(val)){
      
  //     console.log('if block using directive');
  //   }
  //   else
  //     console.log('else block using directive');
      
  // }
}
