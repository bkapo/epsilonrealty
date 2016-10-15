
import { Component, Input } from '@angular/core';
import { NavController, ItemSliding } from 'ionic-angular';

import { DemandModel } from '../../app/models/demand.model';
import { DemandRealEstateMatching } from '../demand-realestate-matching.component/demand-realestate-matching.component';
import { DemandEditComponent } from '../demand-edit.component/demand-edit.component'

@Component({
    selector: 'demand-card',
    templateUrl: 'demand-card.component.html'
})
export class DemandCardComponent {
    @Input() demand: DemandModel;

    constructor(public nav: NavController) {
        this.nav = nav;
    }

    getMatching(dm: DemandModel, slidingItem: ItemSliding) {
        slidingItem.close();
        this.nav.push(DemandRealEstateMatching, {
            paramDemand: dm
        });
    }
    
    editItem(dm: DemandModel, slidingItem: ItemSliding) {
        slidingItem.close();
        this.nav.push(DemandEditComponent, {
            paramDemand: dm
        });
    }


}