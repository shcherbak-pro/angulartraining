import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {
  constructor(element: ElementRef<HTMLElement>, renderer: Renderer2) {
    renderer.setStyle(element.nativeElement, 'box-shadow', '2px 2px 12px #58A362');
  }
}
