import { Pipe, PipeTransform } from '@angular/core';

import { LandType } from '../../app/models/propertyabstract.model';

@Pipe({name: 'landType'})
export class LandTypePipe implements PipeTransform {
    myvalue: LandType;
    LandType: typeof LandType = LandType;

  transform(value: number, exponent: string): string {
      return LandType[value];
  }
}