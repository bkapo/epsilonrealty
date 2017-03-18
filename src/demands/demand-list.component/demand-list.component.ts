import { Component, OnInit } from '@angular/core';
import { NavParams, NavController, LoadingController } from 'ionic-angular';

import { DemandModel } from '../../app/models/demand.model';
import { ErrorModel, ErrorType } from '../../app/models/error.model'
import { PropertyCategory } from '../../app/models/propertyabstract.model'
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
    errorObject: ErrorModel
    propCategories = PropertyCategory;
    //propTypes = PropertyType;
    notFound: string = '';

    constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, navParams: NavParams, public ipService: IPService) {
        this.params = navParams;
        this.involvedPartyId = this.params.get('paramInvPartyId');
        this.involvedPartyType = this.params.get('paramInvType');
    }

    ngOnInit() {
        let loader = this.loadingCtrl.create({
            content: 'Please wait...',
            //dismissOnPageChange: true
        });
        loader.present();

        //fetch data...
        if (this.involvedPartyType === InvolvedPartyType.Customer) {
            this.ipService.getDemandsOfInvolvedParty(this.involvedPartyId).finally(() => loader.dismiss())
                .subscribe(
                dms => this.checkResults(dms),
                error => this.setError(error)
                );
        } else {
            this.ipService.getDemandsOfAgent(this.involvedPartyId).finally(() => loader.dismiss())
                .subscribe(
                dms => this.checkResults(dms),
                error => this.setError(error)
                );
        }
    }

    checkResults(dm: Array<DemandModel>) {
        if (dm && dm.length > 0) {
            this.demands = dm;
        }
        else {
            this.setError('Not found')
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

    goToRoot() {
        this.navCtrl.popToRoot();
    }

}