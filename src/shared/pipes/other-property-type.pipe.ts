import { Pipe, PipeTransform } from '@angular/core';

import { OtherPropertyType } from '../../app/models/propertyabstract.model';

@Pipe({name: 'otherPropertyType'})
export class OtherPropertyTypePipe implements PipeTransform {
    myvalue: OtherPropertyType;
    OtherPropertyType: typeof OtherPropertyType = OtherPropertyType;

  transform(value: number, exponent: string): string {
      return OtherPropertyType[value];
  }
}