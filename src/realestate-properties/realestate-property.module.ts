import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { RealestatePropertyCardComponent } from './realestate-property-card.component/realestate-property-card.component/';
import { RealEstatePropertyComponent } from './realestate-property.component/realestate-property.component';
import { RealEstatePropertyEditPage } from './realestate-property-edit.page/realestate-property-edit.page';
import { RealEstatePropertyAddPage } from '../realestate-properties/realestate-property-add.page/realestate-property-add.page';


@NgModule({
    imports: [SharedModule],
    declarations: [RealEstatePropertyComponent, RealEstatePropertyComponent, RealestatePropertyCardComponent,
                    RealEstatePropertyAddPage, RealEstatePropertyEditPage],
    exports: [RealEstatePropertyComponent, RealEstatePropertyComponent, RealestatePropertyCardComponent,
                    RealEstatePropertyAddPage, RealEstatePropertyEditPage],
    providers: []
})
export class RealEstatePropertyModule { }