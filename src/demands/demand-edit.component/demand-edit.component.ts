import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

import { DemandModel } from '../../app/models/demand.model';

@Component({
  templateUrl: 'demand-edit.component.html'
})
export class DemandEditComponent {
    params: any;
    demandobj: DemandModel;
    
  constructor(public nav: NavController, navParams: NavParams) {
        this.nav = nav;
        this.params = navParams;
        this.demandobj = this.params.get('paramDemand');
        console.log(this.demandobj);
  }

}