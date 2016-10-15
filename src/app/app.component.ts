import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { LoginPage } from '../core/login.page/login.page';
import { SearchBarComponent } from '../search/searchbar.component/searchbar.component'
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
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  appPages: PageObj[] = [
    { title: 'Home', component: SearchBarComponent, icon: 'bookmark' },
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
      StatusBar.styleDefault();
    });
  }

  openPage(page: PageObj) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }


}
