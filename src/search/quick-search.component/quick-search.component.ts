import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';



@IonicPage({
    name: 'quicksearch-component',
    segment: 'quicksearch',
    priority: 'high'
})
@Component({
    templateUrl: 'quick-search.component.html',
})
export class QuickSearchComponent {

    constructor() {

    }
}