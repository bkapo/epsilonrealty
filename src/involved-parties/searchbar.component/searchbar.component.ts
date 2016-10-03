import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';

import { InvolvepdPartyModel, InvolvedPartyType } from '../../app/models/involved-party.model';
import { InvolvedPartyAddPage  } from '../../involved-parties/involved-party-add.page/involved-party-add.page'
import { RealEstatePropertyModel } from '../../app/models/realestate-property.model'
import { RealEstatePropertyAddPage } from '../../realestate-properties/realestate-property-add.page/realestate-property-add.page';
import { DemandModel } from '../../app/models/demand.model'
import { DemandAddComponent } from '../../demands/demand-add.component/demand-add.component';

import { IPService } from '../../core/involved-party.service'
import { REPService } from '../../core/realestate-property.service'


@Component({
    templateUrl: 'searchbar.component.html',
})
export class SearchBarComponent {
    public people: Object;
    property: any;
    searchType: any = InvolvedPartyType[InvolvedPartyType.Customer];
    newIP: InvolvepdPartyModel;
    newProp: RealEstatePropertyModel;
    newDm: DemandModel;
    isLoading: boolean = false;
    errorMessage: string = '';
    notFound: string = '';

    constructor(public nav: NavController , public actionSheetController: ActionSheetController, 
        public ipService: IPService, public repService: REPService) {
    }

    /**
     * Search for .....
     */
    onInput(ev: any) {
        this.isLoading = true;
        this.people = null;
        this.property = null;
        this.errorMessage = '';
        this.notFound = '';

        let q = ev.target.value;
        
        // if the value is an empty string don't search 
        if (!q || q.trim() === '') {
            this.isLoading = false;
            return;
        }
        let searchValue: string = InvolvedPartyType[InvolvedPartyType[this.searchType]];

        if (searchValue === InvolvedPartyType[InvolvedPartyType.Agent]
            || searchValue === InvolvedPartyType[InvolvedPartyType.Collaborator] 
            || searchValue === InvolvedPartyType[InvolvedPartyType.Contact]
            || searchValue === InvolvedPartyType[InvolvedPartyType.Customer] 
            || searchValue === InvolvedPartyType[InvolvedPartyType.Owner]
        ) {
            this.ipService.searchInolvedPartyByTypeAndLastName(this.searchType, q).finally(() => this.isLoading = false)
                .debounceTime(600)
                .distinctUntilChanged()
                .subscribe(
                people => this.people = people,
                error => error === 'Not found' ? this.notFound = 'Δεν βρέθηκαν αποτελέσματα...' : this.errorMessage = <any>error
                );
        } else {
            this.repService.searchForProperty(q).finally(() => this.isLoading = false)
                .debounceTime(600)
                .distinctUntilChanged()
                .subscribe(
                x => this.property = x,
                error => error === 'Not found' ? this.notFound = 'Δεν βρέθηκαν αποτελέσματα...' : this.errorMessage = <any>error
                );
                console.log(this.property);
        }
    }

    onClear() {
        this.errorMessage = '';
        this.notFound = '';
        this.people = null;
        this.property = null;
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
    addProperty() {
        this.newProp = new RealEstatePropertyModel;
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

    /**
     * ActionSheet Menu
     */
    openActionMenu() {
        let actionSheet = this.actionSheetController.create({
            title: 'RealEstate Office',
            buttons: [
                {
                    text: 'Νέος Πελάτης/Μεσίτης',
                    role: 'destructive',
                    //icon: !this.platform.is('ios') ? 'add' : null,
                    handler: () => {
                        this.addIP();
                    }
                },
                {
                    text: 'Νέο Ακίνητο',
                    role: 'destructive',
                    //icon: !this.platform.is('ios') ? 'add' : null,
                    handler: () => {
                        this.addProperty();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel', // will always sort to be on the bottom
                    //icon: !this.platform.is('ios') ? 'close' : null,
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();

    }
}

