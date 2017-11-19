import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../../shared/shared.module';
import { InvolvedPartyModule } from '../../involved-parties/involved-party.module';
import { RealEstatePropertyModule } from '../../realestate-properties/realestate-property.module';

import { QuickSearchComponent } from './quick-search.component';

@NgModule({
    declarations: [
        QuickSearchComponent],
    imports: [
        SharedModule,
        InvolvedPartyModule,
        RealEstatePropertyModule,
        IonicPageModule.forChild(QuickSearchComponent)],
	entryComponents: [
		QuickSearchComponent
	]
})
export class QuickSearchModule { }