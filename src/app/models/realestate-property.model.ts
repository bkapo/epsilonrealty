import { PropertyModel } from '../models/propertyabstract.model';

export class RealEstatePropertyModel extends PropertyModel {
    RealEstatePropertyId: number;
    SiteCode: string;
    Title: string;

    Price: number;
    SqFeetInterior: number;
    SqfFeetLand: number;
    Year: number;

    //Map
    YoutubeURL: string;
    UploadMapToRealEstatePortals: boolean;

}

