import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RealEstatePropertyModel } from '../../app/models/realestate-property.model'


@Component({
    templateUrl: 'realestate-property-edit.page.html'
})

export class  RealEstatePropertyEditPage {
    params: any;
    estatepropertyobj: RealEstatePropertyModel;
    
    constructor(public nav: NavController, navParams: NavParams) {
        this.nav = nav;
        this.params = navParams;
        this.estatepropertyobj = this.params.get('paramEstate');
    }
}