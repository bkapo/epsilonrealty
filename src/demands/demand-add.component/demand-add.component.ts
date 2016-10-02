import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

import { DemandModel } from '../../app/models/demand.model';

@Component({
  templateUrl: 'demand-add.component.html'
})
export class DemandAddComponent {
    params: any;
    demandobj: DemandModel;
    
  constructor(public nav: NavController, navParams: NavParams) {
        this.nav = nav;
        this.params = navParams;
        this.demandobj = this.params.get('paramDemand');
        console.log(this.demandobj);
  }

}