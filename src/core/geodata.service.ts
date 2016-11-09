import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { ESTATEPROPERTIES_API_URL } from './data.service'

@Injectable()
export class GeoDataService {

    REST_API_URL: string = ESTATEPROPERTIES_API_URL;

    constructor(public http: Http) {
        this.http = http;
    }

    getCountries() {
        return [
            new Country(1, 'Greece'),
            new Country(2, 'Cyprus'),
        ];
    }

    getPeriferies() {
        return [
            new Periferia(102, 1, 'Αττική'),
            new Periferia(111, 1, 'Πελοπόννησος'),
            new Periferia(112, 1, 'Στερεά Ελλάδα')
        ];
    }

    getPeriferiakesEnoties() {
        return [
            new PeriferiakiEnotita(10201, 102, 'Αθήνα Κέντρο'),
            new PeriferiakiEnotita(10203, 102, 'Αθήνα Βόρεια'),
            new PeriferiakiEnotita(10202, 102, 'Αθήνα Νότια'),
            new PeriferiakiEnotita(10205, 102, 'Ανατολική Αττική'),
            new PeriferiakiEnotita(11113, 111, 'Ν. Αργολίδας'),
            new PeriferiakiEnotita(11116, 111, 'Ν. Αχαϊας'),
            new PeriferiakiEnotita(11145, 111, 'Ν. Μεσσηνίας'),
            new PeriferiakiEnotita(11212, 112, 'Ν. Αιτωλοακαρνανίας'),
            new PeriferiakiEnotita(11222, 112, 'Ν. Εύβοιας'),
            new PeriferiakiEnotita(11223, 112, 'Ν. Ευρυτανίας')
        ];
    }

    getDimous() {
        return [
            new Dimos(1020102, 10201, 'Αθήνα'),
            new Dimos(1020106, 10201, 'Ζωγράφος'),
            new Dimos(1020309, 10203, 'Αγία Παρασκευή'),
            new Dimos(1020308, 10203, 'Χαλάνδρι'),
            new Dimos(1111315, 11113, 'Επίδαυρος'),
            new Dimos(1111301, 11113, 'Ναύπλιο'),
            new Dimos(1111601, 11116, 'Πάτρα'),
            new Dimos(1121217, 11212, 'Ναύπακτος')
        ];
    }

}

export class Country {
    constructor(public countryid: number, public name: string) { }
}

//Periferia
export class Periferia {
    constructor(public periferiaid: number, public countryid: number, public name: string) { }
}

//Periferiaki Enotita --Nomos
export class PeriferiakiEnotita {
    constructor(public periferiakienotiaid: number, public periferiaid: number, public name: string) { }
}

//Dimos
export class Dimos {
    constructor(public dimosid: number, public periferiakienotiaid: number, public name: string) { }
}
