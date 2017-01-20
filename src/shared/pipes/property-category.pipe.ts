import { Pipe, PipeTransform } from '@angular/core';

import { PropertyCategory } from '../../app/models/propertyabstract.model';

@Pipe({name: 'propertyCategory'})
export class PropertyCategoryPipe implements PipeTransform {
    myvalue: PropertyCategory;
    PropertyCategory: typeof PropertyCategory = PropertyCategory;

  transform(value: number, exponent: string): string {
      return PropertyCategory[value];
  }
}