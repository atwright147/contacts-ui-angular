import { Component, Input } from '@angular/core';

export enum Motifs {
  primary = 'primary',
  secondary = 'secondary',
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  className = '';

  @Input() id = '';
  @Input() type = '';
  @Input() wide = false;
  @Input() disabled = false;
  @Input() set motif(name: Motifs) {
    this.className = Motifs[name];
  }
}
