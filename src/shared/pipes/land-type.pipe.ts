import { Pipe, PipeTransform } from '@angular/core';

import { LandPropertyType } from '../../app/models/propertyabstract.model';

@Pipe({name: 'landType'})
export class LandTypePipe implements PipeTransform {
    myvalue: LandPropertyType;
    LandType: typeof LandPropertyType = LandPropertyType;

  transform(value: number, exponent: string): string {
      return LandPropertyType[value];
  }
}