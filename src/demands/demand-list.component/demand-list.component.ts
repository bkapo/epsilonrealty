import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

import { DemandModel } from '../../app/models/demand.model';
import { PropertyCategory, PropertyType } from '../../app/models/realestate-property.model'
import { IPService } from '../../core/involved-party.service'


@Component({
    templateUrl: 'demand-list.component.html'
})

export class DemandListPage implements OnInit {
    params: any;
    involvedPartyId: number;
    demands: Array<DemandModel>;
    errorMessage: string;
    isLoading: boolean = false;
    propCategories = PropertyCategory;
    propTypes = PropertyType;
    notFound: string = '';

    constructor(public navCtrl: NavController, navParams: NavParams, public ipService: IPService) {
        this.params = navParams;
        this.involvedPartyId = this.params.get('paramInvPartyId');
    }

    ngOnInit() {
        //fetch data...
        this.ipService.getDemandsOfInvolvedParty(this.involvedPartyId).finally(() => this.isLoading = false)
            .debounceTime(600)
            .distinctUntilChanged()
            .subscribe(
            dms => this.demands = dms,
            error => error === 'Not found' ? this.notFound = 'Δεν βρέθηκαν αποτελέσματα...' : this.errorMessage = <any>error
            );
    }

    goToRoot() {
        this.navCtrl.popToRoot();
    }

}