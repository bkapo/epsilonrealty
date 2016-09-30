import { Pipe, PipeTransform } from '@angular/core';
import { InvolvedPartyType } from '../models/involved-party.model';

@Pipe({name: 'involvedPartyType'})
export class InvolvedPartyTypePipe implements PipeTransform {
    myvalue: InvolvedPartyType;
    InvolvedPartyType: typeof InvolvedPartyType = InvolvedPartyType;

  transform(value: number, exponent: string): string {
      return InvolvedPartyType[value];
  }
}