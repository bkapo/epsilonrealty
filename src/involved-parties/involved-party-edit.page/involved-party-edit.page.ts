import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { InvolvepdPartyModel } from '../../app/models/involved-party.model';

@Component({
  templateUrl: 'involved-party-edit.page.html'
})
export class InvolvedPartyEditPage {
  params: any;
  involvedpartyobj: InvolvepdPartyModel;

  constructor(public nav: NavController, navParams: NavParams) {
    this.nav = nav;
    this.params = navParams;
    this.involvedpartyobj = this.params.get('paramInvParty');
    console.log(this.involvedpartyobj);
  }
}
