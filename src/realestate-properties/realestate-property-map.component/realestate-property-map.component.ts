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
    draggable: boolean = false;

    constructor(public params: NavParams, public viewCtrl: ViewController) {
        this.lat = params.get('lat');
        this.lng = params.get('lng');
        this.label = params.get('label');
        this.draggable = params.get('draggable');
    }

    markerDragEnd(m, $event: MouseEvent) {
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