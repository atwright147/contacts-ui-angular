// https://www.positronx.io/angular-material-8-icons-tutorial-with-real-world-examples/

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

const modules = [
  MatIconModule
];

@NgModule({
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [
    ...modules
  ],
})
export class MaterialModule { }
