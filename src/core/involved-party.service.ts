import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { INVOLVEDPARTY_API_URL } from './data.service'
import { InvolvepdPartyModel } from '../app/models/involved-party.model';
import { DemandModel } from '../app/models/demand.model'

@Injectable()
export class IPService {

    REST_API_URL: string = INVOLVEDPARTY_API_URL;

    constructor(public http: Http) {
        this.http = http;
    }

    searchInolvedPartyByTypeAndLastName(typeid: number, name: string): Observable<InvolvepdPartyModel[]> {
        let url = this.REST_API_URL + '/GetByTypeAndName/' + typeid + '/' + name;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getInvolvedPartyByType(typeId: number): Observable<InvolvepdPartyModel[]> {
        let url = this.REST_API_URL + '/GetByType/' + typeId;
        return this.http.get(url)
            .map(res => res.json())
            .catch(this.handleError);
    }

    addInvolvedParty(ip): Observable<InvolvepdPartyModel> {
        let body = JSON.stringify(ip);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.REST_API_URL, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    updateInvolvedParty(ip): Observable<InvolvepdPartyModel> {
        let url = this.REST_API_URL + '/' + ip.InvolvedPartyId;
        let body = JSON.stringify(ip);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(url, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    getDemandsOfInvolvedParty(ipid: number): Observable<DemandModel[]> {
        let url = this.REST_API_URL + '/' + ipid + '/Demand/';
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }


  saveDeamndOfInvolvedParty(ipid: number, dmid: number, dm: DemandModel): Observable<DemandModel> {
    // If we're updating an existing demand
    if (dm.DemandId) {

        let url = this.REST_API_URL + '/' + ipid  + '/Demand/' + dmid;
        let body = JSON.stringify(dm);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(url, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    // Otherwise, create a new article
    } else {
    //   return this.apiService.post('/articles/', {article: article})
    //          .map(data => data.article);
    }
  }


    /**
     * Data helper method
     * Check for bad response
     * parse the response data into JSON object
     */
    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        } else if (res.status === 204) {
            return [{ status: res.status, json: null }];
        }

        let body = res.json();
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

