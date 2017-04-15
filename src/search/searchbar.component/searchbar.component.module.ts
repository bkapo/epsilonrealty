import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../../shared/shared.module';
import { InvolvedPartyModule } from '../../involved-parties/involved-party.module';
import { RealEstatePropertyModule } from '../../realestate-properties/realestate-property.module';

import { SearchComponent } from './searchbar.component';

@NgModule({
    declarations: [
        SearchComponent],
    imports: [
        SharedModule,
        InvolvedPartyModule,
        RealEstatePropertyModule,
        IonicPageModule.forChild(SearchComponent)],
	entryComponents: [
		SearchComponent
	]
})
export class SearchModule { }