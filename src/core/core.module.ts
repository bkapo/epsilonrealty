import {
    ModuleWithProviders, NgModule,
    Optional, SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { SearchBarComponent } from './searchbar.component/searchbar.component/';

import { IPService } from './involved-party.service'
import { REPService } from './realestate-property.service'

@NgModule({
    imports: [CommonModule,
        IonicModule.forRoot(SearchBarComponent)],
    declarations: [SearchBarComponent],
    exports: [SearchBarComponent],
    providers: [IPService, REPService]
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