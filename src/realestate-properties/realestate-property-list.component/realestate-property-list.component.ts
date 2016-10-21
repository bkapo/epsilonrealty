import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { InvolvedPartyType } from '../../app/models/involved-party.model';
import { ErrorModel, ErrorType } from '../../app/models/error.model'
import { RealEstatePropertyModel } from '../../app/models/realestate-property.model';
import { IPService } from '../../core/involved-party.service'

@Component({
    templateUrl: 'realestate-property-list.component.html'
})

export class RealEstatePropertyListPage implements OnInit {
    realEstateProperties: Array<RealEstatePropertyModel>;
    involvedPartyId: number;
    involvedPartyType: InvolvedPartyType;
    params: any;
    errorObject: ErrorModel
    isLoading: boolean = false;

    constructor(public nav: NavController, navParams: NavParams, public ipService: IPService) {
        this.nav = nav;
        this.params = navParams;
        this.involvedPartyId = this.params.get('paramInvPartyId');
        this.involvedPartyType = this.params.get('paramInvType');
    }

    getProperties() {
        this.isLoading = true;
        this.errorObject = null;
        console.log(this.involvedPartyType + ' ' + this.involvedPartyId);

        if (this.involvedPartyType === InvolvedPartyType.Agent) {
            this.ipService.getPropertiesOfAgent(this.involvedPartyId).finally(() => this.isLoading = false)
                .subscribe(
                (lst: RealEstatePropertyModel[]) => this.checkResults(lst),
                error => this.setError(error)
                );
        } else {
            this.ipService.getPropertiesOfInvolvedParty(this.involvedPartyId).finally(() => this.isLoading = false)
                .subscribe(
                (lst: RealEstatePropertyModel[]) => this.checkResults(lst),
                error => this.setError(error)
                );
        }
    }

    checkResults(relist: Array<RealEstatePropertyModel>) {
        if (relist && relist.length > 0) {
            this.realEstateProperties = relist;
        }
        else {
            this.setError('Not found')
        }
    }

    ngOnInit() {
        this.getProperties();
    }

    setError(err) {
        if (err === 'Not found') {
            this.errorObject = new ErrorModel(ErrorType.NotFound, 'Δεν βρέθηκαν αποτελέσματα...', '');
            console.log(this.errorObject);
        } else {
            this.errorObject = new ErrorModel(ErrorType.Error, err, '');
        }
    }


}