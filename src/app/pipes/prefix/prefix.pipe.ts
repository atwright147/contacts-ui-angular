import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefix'
})
export class PrefixPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    const [prefix] = args;
    return `${prefix}${value}`;
  }
}
