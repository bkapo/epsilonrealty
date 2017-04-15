import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login.component';

@NgModule({
    declarations: [
        LoginComponent],
    imports: [
        SharedModule,
        IonicPageModule.forChild(LoginComponent)],
	entryComponents: [
		LoginComponent
	]
})
export class LoginModule { }