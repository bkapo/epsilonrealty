import { PropertyModel } from '../models/propertyabstract.model';
import { InvolvepdPartyModel } from '../models/involved-party.model';

export class DemandModel extends PropertyModel {
    DemandId: number;
    UserId: string;
    CreatedDate: Date;
    ModifiedDate: Date;
    Comments: string;

    PriceFrom: number;
    PriceTo: number;
    SqFeetInteriorFrom: number;
    SqFeetInteriorTo: number;
    SqfFeetLandFrom: number;
    SqfFeetLandTo: number;
    YearFrom: number;
    YearTo: number;

    //Customer
    CustomerId: number;
    Customer: InvolvepdPartyModel;

    //Agent-Broker responsible
    ResponsibleId: number;
    Responsible: InvolvepdPartyModel;

}