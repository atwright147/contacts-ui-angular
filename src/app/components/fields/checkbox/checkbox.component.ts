import { Component, forwardRef, Input, ViewChild, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor {
  control: AbstractControl;
  checked = false;

  @ViewChild('input', { static: false }) input: ElementRef<HTMLInputElement>;

  @Input() autoFocus = false;
  @Input() isDisabled: boolean;
  @Input() id: string;
  @Input() label: string;
  @Input() value = false;

  onChange: (value?: any) => void;
  onTouch: (event: any) => void;

  ngAfterViewInit() {
    if (this.autoFocus) {
      this.onFocus();
    }

    this.validate(null);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (!this.control) {
      this.control = control;
    }

    if (this.control && this.input) {
      this.control.setValidators(this.control.validator);
    }

    return null;
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
