import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';

import { InvolvedPartyTypePipe } from './pipes/involved-party-type.pipe';
import { KeysPipe } from './pipes/keys.pipe';
import { PropertyCategoryPipe } from './pipes/property-category.pipe';
import { PropertyTypePipe } from './pipes/property-type.pipe';
import { PurposePipe } from './pipes/purpose.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule.forRoot(InvolvedPartyTypePipe),
        IonicModule.forRoot(KeysPipe),
        IonicModule.forRoot(PropertyCategoryPipe),
        IonicModule.forRoot(PropertyTypePipe),
        IonicModule.forRoot(PurposePipe)],
    declarations: [
        InvolvedPartyTypePipe,
        KeysPipe,
        PropertyCategoryPipe,
        PropertyTypePipe,
        PurposePipe],
    exports: [
        InvolvedPartyTypePipe, KeysPipe, PropertyCategoryPipe,
        PropertyTypePipe, PurposePipe,
        CommonModule, FormsModule]
})
export class SharedModule { }