import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';

import { SearchComponent } from '../search/searchbar.component/searchbar.component'
import { InvolvedpartiesListPage } from '../involved-parties/involvedparties-list.page/involvedparties-list.page'

export interface PageObj {
  title: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
}


@Component({
  templateUrl: 'app.html'
})
export class RealtyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'login-page';
  appPages: PageObj[] = [
    { title: 'Search', component: SearchComponent, icon: 'search' },
    { title: 'Μεσίτες', component: InvolvedpartiesListPage, index: 1, icon: 'people' }
  ];

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //StatusBar.styleDefault();
    });
  }

  openPage(page: PageObj) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }


}
