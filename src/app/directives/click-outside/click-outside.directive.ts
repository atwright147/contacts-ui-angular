// https://medium.com/@ajantha.p.bandara/angular-8-9-click-outside-directive-2f0062837f9e

import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

/**
 * Click outside directive
 *
 * @example <div appClickOutside (clickOutside)="handleOutSideClick()">
 */
@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<void>();

  constructor(
    private elementRef: ElementRef
  ) { }

  @HostListener('document:click', ['$event.target'])
  public onClick(target) {
    const clickedInside = this.elementRef.nativeElement.contains(target);

    if (!clickedInside) {
      this.clickOutside.emit();
    }
  }
}
