# Notes

## Angular validation output

https://angular.io/api/forms/Validators

```js
const control = new FormControl(2, Validators.min(3));
// {min: {min: 3, actual: 2}}

// --------------------------------------------------

const control = new FormControl(16, Validators.max(15));
// {max: {max: 15, actual: 16}}

// --------------------------------------------------

const control = new FormControl('', Validators.required);
// {required: true}

// --------------------------------------------------

const control = new FormControl('some value', Validators.requiredTrue);
// {required: true}

// --------------------------------------------------

const control = new FormControl('bad@', Validators.email);
// {email: true}

// --------------------------------------------------

const control = new FormControl('ng', Validators.minLength(3));
// {minlength: {requiredLength: 3, actualLength: 2}}

// --------------------------------------------------

const control = new FormControl('Angular', Validators.maxLength(5));
// {maxlength: {requiredLength: 5, actualLength: 7}}

// --------------------------------------------------

const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
// {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
```
