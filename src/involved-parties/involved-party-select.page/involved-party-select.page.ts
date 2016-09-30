import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { IPService } from '../../core/involved-party.service'

@Component({
  templateUrl: 'involved-party-select.page.html'
})

export class InvolvedPartySelectComponent {
  people: Object;
  involvedPartyId: number;
  involvedPartyType: number;
  involvedPartyLastName: string;
  involvedPartySelectedId: number = 0;
  isLoading: boolean = false;
  errorMessage: string = '';
  notFound: string = '';

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
    this.people = null;
    this.errorMessage = '';
    this.notFound = '';

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
      people => this.people = people,
      error => error === 'Not found' ? this.notFound = 'Δεν βρέθηκαν αποτελέσματα...' : this.errorMessage = <any>error
      );
  } //end search

  selectIP(ip) {
    this.involvedPartySelectedId = ip.InvolvedPartyId;
    this.dismiss(ip);
  }

  onClear() {
    this.errorMessage = '';
    this.notFound = '';
    this.people = null;
  }

  dismiss(ip) {
    let data = {
      id: this.involvedPartyId,
      type: this.involvedPartyType,
      selectedId: this.involvedPartySelectedId
    }
    this.viewCtrl.dismiss(ip);
  }

} //end class