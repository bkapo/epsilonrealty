import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { MouseEvent } from 'angular2-google-maps/core'


@Component({
    templateUrl: 'realestate-property-map.component.html'
})
export class GoogleMapComponent {
    lat: number;
    lng: number;
    label: string;

    constructor(public params: NavParams, public viewCtrl: ViewController) {
        this.lat = params.get('lat');
        this.lng = params.get('lng');
        this.label = params.get('label');
    }

    markerDragEnd(m, $event: MouseEvent) {
        console.log('dragEnd', m, $event);
        this.lat = $event.coords.lat;
        this.lng = $event.coords.lng;
    }

    dismiss() {
        let data = {
            lat: this.lat,
            lng: this.lng
        }
        this.viewCtrl.dismiss(data);
    }

}