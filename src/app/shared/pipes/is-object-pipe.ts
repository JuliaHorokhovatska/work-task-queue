import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isObject'
})
export class IsObjectPipe implements PipeTransform {
  transform(item: any): boolean {
    return typeof item === 'object' && item !== null;
  }
}
