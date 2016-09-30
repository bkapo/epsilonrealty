import { InvolvepdPartyModel } from '../models/involved-party.model';
import { PropertyCategory, PropertyType, Purpose } from '../models/realestate-property.model';

export class DemandModel {
    DemandId: number;
    UserId: string;
    CreatedDate: Date;
    ModifiedDate: Date;
    Comments: string;

    PropertyCategory: PropertyCategory;
    PropertyType: PropertyType;
    Purpose: Purpose;

    PriceFrom: number;
    PriceTo: number;
    SqFeetInteriorFrom: number;
    SqFeetInteriorTo: number;

    SqfFeetLand: number;
    Year: number;
    Renovated: boolean;
    NewConstruction: boolean;
    Rooms: number;
    NoOfKitchen: number;
    FullBedrooms: number;
    HalfBedrooms: number;
    SemiOutdoorSpaces: number;
    LegalSemiOutdoorSpaces: number;
    Levels: number;
    FirePlaces: number;
    EnergyPerformanceCertificates: boolean;
    Mortgage: boolean;
    HolidayHome: boolean;
    StoneHome: boolean;
    NeoClassicalHouse: boolean;
    TraditionalHouse: boolean;
    ListedBuildings: boolean;
    LuxuryHouse: boolean;
    Penthouse: boolean;

    //Parking
    Parkings: number;
    ClosedParking: boolean;
    HeatedParking: boolean;

    //Additional Rooms
    Basement: boolean;
    FitnessRoom: boolean;
    HomeTheatre: boolean;
    Library: boolean;
    Spa: boolean;
    WineCellar: boolean;
    GuestSuite: boolean;
    HomeOffice: boolean;
    Attic: boolean;

    //Heating
    AC: boolean;
    SolarHeating: boolean;
    FloorHeating: boolean;
    Boiler: boolean;

    //Security
    SafetyDoor: boolean;
    Alarm: boolean;
    SafetyDepositBox: boolean;
    VideoDoorPhone: boolean;

    //Other
    Terraces: boolean;
    InternalStairs: boolean;
    Corner: boolean;
    IndoorBBQ: boolean;
    Elevator: boolean;
    SatteliteTV: boolean;
    DoubleWindows: boolean;
    TripleWindows: boolean;
    Internet: boolean;
    AnimalFriendly: boolean;
    StudentsHousing: boolean;
    WithoutCharges: boolean;

    //Surrounding Area
    SportField: boolean;
    Grass: boolean;
    Trees: boolean;
    OutdoorPool: boolean;
    OutdoorPoolHeated: boolean;
    IndoorPool: boolean;
    IndoorPoolHeated: boolean;
    Garden: boolean;
    OutdoorBBQ: boolean;
    ElectronicGates: boolean;
    AutomaticWatering: boolean;

    //Customer
    CustomerId: number;
    Customer: InvolvepdPartyModel;

}