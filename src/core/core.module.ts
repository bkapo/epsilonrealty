import {
    ModuleWithProviders, NgModule,
    Optional, SkipSelf, ErrorHandler
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicErrorHandler } from 'ionic-angular';

import { LoginPage } from './login.page/login.page'

import { IPService } from './involved-party.service'
import { REPService } from './realestate-property.service'
import { Blobservice } from './blob.service'
import { GeoDataService } from './geodata.service'

@NgModule({
    imports: [
        CommonModule,
        IonicModule.forRoot(LoginPage)],
    declarations: [LoginPage],
    exports: [LoginPage],
    providers: [IPService, REPService, Blobservice, GeoDataService, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class CoreModule {

    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: []
        };
    }
}