import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DemandModel } from './models/demand.model';
import { InvolvepdPartyModel } from './models/involved-party.model';
import { RealEstatePropertyModel } from './models/realestate-property.model';

import { InvolvedPartyTypePipe } from './pipes/involved-party-type.pipe';
import { KeysPipe } from './pipes/keys.pipe';
import { PropertyCategoryPipe } from './pipes/property-category.pipe';
import { PropertyTypePipe } from './pipes/property-type.pipe';
import { PurposePipe } from './pipes/purpose.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [InvolvedPartyTypePipe, KeysPipe,  PropertyCategoryPipe, 
                   PropertyTypePipe, PurposePipe],
    exports: [
                   InvolvedPartyTypePipe, KeysPipe,  PropertyCategoryPipe, 
                   PropertyTypePipe, PurposePipe,
                CommonModule, FormsModule]
})
export class SharedModule { }