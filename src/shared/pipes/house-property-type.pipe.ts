import { Pipe, PipeTransform } from '@angular/core';

import { HousePropertyType } from '../../app/models/propertyabstract.model';

@Pipe({name: 'housePropertyType'})
export class HousePropertyTypePipe implements PipeTransform {
    myvalue: HousePropertyType;
    HousePropertyType: typeof HousePropertyType = HousePropertyType;

  transform(value: number, exponent: string): string {
      return HousePropertyType[value];
  }
}