import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { LoginPage } from '../core/login.page/login.page';
import { SearchBarComponent } from '../core/searchbar.component/searchbar.component'
import { InvolvedpartiesListPage } from '../involved-parties/involvedparties-list.page/involvedparties-list.page'

import { DemandModel } from './models/demand.model';
import { InvolvepdPartyModel } from './models/involved-party.model';
import { RealEstatePropertyModel } from './models/realestate-property.model';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  pages: Array<{ title: string, component: any, icon: string }>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {

    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component: SearchBarComponent, icon: 'bookmark' },
      { title: 'Brokers', component: InvolvedpartiesListPage, icon: 'people' },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }


}
