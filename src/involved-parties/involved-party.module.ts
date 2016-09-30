import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { InvolvedPartyComponent } from './involved-party.component/involved-party.component';
import { InvolvedPartyAddPage } from './involved-party-add.page/involved-party-add.page';
import { InvolvedPartyEditPage } from './involved-party-edit.page/involved-party-edit.page';
import { InvolvedPartySelectComponent } from '../involved-parties/involved-party-select.page/involved-party-select.page';
import { InvolvedPartyCardComponent } from './involved-party-card.component/involved-party-card.component';


@NgModule({
    imports: [SharedModule],
    declarations: [InvolvedPartyComponent, InvolvedPartyAddPage, InvolvedPartyEditPage,
                    InvolvedPartySelectComponent, InvolvedPartyCardComponent],
    exports: [InvolvedPartyComponent, InvolvedPartyAddPage, InvolvedPartyEditPage,
                InvolvedPartySelectComponent, InvolvedPartyCardComponent],
    providers: []
})
export class InvolvedPartyModule { }