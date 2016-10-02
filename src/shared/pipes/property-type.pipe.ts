import { Pipe, PipeTransform } from '@angular/core';

import { PropertyType } from '../../app/models/realestate-property.model';

@Pipe({name: 'propertyType'})
export class PropertyTypePipe implements PipeTransform {
    myvalue: PropertyType;
    PropertyCategory: typeof PropertyType = PropertyType;

  transform(value: number, exponent: string): string {
      return PropertyType[value];
  }
}