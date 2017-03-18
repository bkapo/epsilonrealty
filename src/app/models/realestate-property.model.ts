import { PropertyModel } from '../models/propertyabstract.model';
import { InvolvepdPartyModel } from '../models/involved-party.model';

export class RealEstatePropertyModel extends PropertyModel {
    RealEstatePropertyId: number;

    //Owner
    OwnerId: number;
    Owner: InvolvepdPartyModel;

    SiteCode: string;
    Title: string;

    PriceSale: number;
    PriceRental: number;
    SqFeetInterior: number;
    SqfFeetLand: number;
    Year: number;

    //Geolocation
    GeoLat: string;
    GeoLong: string;
    YoutubeURL: string;
    UploadMapToRealEstatePortals: boolean;
}

