import { Component, Input } from '@angular/core';

@Component({
    selector: 'list-errors',
    templateUrl: './list-errors.component.html'
})
export class ListErrorsComponent {
    @Input() errorObject: string;
    constructor() {
    }

}