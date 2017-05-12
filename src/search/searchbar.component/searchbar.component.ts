import { Component } from '@angular/core';
import { NavController, FabContainer, IonicPage } from 'ionic-angular';

import { InvolvepdPartyModel, InvolvedPartyType } from '../../app/models/involved-party.model';
import { InvolvedPartyAddPage } from '../../involved-parties/involved-party-add.page/involved-party-add.page'
import { RealEstatePropertyModel } from '../../app/models/realestate-property.model'
import { PropertyCategory } from '../../app/models/propertyabstract.model'
import { RealEstatePropertyAddPage } from '../../realestate-properties/realestate-property-add.page/realestate-property-add.page';
import { DemandModel } from '../../app/models/demand.model'
import { DemandAddComponent } from '../../demands/demand-add.component/demand-add.component';
import { ErrorModel, ErrorType } from '../../app/models/error.model'

import { IPService } from '../../core/involved-party.service'
import { REPService } from '../../core/realestate-property.service'

@IonicPage({
    name: 'search-page',
    segment: 'search',
    priority: 'high'
})
@Component({
    templateUrl: 'searchbar.component.html',
})
export class SearchComponent {
    involvedparties: Array<InvolvepdPartyModel>;
    properties: Array<RealEstatePropertyModel>;
    newIP: InvolvepdPartyModel;
    newProp: RealEstatePropertyModel;
    newDm: DemandModel;
    errorObject: ErrorModel
    searchType: any = InvolvedPartyType[InvolvedPartyType.Customer];
    isLoading: boolean = false;

    constructor(public nav: NavController, public ipService: IPService, public repService: REPService) {

    }

    /**
     * Search for .....
     */
    onInput(ev: any) {
        this.isLoading = true;
        this.involvedparties = null;
        this.properties = null;
        this.errorObject = null;

        let q = ev.target.value;

        // if the value is an empty string don't search 
        if (!q || q.trim() === '') {
            this.isLoading = false;
            return;
        }

        let searchValue: string = InvolvedPartyType[InvolvedPartyType[this.searchType]];
        console.log(searchValue);
        if (searchValue === InvolvedPartyType[InvolvedPartyType.Agent]
            || searchValue === InvolvedPartyType[InvolvedPartyType.Collaborator]
            || searchValue === InvolvedPartyType[InvolvedPartyType.Contact]
            || searchValue === InvolvedPartyType[InvolvedPartyType.Customer]
            || searchValue === InvolvedPartyType[InvolvedPartyType.Owner]
        ) {
            this.ipService.searchInolvedPartyByLastName(q).finally(() => this.isLoading = false)
                .debounceTime(600)
                .distinctUntilChanged()
                .subscribe(
                (people: InvolvepdPartyModel[]) => this.involvedparties = people,
                error => this.setError(error)
                );
        } else {
            this.repService.searchForProperty(q).finally(() => this.isLoading = false)
                .debounceTime(600)
                .distinctUntilChanged()
                .subscribe(
                (lst: RealEstatePropertyModel[]) => this.properties = lst,
                error => this.setError(error)
                );
        }
    }

    setError(err) {
        if (err === 'Not found') {
            this.errorObject = new ErrorModel(ErrorType.NotFound, 'Δεν βρέθηκαν αποτελέσματα...', '');
            console.log(this.errorObject);
        } else {
            this.errorObject = new ErrorModel(ErrorType.Error, err, '');
        }
    }

    onClear() {
        this.errorObject = null;
        this.involvedparties = null;
        this.properties = null;
    }

    /**
     * Add new InvolvepdPartyModel
     */
    addIP() {
        this.nav.push(InvolvedPartyAddPage, {
        });
    }

    /**
     * Add RealEstatePropertyModel
     */
    addProperty(fab: FabContainer) {
        fab.close();
        this.newProp = new RealEstatePropertyModel;
        this.newProp.PropertyCategory = PropertyCategory.Κατοικία;
        this.nav.push(RealEstatePropertyAddPage, {
            paramEstate: this.newProp
        });
    }

    addCommercial(fab: FabContainer) {
        fab.close();
        this.newProp = new RealEstatePropertyModel;
        this.newProp.PropertyCategory = PropertyCategory.Επαγγελματικό;
        this.nav.push(RealEstatePropertyAddPage, {
            paramEstate: this.newProp
        });
    }

    addLand(fab: FabContainer) {
        fab.close();
        this.newProp = new RealEstatePropertyModel;
        this.newProp.PropertyCategory = PropertyCategory.Γη;
        this.nav.push(RealEstatePropertyAddPage, {
            paramEstate: this.newProp
        });
    }

    addOther(fab: FabContainer) {
        fab.close();
        this.newProp = new RealEstatePropertyModel;
        this.newProp.PropertyCategory = PropertyCategory.Λοιπά;
        this.nav.push(RealEstatePropertyAddPage, {
            paramEstate: this.newProp
        });
    }

    addDemand() {
        this.newDm = new DemandModel;
        this.nav.push(DemandAddComponent, {
            paramDemand: this.newDm
        });
    }
}

