import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RealEstatePropertyModel } from '../../app/models/realestate-property.model'
import { PropertyCategory } from '../../app/models/propertyabstract.model.ts'

@Component({
    templateUrl: 'realestate-property-add.page.html'
})

export class  RealEstatePropertyAddPage {
    params: any;
    estatepropertyobj: RealEstatePropertyModel;
    propertyCategory = PropertyCategory;

    
    constructor(public nav: NavController, navParams: NavParams) {
        this.nav = nav;
        this.params = navParams;
        this.estatepropertyobj = this.params.get('paramEstate');
        this.propertyCategory  = this.estatepropertyobj .PropertyCategory;
    }
}