import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

import { RealEstatePropertyModel } from '../../app/models/realestate-property.model'
import { PropertyCategory } from '../../app/models//propertyabstract.model'

import { ErrorModel, ErrorType } from '../../app/models/error.model'
import { DemandModel } from '../../app/models/demand.model';
import { REPService } from '../../core/realestate-property.service'

@Component({
    templateUrl: 'demand-realestate-matching.component.html'
})

export class DemandRealEstateMatching implements OnInit {
    params: any;
    realEstateList: Array<RealEstatePropertyModel>;
    dm: DemandModel;
    errorObject: ErrorModel
    isLoading: boolean = false;
    propCategories = PropertyCategory;
    //propTypes = PropertyType;

    constructor(public navCtrl: NavController, navParams: NavParams, public repService: REPService) {
        this.params = navParams;
        this.dm = this.params.get('paramDemand');
    }

    ngOnInit() {
        this.getResults(this.dm);
    }

    getResults(dm: DemandModel) {
        this.isLoading = true;
        this.errorObject = null;
        this.repService.demandMatching(dm).finally(() => this.isLoading = false)
            .subscribe(
            (re: RealEstatePropertyModel[]) => this.realEstateList = re,
            error => this.setError(error)
            );
    }

    setError(err) {
        if (err === 'Not found') {
            this.errorObject = new ErrorModel(ErrorType.NotFound, 'Δεν βρέθηκαν αποτελέσματα...', '');
        } else {
            this.errorObject = new ErrorModel(ErrorType.Error, err, '');
        }
    }

    goToRoot() {
        this.navCtrl.popToRoot();
    }
}