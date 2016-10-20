import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { InvolvedPartyType } from '../../app/models/involved-party.model';
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
    errorMessage: string;
    isLoading: boolean = false;

    constructor(public nav: NavController, navParams: NavParams, public ipService: IPService) {
        this.nav = nav;
        this.params = navParams;
        this.involvedPartyId = this.params.get('paramInvPartyId');
        this.involvedPartyType = this.params.get('paramInvType');
    }

    getProperties() {
        this.isLoading = true;

        if (this.involvedPartyType === InvolvedPartyType.Customer) {
            
        } else {
            this.ipService.getPropertiesOfAgent(this.involvedPartyId).finally(() => this.isLoading = false)
                .subscribe(
                (lst: RealEstatePropertyModel[]) => this.realEstateProperties = lst,
                error => this.errorMessage = <any>error,
                () => console.log(this.realEstateProperties)
                );
        }
    }

    ngOnInit() {
        this.getProperties();
    }


}