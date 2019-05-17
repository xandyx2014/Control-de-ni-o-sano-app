import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClickanimatecss]'
})
export class ClickanimatecssDirective {

  constructor(private renderer: Renderer2, hostElement: ElementRef) {
    this.rotate(hostElement);
  }


  rotate(hostElement: ElementRef) {
    this.renderer.listen(hostElement.nativeElement, 'click', (event) => {
      this.renderer.addClass(hostElement.nativeElement, 'animated');
      this.renderer.addClass(hostElement.nativeElement, 'slow');
      this.renderer.addClass(hostElement.nativeElement, 'zoomOut');
      setTimeout( () => {
      this.renderer.removeClass(hostElement.nativeElement, 'animated');
      this.renderer.removeClass(hostElement.nativeElement, 'slow');
      this.renderer.removeClass(hostElement.nativeElement, 'zoomOut');
    }, 2000);
    });
  }

}
