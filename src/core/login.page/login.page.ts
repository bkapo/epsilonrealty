import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SearchBarComponent } from '../../search/searchbar.component/searchbar.component'

@Component({
    templateUrl: 'login.page.html',
})
export class LoginPage {
    constructor(public nav: NavController,) {
    }
    
    openPage() {
    this.nav.setRoot(SearchBarComponent);
  }

}
