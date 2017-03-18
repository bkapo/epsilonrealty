import { Pipe, PipeTransform } from '@angular/core';

import { CommercialPropertyType } from '../../app/models/propertyabstract.model';

@Pipe({name: 'commercialPropertyType'})
export class CommercialPropertyTypePipe implements PipeTransform {
    myvalue: CommercialPropertyType;
    CommercialPropertyType: typeof CommercialPropertyType = CommercialPropertyType;

  transform(value: number, exponent: string): string {
      return CommercialPropertyType[value];
  }
}