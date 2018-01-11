import {Component, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'expander',
  template: require('./expander.html')
})
export class ExpanderComponent {
  @Input('link-text') linkText;
  @ViewChild('content') contentDiv;

  constructor() {
    this.expanded = false;
    this.animationDuration = 115;
  }

  open() {
    this.expanded = !this.expanded;

    setTimeout(() => {
      this.contentDiv.nativeElement.style.height = `0px`;
      this.contentDiv.nativeElement.style.height = `${this.contentDiv.nativeElement.scrollHeight}px`;

      setTimeout(() => {
        this.contentDiv.nativeElement.style.height = `auto`;
      }, this.animationDuration);
    });
  }
}
