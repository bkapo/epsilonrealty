import { Pipe, PipeTransform } from '@angular/core';

import { Access } from '../../app/models/propertyabstract.model';

@Pipe({name: 'energyperformance'})
export class AccessPipe implements PipeTransform {
    myvalue: Access;
    Access: typeof Access = Access;

  transform(value: number, exponent: string): string {
      return Access[value];
  }
}