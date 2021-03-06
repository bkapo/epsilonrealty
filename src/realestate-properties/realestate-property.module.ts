import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';
import { InvolvedPartyModule } from '../involved-parties/involved-party.module'
import { AgmCoreModule } from '@agm/core';

import { RealestatePropertyCardComponent } from './realestate-property-card.component/realestate-property-card.component';
import { RealEstatePropertyComponent } from './realestate-property.component/realestate-property.component';
import { RealEstatePropertyLandComponent } from './realestate-property-land.component/realestate-property-land.component';
import { RealEstatePropertyCommercialComponent } from './realestate-property-commercial.component/realestate-property-commercial.component';
import { RealEstatePropertyOtherComponent } from './realestate-property-other.component/realestate-property-other.component';

import { RealEstatePropertyEditPage } from './realestate-property-edit.page/realestate-property-edit.page';
import { RealEstatePropertyAddPage } from '../realestate-properties/realestate-property-add.page/realestate-property-add.page';
import { RealEstatePropertyListPage } from '../realestate-properties/realestate-property-list.component/realestate-property-list.component'
import { GoogleMapComponent } from '../realestate-properties/realestate-property-map.component/realestate-property-map.component'

@NgModule({
    imports: [
        SharedModule,
        InvolvedPartyModule,
        IonicModule.forRoot(GoogleMapComponent),
        IonicModule.forRoot(RealestatePropertyCardComponent),
        IonicModule.forRoot(RealEstatePropertyLandComponent),
        IonicModule.forRoot(RealEstatePropertyCommercialComponent),
        IonicModule.forRoot(RealEstatePropertyOtherComponent),
        IonicModule.forRoot(RealEstatePropertyComponent),
        IonicModule.forRoot(RealEstatePropertyAddPage),
        IonicModule.forRoot(RealEstatePropertyEditPage),
        IonicModule.forRoot(RealEstatePropertyListPage),
        AgmCoreModule.forRoot({ apiKey: 'AIzaSyBt2cSWSb4Hx6JkR7a6WFWFhPsVQrFVR6Q'})
        ],
    declarations: [
        GoogleMapComponent,
        RealestatePropertyCardComponent,
        RealEstatePropertyLandComponent,
        RealEstatePropertyCommercialComponent,
        RealEstatePropertyOtherComponent,
        RealEstatePropertyListPage,
        RealEstatePropertyComponent,
        RealEstatePropertyAddPage,
        RealEstatePropertyEditPage],
    exports: [
        GoogleMapComponent,
        RealestatePropertyCardComponent,
        RealEstatePropertyListPage,
        RealEstatePropertyComponent,
        RealEstatePropertyLandComponent,
        RealEstatePropertyOtherComponent,
        RealEstatePropertyCommercialComponent,
        RealEstatePropertyAddPage,
        RealEstatePropertyEditPage],
    providers: []
})
export class RealEstatePropertyModule { }