import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorsComponent {
  @Input() set errors(errors: ValidationErrors) {
    this.errorMessages = Object.keys(errors).map((error) => {
      if (error === 'min') {
        return `This field's value cannot be greater than ${errors[error].min}`;
      }

      if (error === 'max') {
        return `This field's value cannot be greater than ${errors[error].max}`;
      }

      if (error === 'minlength') {
        return `This field's value can be no shorter than ${errors[error].requiredLength} characters`;
      }

      if (error === 'maxlength') {
        return `This field's value can be no longer than ${errors[error].requiredLength} characters`;
      }

      if (error === 'pattern') {
        return `This field's value must match the pattern ${errors[error].requiredPattern}`;
      }

      if (errors[error]) {
        return this.messages[error] ?? error;
      }
    });
  }

  messages = {
    email: 'Email must be a vaild email address',
    required: 'This field is required',
  };

  errorMessages: string[] = [];
}
