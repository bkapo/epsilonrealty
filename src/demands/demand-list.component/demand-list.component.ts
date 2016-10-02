import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

import { DemandModel } from '../../app/models/demand.model';
import { PropertyCategory, PropertyType } from '../../app/models/realestate-property.model'

@Component({
    templateUrl: 'demand-list.component.html'
})

export class DemandListPage {
    params: any;
    demands: Array<DemandModel>;
    errorMessage: string;
    isLoading: boolean = false;
    propCategories = PropertyCategory;
    propTypes = PropertyType;

    constructor(public nav: NavController, navParams: NavParams) {
        this.nav = nav;
        this.params = navParams;
        this.demands = this.params.get('paramDemands');
    }

}