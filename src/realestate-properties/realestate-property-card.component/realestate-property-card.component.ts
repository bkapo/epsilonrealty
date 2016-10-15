import { Component, Input } from '@angular/core';
import { NavController, ItemSliding } from 'ionic-angular';

import { RealEstatePropertyModel } from '../../app/models/realestate-property.model'
import { RealEstatePropertyEditPage } from '../../realestate-properties/realestate-property-edit.page/realestate-property-edit.page'

@Component({
    selector: 'realestate-property-card',
    templateUrl: 'realestate-property-card.component.html'
})

export class RealestatePropertyCardComponent {
    @Input() realEstate: RealEstatePropertyModel;

    constructor(public nav: NavController) {
        this.nav = nav;
    }

    editProperty(property: RealEstatePropertyModel, slidingItem: ItemSliding) {
        slidingItem.close();
        this.nav.push(RealEstatePropertyEditPage, {
            paramEstate: property
        });
    }

}