import { Component, forwardRef, Input, ViewChild, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'custom-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    }
  ]
})
export class CustomInputComponent implements ControlValueAccessor {
  @ViewChild('input', { static: false }) input: ElementRef;

  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() autoFocus = false;
  @Input() isDisabled: boolean;
  @Input() edit: boolean;
  @Input() id: string;
  @Input() label: string;

  value = '';
  onChange: (value?: any) => void;
  onTouch: (event: any) => void;

  ngAfterViewInit() {
    if(this.autoFocus) {
      this.onFocus()
    }
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisableState(status: boolean) {
    this.isDisabled = status;
  }

  onInput(value) {
    if(this.onChange) {
      this.onChange(value);
    }
  }

  onTouched(value) {
    if(this.onTouch) {
      this.onTouch(value)
    }
  }

  onFocus() {
    this.input.nativeElement.focus();
  }
}
