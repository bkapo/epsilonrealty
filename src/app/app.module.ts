import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

/* Feature Modules */
import { CoreModule } from '../core/core.module';
import { DemandModule } from '../demands/demand.module'
import { InvolvedPartyModule } from '../involved-parties/involved-party.module'
import { RealEstatePropertyModule } from '../realestate-properties/realestate-property.module'
import { SearchModule } from '../search/search.module'


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    DemandModule,
    InvolvedPartyModule,
    RealEstatePropertyModule,
    CoreModule,
    SearchModule,
    IonicModule.forRoot(MyApp),
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ]
})
export class AppModule { }
