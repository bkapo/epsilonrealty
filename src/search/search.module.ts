import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';
import { InvolvedPartyModule } from '../involved-parties/involved-party.module';
import { RealEstatePropertyModule } from '../realestate-properties/realestate-property.module';

import { SearchBarComponent } from './searchbar.component/searchbar.component/';

@NgModule({
    imports: [
                SharedModule,
                InvolvedPartyModule,
                RealEstatePropertyModule,
                IonicModule.forRoot(SearchBarComponent) ],
    declarations: [
                SearchBarComponent ],
    exports: [
                SearchBarComponent ],
    providers: []
})
export class SearchModule { }