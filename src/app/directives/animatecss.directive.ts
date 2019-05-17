import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAnimatecss]',
})
export class AnimatecssDirective {

  constructor(private renderer: Renderer2, hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'animated');
    renderer.addClass(hostElement.nativeElement, 'slow');
    renderer.addClass(hostElement.nativeElement, 'fadeIn');
  }
}
