import { Component, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

export enum Motifs {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  classNames = [];

  @Input() id = '';
  @Input() type = '';
  @Input() disabled = false;
  @Input() set wide(value: string | boolean) {
    if (coerceBooleanProperty(value)) {
      this.classNames.push('wide');
    }
  };
  @Input() set icon(value: boolean) {
    if (value) {
      this.classNames.push('button-icon');
    }
  }
  @Input() set motif(name: Motifs) {
    this.classNames.push(Motifs[name]);
  }
}
