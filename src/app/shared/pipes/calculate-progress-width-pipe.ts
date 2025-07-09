import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateProgressWidth'
})
export class CalculateProgressWidthPipe implements PipeTransform {

  transform(maxWidth: number, currentValue: number): number {
    return (maxWidth * currentValue) / 100;
  }
}
