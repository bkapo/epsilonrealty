import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { ESTATEPROPERTIES_API_URL } from './data.service'
import { DemandModel } from '../app/models/demand.model';
import { RealEstatePropertyModel } from '../app/models/realestate-property.model';

@Injectable()
export class REPService {

    REST_API_URL: string = ESTATEPROPERTIES_API_URL;

    constructor(public http: Http) {
        this.http = http;
    }

    /**
     * Search for real eastate property...(SiteCode or RealEstatePropertyId)
     */
    searchForProperty(src: string): Observable<RealEstatePropertyModel[]> {
        let url = this.REST_API_URL + '/search/' + src;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    demandMatching(dm: DemandModel): Observable<RealEstatePropertyModel[]> {
        let url = this.REST_API_URL + '/DemandMatching/';
        let body = JSON.stringify(dm);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    /**
 * Search for real eastate property...(RealEstatePropertyId)
 */
    getPropertybyid(id: number): Observable<RealEstatePropertyModel> {
        let url = this.REST_API_URL + '/' + id;
        return this.http.get(url)
            .map(this.extractData)
            // .map(responce => <Contact[]>responce.json())
            .catch(this.handleError);
    }

    addProperty(estateProp: RealEstatePropertyModel): Observable<RealEstatePropertyModel> {
        let body = JSON.stringify(estateProp);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.REST_API_URL, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    updateProperty(estateProp: RealEstatePropertyModel): Observable<RealEstatePropertyModel> {
        let url = this.REST_API_URL + '/' + estateProp.RealEstatePropertyId;
        let body = JSON.stringify(estateProp);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(url, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }


    /**
     * Data helper method
     * Check for bad response
     * parse the response data into JSON object
     */
    public extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        //console.log(body);
        return body || {};
    }


    /**
     * Error Handling
     */
    private handleError(error: Response) {
        console.error(error);
        if (error.status === 404) {
            return Observable.throw('Not found');
        } else {
            return Observable.throw(error.json().error || 'Server error');
        }

    }

}

