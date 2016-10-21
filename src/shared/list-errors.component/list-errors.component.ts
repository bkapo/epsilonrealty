import { Component, Input } from '@angular/core';
import { ErrorModel } from '../../app/models/error.model'

@Component({
    selector: 'list-errors',
    templateUrl: './list-errors.component.html'
})
export class ListErrorsComponent {
    @Input() errorObject: ErrorModel
    constructor() {
        console.log(this.errorObject);
    }

}