import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { InvolvepdPartyModel } from '../../shared/models/involved-party.model';
import { IPService } from '../../core/involved-party.service'


@Component({
    templateUrl: 'involvedparties-list.page.html'
})
export class InvolvedpartiesListPage implements OnInit {
    people: Array<InvolvepdPartyModel>;
    errorMessage: string;
    isLoading: boolean = false;

    constructor(public nav: NavController, public ipService: IPService) {
        this.nav = nav;
    }

    getAllAgents() {
        this.isLoading = true;
        this.ipService.getInvolvedPartyByType(1).finally(() => this.isLoading = false)
            .subscribe(
            (inv: InvolvepdPartyModel[]) => this.people = inv,
            error => this.errorMessage = <any>error,
            () => console.log(this.people)
            );
    }

    ngOnInit() {
        this.getAllAgents();
    }


    ondrag(item) {
        let percent = item.getSlidingPercent();

        if (percent > 0 && Math.abs(percent) > 1) {
            // right side -- overscroll
            //this.editItem(item);
        }


    }
}
