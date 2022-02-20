import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'separateNumber'
})
export class SeparateNumberPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value ? String(value).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,') + '  تومان' : '0 تومان';
  }

}
