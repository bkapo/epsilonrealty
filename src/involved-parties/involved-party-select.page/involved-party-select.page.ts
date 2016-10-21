import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { ErrorModel, ErrorType } from '../../app/models/error.model'
import { InvolvepdPartyModel } from '../../app/models/involved-party.model'
import { IPService } from '../../core/involved-party.service'

@Component({
  templateUrl: 'involved-party-select.page.html'
})

export class InvolvedPartySelectComponent {
  invPartyList: Array<InvolvepdPartyModel>;
  involvedPartyId: number;
  involvedPartyType: number;
  involvedPartyLastName: string;
  involvedPartySelectedId: number = 0;
  isLoading: boolean = false;
  errorObject: ErrorModel

  constructor(public ipService: IPService, public params: NavParams, public viewCtrl: ViewController) {
    this.involvedPartyId = params.get('id');
    this.involvedPartyType = params.get('type');
    this.involvedPartyLastName = params.get('name');
  }

  /**
     * Search for .....
     */
  searchFor(ev: any) {
    this.isLoading = true;
    this.invPartyList = null;
    this.errorObject = null;

    let q = ev.target.value;

    // if the value is an empty string don't search 
    if (!q || q.trim() === '') {
      this.isLoading = false;
      return;
    }

    this.ipService.searchInolvedPartyByTypeAndLastName(this.involvedPartyType, q).finally(() => this.isLoading = false)
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(
      (lst: InvolvepdPartyModel[]) => this.invPartyList = lst,
      error => this.setError(error)
      );
  } //end search

  selectIP(ip) {
    this.involvedPartySelectedId = ip.InvolvedPartyId;
    this.dismiss(ip);
  }

  onClear() {
    this.errorObject = null;
    this.invPartyList = null;
  }

  dismiss(ip) {
    let data = {
      id: this.involvedPartyId,
      type: this.involvedPartyType,
      selectedId: this.involvedPartySelectedId
    }
    this.viewCtrl.dismiss(ip);
  }

  setError(err) {
    if (err === 'Not found') {
      this.errorObject = new ErrorModel(ErrorType.NotFound, 'Δεν βρέθηκαν αποτελέσματα...', '');
      console.log(this.errorObject);
    } else {
      this.errorObject = new ErrorModel(ErrorType.Error, err, '');
    }
  }

} //end class