import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

/* Feature Modules */
import { CoreModule } from '../core/core.module';
import { DemandModule } from '../demands/demand.module'
import { InvolvedPartyModule } from '../involved-parties/involved-party.module'
import { RealEstatePropertyModule } from '../realestate-properties/realestate-property.module'


@NgModule({
  imports: [
    IonicModule.forRoot(MyApp),
    CoreModule,
    DemandModule,
    InvolvedPartyModule,
    RealEstatePropertyModule
  ],
  declarations: [
    MyApp
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ]
})
export class AppModule { }
