import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class Blobservice {
    images:ReplaySubject<any> = new ReplaySubject();
    //images: Subject<string[]>;
    imagelist: Array<string> = new Array<string>();

    constructor(public http: Http) {
        this.http = http;

        this.imagelist.push('../assets/img/re1.jpeg');
        this.imagelist.push('../assets/img/re2.jpeg');
        this.imagelist.push('../assets/img/re3.jpeg');
        this.imagelist.push('../assets/img/re4.jpeg');

        this.images.next(this.imagelist);
        console.log(this.imagelist);

    }
   


    getImagesOfProperty(propertyId: number): Observable< Array<string>> {
        // let url = this.REST_API_URL + '/GetByType/' + typeId;
        // return this.http.get(url)
        //     .map(res => res.json())
        //     .catch(this.handleError);
        //console.log(this.images);
        return this.images;
        //return  this.images.asObservable();
    }

}