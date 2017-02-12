import { Component, OnInit } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';

import { InvolvepdPartyModel } from '../../app/models/involved-party.model';
import { ErrorModel, ErrorType } from '../../app/models/error.model'
import { IPService } from '../../core/involved-party.service'


@Component({
    templateUrl: 'involvedparties-list.page.html'
})
export class InvolvedpartiesListPage implements OnInit {
    people: Array<InvolvepdPartyModel>;
    errorObject: ErrorModel

    constructor(public nav: NavController, public loadingCtrl: LoadingController, public ipService: IPService) {
        this.nav = nav;
    }

    getAllAgents() {
        let loader = this.loadingCtrl.create({
            content: 'Please wait...',
           // dismissOnPageChange: true
        });
        loader.present();

        this.ipService.getInvolvedPartyByType(1).finally(() => loader.dismiss())
            .subscribe(
            (inv: InvolvepdPartyModel[]) => this.people = inv,
            error => this.setError(error),
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

    setError(err) {
        if (err === 'Not found') {
            this.errorObject = new ErrorModel(ErrorType.NotFound, 'Δεν βρέθηκαν αποτελέσματα...', '');
            console.log(this.errorObject);
        } else {
            this.errorObject = new ErrorModel(ErrorType.Error, err, '');
        }
    }

}
