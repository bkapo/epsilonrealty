import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';
import { InvolvedPartyModule } from '../involved-parties/involved-party.module'
import { AgmCoreModule } from 'angular2-google-maps/core';

import { RealestatePropertyCardComponent } from './realestate-property-card.component/realestate-property-card.component';
import { RealEstatePropertyComponent } from './realestate-property.component/realestate-property.component';
import { RealEstatePropertyEditPage } from './realestate-property-edit.page/realestate-property-edit.page';
import { RealEstatePropertyAddPage } from '../realestate-properties/realestate-property-add.page/realestate-property-add.page';
import { GoogleMapComponent } from '../realestate-properties/realestate-property-map.component/realestate-property-map.component'

@NgModule({
    imports: [
        SharedModule,
        InvolvedPartyModule,
        IonicModule.forRoot(GoogleMapComponent),
        IonicModule.forRoot(RealestatePropertyCardComponent),
        IonicModule.forRoot(RealEstatePropertyComponent),
        IonicModule.forRoot(RealEstatePropertyAddPage),
        IonicModule.forRoot(RealEstatePropertyEditPage),
        AgmCoreModule.forRoot({ apiKey: 'AIzaSyBt2cSWSb4Hx6JkR7a6WFWFhPsVQrFVR6Q'})
        ],
    declarations: [
        GoogleMapComponent,
        RealestatePropertyCardComponent,
        RealEstatePropertyComponent,
        RealEstatePropertyAddPage,
        RealEstatePropertyEditPage],
    exports: [
        GoogleMapComponent,
        RealestatePropertyCardComponent,
        RealEstatePropertyComponent,
        RealEstatePropertyAddPage,
        RealEstatePropertyEditPage],
    providers: []
})
export class RealEstatePropertyModule { }