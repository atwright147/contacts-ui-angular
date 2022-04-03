import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'length'
})
export class LengthPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): number {
    switch (typeof value) {
      case 'object':
        return Object.keys(value).length;

      case 'number':
        return value.toString().length;

      case 'string':
        return value.length;

      default:
        throw new Error(`Length pipe does not support type ${typeof value}`);
    }
  }
}
