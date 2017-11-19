import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicModule } from 'ionic-angular';
import { RealtyApp } from './app.component';

/* Feature Modules */
import { CoreModule } from '../core/core.module';
import { DemandModule } from '../demands/demand.module'
import { InvolvedPartyModule } from '../involved-parties/involved-party.module'
import { RealEstatePropertyModule } from '../realestate-properties/realestate-property.module'
import { SearchModule } from '../search/searchbar.component/searchbar.component.module'
import { QuickSearchModule } from '../search/quick-search.component/quick-search.component.module'


@NgModule({
  declarations: [
    RealtyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DemandModule,
    InvolvedPartyModule,
    RealEstatePropertyModule,
    CoreModule,
    SearchModule,
    QuickSearchModule,
    IonicModule.forRoot(RealtyApp, {
      //preloadModules: true
    }),
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    RealtyApp
  ]
})
export class AppModule { }
