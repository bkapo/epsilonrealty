import { NgModule }           from '@angular/core';

import { SharedModule }        from '../shared/shared.module';

import { DemandCardComponent } from './demand-card.component/demand-card.component';
import { DemandAddComponent } from './demand-add.component/demand-add.component';
import { DemandListPage } from './demand-list.component/demand-list.component';
import { DemandComponent } from './demand.component/demand.component';
import { DemandRealEstateMatching } from './demand-realestate-matching.component/demand-realestate-matching.component';


@NgModule({
  imports:      [ SharedModule ],
  declarations: [ DemandCardComponent, DemandAddComponent,
                DemandListPage, DemandComponent, DemandRealEstateMatching ],
  exports: [ DemandCardComponent, DemandAddComponent,
                DemandListPage, DemandComponent, DemandRealEstateMatching ],
  providers:    [  ]
})
export class DemandModule { }