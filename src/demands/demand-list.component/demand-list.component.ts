import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

import { DemandModel } from '../../app/models/demand.model';
import { PropertyCategory, PropertyType } from '../../app/models/realestate-property.model'
import { IPService } from '../../core/involved-party.service'
import { InvolvedPartyType } from '../../app/models/involved-party.model'


@Component({
    templateUrl: 'demand-list.component.html'
})

export class DemandListPage implements OnInit {
    params: any;
    involvedPartyId: number;
    involvedPartyType: InvolvedPartyType;
    demands: Array<DemandModel>;
    errorMessage: string;
    isLoading: boolean = false;
    propCategories = PropertyCategory;
    propTypes = PropertyType;
    notFound: string = '';

    constructor(public navCtrl: NavController, navParams: NavParams, public ipService: IPService) {
        this.params = navParams;
        this.involvedPartyId = this.params.get('paramInvPartyId');
        this.involvedPartyType = this.params.get('paramInvType');
    }

    ngOnInit() {
        //fetch data...
        if (this.involvedPartyType === InvolvedPartyType.Customer) {
            this.ipService.getDemandsOfInvolvedParty(this.involvedPartyId).finally(() => this.isLoading = false)
                .subscribe(
                dms => this.demands = dms,
                error => error === 'Not found' ? this.notFound = 'Δεν βρέθηκαν αποτελέσματα...' : this.errorMessage = <any>error
                );
        } else {
            this.ipService.getDemandsOfAgent(this.involvedPartyId).finally(() => this.isLoading = false)
                .subscribe(
                dms => this.demands = dms,
                error => error === 'Not found' ? this.notFound = 'Δεν βρέθηκαν αποτελέσματα...' : this.errorMessage = <any>error
                );
        }
    }

    goToRoot() {
        this.navCtrl.popToRoot();
    }

}