import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

import { RealEstatePropertyModel, PropertyCategory, PropertyType } from '../../app/models/realestate-property.model'
import { DemandModel } from '../../app/models/demand.model';
import { REPService } from '../../core/realestate-property.service'

@Component({
    templateUrl: 'demand-realestate-matching.component.html'
})

export class DemandRealEstateMatching implements OnInit {
    params: any;
    realEstateList: Array<RealEstatePropertyModel>;
    dm: DemandModel;
    errorMessage: string;
    isLoading: boolean = false;
    propCategories = PropertyCategory;
    propTypes = PropertyType;

    constructor(public nav: NavController, navParams: NavParams, public repService: REPService) {
        this.nav = nav;
        this.params = navParams;
        this.dm = this.params.get('paramDeamand');
    }
    
    ngOnInit() {
        this.getResults(this.dm);
    }

    getResults(dm: DemandModel) {
        this.isLoading = true;
        this.repService.demandMatching(dm).finally(() => this.isLoading = false)
            .subscribe(
            (re: RealEstatePropertyModel[]) => this.realEstateList = re,
            error => this.errorMessage = <any>error
            );
    }
}