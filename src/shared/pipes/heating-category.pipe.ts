import { Pipe, PipeTransform } from '@angular/core';

import { HeatingCategory } from '../../app/models/propertyabstract.model';

@Pipe({name: 'heatingCategory'})
export class HeatingCategoryPipe implements PipeTransform {
    myvalue: HeatingCategory;
    PropertyCategory: typeof HeatingCategory = HeatingCategory;

  transform(value: number, exponent: string): string {
      return HeatingCategory[value];
  }
}