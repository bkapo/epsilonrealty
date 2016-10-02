import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

/* Feature Modules */
import { CoreModule } from '../core/core.module';
import { DemandModule } from '../demands/demand.module'
import { InvolvedPartyModule } from '../involved-parties/involved-party.module'
import { RealEstatePropertyModule } from '../realestate-properties/realestate-property.module'

import { DemandModel } from './models/demand.model';
import { InvolvepdPartyModel } from './models/involved-party.model';
import { RealEstatePropertyModel } from './models/realestate-property.model';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    CoreModule,
    DemandModule,
    InvolvedPartyModule,
    RealEstatePropertyModule,
    IonicModule.forRoot(MyApp),
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ]
})
export class AppModule { }
