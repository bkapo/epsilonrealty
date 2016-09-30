import { Pipe, PipeTransform } from '@angular/core';

import { Purpose } from '../models/realestate-property.model';

@Pipe({name: 'purpose'})
export class PurposePipe implements PipeTransform {
    myvalue: Purpose;
    PropertyCategory: typeof Purpose = Purpose;

  transform(value: number, exponent: string): string {
      return Purpose[value];
  }
}