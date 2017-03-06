import { PropertyModel } from '../models/propertyabstract.model';

export class RealEstatePropertyModel extends PropertyModel {
    RealEstatePropertyId: number;
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

