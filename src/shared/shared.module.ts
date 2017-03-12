import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';

import { InvolvedPartyTypePipe } from './pipes/involved-party-type.pipe';
import { KeysPipe } from './pipes/keys.pipe';
import { PropertyCategoryPipe } from './pipes/property-category.pipe';
import { PropertyTypePipe } from './pipes/property-type.pipe';
import { PurposePipe } from './pipes/purpose.pipe';
import { HeatingCategoryPipe } from './pipes/heating-category.pipe';
import { HeatingTypePipe } from './pipes/heating-type.pipe';
import { LandTypePipe } from './pipes/land-type.pipe';
import { LandZonePipe } from './pipes/land-zone.pipe'
import { OrientationPipe } from './pipes/orientation.pipe';

import { ListErrorsComponent } from './list-errors.component/list-errors.component'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule.forRoot(InvolvedPartyTypePipe),
        IonicModule.forRoot(KeysPipe),
        IonicModule.forRoot(PropertyCategoryPipe),
        IonicModule.forRoot(PropertyTypePipe),
        IonicModule.forRoot(PurposePipe),
        IonicModule.forRoot(HeatingCategoryPipe),
        IonicModule.forRoot(HeatingTypePipe),
        IonicModule.forRoot(LandTypePipe),
        IonicModule.forRoot(LandZonePipe),
        IonicModule.forRoot(OrientationPipe),
        IonicModule.forRoot(ListErrorsComponent)],
    declarations: [
        InvolvedPartyTypePipe,
        KeysPipe,
        PropertyCategoryPipe,
        PropertyTypePipe,
        PurposePipe,
        HeatingTypePipe,
        HeatingCategoryPipe,
        LandTypePipe,
        LandZonePipe,
        OrientationPipe,
        ListErrorsComponent],
    exports: [
        InvolvedPartyTypePipe,
        KeysPipe,
        PropertyCategoryPipe,
        PropertyTypePipe,
        PurposePipe,
        HeatingTypePipe,
        HeatingCategoryPipe,
        LandTypePipe,
        LandZonePipe,
        OrientationPipe,
        ListErrorsComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule]
})
export class SharedModule { }