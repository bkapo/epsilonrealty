import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RealEstatePropertyModel } from '../../shared/models/realestate-property.model'

@Component({
    templateUrl: 'realestate-property-add.page.html'
})

export class  RealEstatePropertyAddPage {
    params: any;
    estatepropertyobj: RealEstatePropertyModel;
    
    constructor(public nav: NavController, navParams: NavParams) {
        this.nav = nav;
        this.params = navParams;
        this.estatepropertyobj = this.params.get('paramEstate');
    }
}