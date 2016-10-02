
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { InvolvepdPartyModel } from '../../app/models/involved-party.model';

@Component({
  templateUrl: 'involved-party-add.page.html'
})
export class InvolvedPartyAddPage {
    involvedpartyobj = new InvolvepdPartyModel();
    
  constructor(public nav: NavController) {
        this.nav = nav;
        this.involvedpartyobj.InvolvedPartyId = 0;
  }

}
