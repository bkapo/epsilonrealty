import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { SearchComponent } from '../search/searchbar.component/searchbar.component'

@IonicPage({
    name: 'login-page',
    segment: 'login',
    priority: 'high'
})
@Component({
    templateUrl: 'login.component.html',
})
export class LoginComponent {
    constructor(public nav: NavController) {
    }
    
    openPage() {
    //this.nav.setRoot('search-page');
    this.nav.setRoot(SearchComponent);
  }

}
