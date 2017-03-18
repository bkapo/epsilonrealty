import { Pipe, PipeTransform } from '@angular/core';

import { EnergyPerformance } from '../../app/models/propertyabstract.model';

@Pipe({name: 'energyperformance'})
export class EnergyPerformancePipe implements PipeTransform {
    myvalue: EnergyPerformance;
    EnergyPerformance: typeof EnergyPerformance = EnergyPerformance;

  transform(value: number, exponent: string): string {
      return EnergyPerformance[value];
  }
}