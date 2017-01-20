import { InvolvepdPartyModel } from '../models/involved-party.model';

export abstract class PropertyModel {
    
    PropertyCategory: PropertyCategory;
    PropertyType: PropertyType;
    Purpose: Purpose;

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

    //For Rental
    RentStart: Date;
    RentEnd: Date;
    RentDamageDeposit: boolean;
    Furnished: boolean;

    //Distances from key pos
    Orientation: string;
    DistanceFromVillage: number;
    DistanceFromCity: number;
    DistanceFromSea: number;
    DistanceFromAirport: number;
    NearMetro: boolean;

    //Geolocation
    GeoLat: string;
    GeoLong: string;

    //Owner
    OwnerId: number;
    Owner: InvolvepdPartyModel;

    //Responsible
    ResponsibleId: number;
    Responsible: InvolvepdPartyModel;

    //Proposed
    ProposedId: number;
    Proposed: InvolvepdPartyModel;

}

export enum PropertyCategory {
    'Katoikia' = 1, 'Epagelmatiko', 'Oikopedo', 'Loipa'
}

export enum PropertyType {
    'Diamerisma' = 1, 'Villa', 'Gkarsoniera', 'Orofodiaerisma', 'DiamerismaDublex', 'Mezoneta',
    'Monokatoikia', 'Retire', 'Sigkrotima', 'Studio', 'Liomeno', 'Katastima', 'Ktirio', 'Aithousa',
    'ApothikeytikosXoros', 'BiomixanikosXoros', 'BiotexnikosXoros', 'Grafeio', 'Apothiki',
    'DiafimistikosXoros', 'EkthesiakosXoros', 'EpaggelmatikosXoros', 'KtirioParkings', 'Oikia',
    'OikopedoEpaggelmatiko', 'OrofodiaerismaEpaggelmatiko', 'Ektasi', 'Oikopedo', 'Agrotemaxio',
    'BiomixanikoOikopedo', 'Kthma', 'EpenditikoAkinito', 'Epixirisi', 'Nisi', 'Ksenodoxio', 'Polikatikia',
    'XorosStathmeysis', 'Loipa'
}

export enum Purpose {
    Rental = 1,
    Sale = 2,
    RentalOrSale = 3 
}