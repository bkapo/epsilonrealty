import { Pipe, PipeTransform } from '@angular/core';

import { LandZone } from '../../app/models/propertyabstract.model';

@Pipe({name: 'landZone'})
export class LandZonePipe implements PipeTransform {
    myvalue: LandZone;
    LandZone: typeof LandZone = LandZone;

  transform(value: number, exponent: string): string {
      return LandZone[value];
  }
}