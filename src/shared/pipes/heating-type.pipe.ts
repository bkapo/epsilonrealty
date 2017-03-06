import { Pipe, PipeTransform } from '@angular/core';

import { HeatingType } from '../../app/models/propertyabstract.model';

@Pipe({name: 'heatingType'})
export class HeatingTypePipe implements PipeTransform {
    myvalue: HeatingType;
    PropertyCategory: typeof HeatingType = HeatingType;

  transform(value: number, exponent: string): string {
      return HeatingType[value];
  }
}