import { Component, forwardRef, Input, ViewChild, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'custom-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ]
})
export class CustomInputComponent implements ControlValueAccessor {
  @ViewChild('input', { static: false }) input: ElementRef<any>;

  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() autoFocus = false;
  @Input() isDisabled: boolean;
  @Input() edit: boolean;
  @Input() id: string;
  @Input() label: string;

  value = '';
  control: AbstractControl;

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


// @Component({
//   ...
//   providers: [
//     {
//       provide: NG_VALUE_ACCESSOR,
//       useExisting: forwardRef(() => CustomFormControlComponent),
//       multi: true
//     },
//     {
//       provide: NG_VALIDATORS,
//       useExisting: forwardRef(() => CustomFormControlComponent),
//       multi: true,
//     }]

// })
// export class CustomFormControlComponent implements ControlValueAccessor,
//       Validator, AfterViewInit {
//   ...
//   control:any
//   @ViewChild('input', { static: false, read: NgControl }) input
//   constructor() {
//   }
//   ngAfterViewInit() {
//      this.validate(null)
//   }
//   validate(control: AbstractControl): ValidationErrors | null{
//     if (!this.control)
//       this.control=control;

//     if (this.control && this.input)
//        this.input.control.setValidators(this.control.validator)

//     if (control.value=="qqq")
//       return {error:"Inner error:The value is 1"}

//     return null
//   }
