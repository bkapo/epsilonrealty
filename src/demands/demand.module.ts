import { NgModule }           from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { SharedModule }        from '../shared/shared.module';
import { RealEstatePropertyModule } from '../realestate-properties/realestate-property.module'

import { DemandCardComponent } from './demand-card.component/demand-card.component';
import { DemandAddComponent } from './demand-add.component/demand-add.component';
import { DemandListPage } from './demand-list.component/demand-list.component';
import { DemandComponent } from './demand.component/demand.component';
import { DemandRealEstateMatching } from './demand-realestate-matching.component/demand-realestate-matching.component';


@NgModule({
  imports:[ 
        SharedModule,
        RealEstatePropertyModule,
        IonicModule.forRoot(DemandCardComponent), 
        IonicModule.forRoot(DemandAddComponent),
        IonicModule.forRoot(DemandListPage), 
        IonicModule.forRoot(DemandComponent), 
        IonicModule.forRoot(DemandRealEstateMatching) ],
  declarations: [ 
        DemandCardComponent, 
        DemandAddComponent,
        DemandListPage, 
        DemandComponent, 
        DemandRealEstateMatching ],
  exports: [ 
        DemandCardComponent, 
        DemandAddComponent,
        DemandListPage, 
        DemandComponent, 
        DemandRealEstateMatching ],
  providers:    [  ]
})
export class DemandModule { }