import { Component, Input } from '@angular/core';
import { NavController, ItemSliding, ModalController } from 'ionic-angular';

import { RealEstatePropertyModel } from '../../app/models/realestate-property.model'
import { RealEstatePropertyEditPage } from '../../realestate-properties/realestate-property-edit.page/realestate-property-edit.page'
import { GoogleMapComponent } from '../realestate-property-map.component/realestate-property-map.component'

@Component({
    selector: 'realestate-property-card',
    templateUrl: 'realestate-property-card.component.html'
})

export class RealestatePropertyCardComponent {
    @Input() realEstate: RealEstatePropertyModel;

    constructor(public nav: NavController, public modalCtrl: ModalController) {
        this.nav = nav;
    }

    editProperty(property: RealEstatePropertyModel, slidingItem: ItemSliding) {
        slidingItem.close();
        this.nav.push(RealEstatePropertyEditPage, {
            paramEstate: property
        });
    }

    viewMap(property: RealEstatePropertyModel, slidingItem: ItemSliding) {
        slidingItem.close();

        let selectModal = this.modalCtrl.create(GoogleMapComponent, {
            lat: 38.007714,
            lng: 23.774580,
            label: property.Title,
            draggable: false
        });

        selectModal.present();
    }

}