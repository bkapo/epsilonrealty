import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';

import { InvolvedPartyComponent } from './involved-party.component/involved-party.component';
import { InvolvedPartyAddPage } from './involved-party-add.page/involved-party-add.page';
import { InvolvedPartyEditPage } from './involved-party-edit.page/involved-party-edit.page';
import { InvolvedPartySelectComponent } from '../involved-parties/involved-party-select.page/involved-party-select.page';
import { InvolvedPartyCardComponent } from './involved-party-card.component/involved-party-card.component';


@NgModule({
    imports: [
                SharedModule,
                IonicModule.forRoot(InvolvedPartyComponent), 
                IonicModule.forRoot(InvolvedPartyAddPage), 
                IonicModule.forRoot(InvolvedPartyEditPage),
                IonicModule.forRoot(InvolvedPartySelectComponent), 
                IonicModule.forRoot(InvolvedPartyCardComponent) ],
    declarations: [
                InvolvedPartyComponent, 
                InvolvedPartyAddPage, 
                InvolvedPartyEditPage,
                InvolvedPartySelectComponent, 
                InvolvedPartyCardComponent ],
    exports: [
                InvolvedPartyComponent, 
                InvolvedPartyAddPage, 
                InvolvedPartyEditPage,
                InvolvedPartySelectComponent, 
                InvolvedPartyCardComponent ],
    providers: []
})
export class InvolvedPartyModule { }