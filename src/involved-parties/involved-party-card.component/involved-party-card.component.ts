import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DemandModel } from '../../app/models/demand.model';
import { DemandAddComponent } from '../../demands/demand-add.component/demand-add.component'
import { DemandListPage } from '../../demands/demand-list.component/demand-list.component'

import { InvolvepdPartyModel } from '../../app/models/involved-party.model';
import { InvolvedPartyEditPage } from '../../involved-parties/involved-party-edit.page/involved-party-edit.page'

@Component({
    selector: 'involved-party-card',
    templateUrl: 'involved-party-card.component.html'
})
export class InvolvedPartyCardComponent {
    @Input('card-people') people: InvolvepdPartyModel;
    newDm: DemandModel;

    constructor(public nav: NavController) {
        this.nav = nav;
    }

    addDemand(ip: InvolvepdPartyModel) {
        this.newDm = new DemandModel;
        this.newDm.Customer = ip;
        this.newDm.CustomerId = ip.InvolvedPartyId;
        this.nav.push(DemandAddComponent, {
            paramDemand: this.newDm
        });
    }

    viewDemands(ip: InvolvepdPartyModel) {
        this.nav.push(DemandListPage, {
            paramInvPartyId: ip.InvolvedPartyId
        });
    }

    editIP(ip) {
        this.nav.push(InvolvedPartyEditPage, {
            paramInvParty: ip
        });
    }

}