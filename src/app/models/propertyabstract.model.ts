import { InvolvepdPartyModel } from '../models/involved-party.model';

export  class PropertyModel {

    //Owner
    OwnerId: number;
    Owner: InvolvepdPartyModel;

    //Responsible
    ResponsibleId: number;
    Responsible: InvolvepdPartyModel;

    //Proposed
    ProposedId: number;
    Proposed: InvolvepdPartyModel;
    
    //Category - Purpose
    PropertyCategory: PropertyCategory;
    PropertyType: PropertyType;
    Purpose: Purpose;

    Renovated: boolean = false;
    NewConstruction: boolean = false;
    Rooms: number;
    NoOfKitchen: number;
    FullBedrooms: number;
    HalfBedrooms: number;
    SemiOutdoorSpaces: number;
    LegalSemiOutdoorSpaces: number;
    Levels: number;
    EnergyPerformanceCertificates: boolean = false;
    Mortgage: boolean = false;
    HolidayHome: boolean = false;
    StoneHome: boolean = false;
    NeoClassicalHouse: boolean = false;
    TraditionalHouse: boolean = false;
    ListedBuildings: boolean = false;
    LuxuryHouse: boolean = false;
    Penthouse: boolean = false;

    //Parking
    Parkings: number;
    ClosedParking: boolean = false;
    HeatedParking: boolean = false;

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
    HeatingCategory: HeatingCategory;
    HeatingType: HeatingType;
    AC: boolean;
    SolarHeating: boolean;
    FloorHeating: boolean;
    Boiler: boolean;
    FirePlaces: boolean;

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

}

export enum PropertyCategory {
    'Κατοικία' = 1, 'Επαγγελματικό', 'Γη', 'Λοιπά'
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

export enum HeatingCategory {
    'Αυτόνομη' = 1, 'Κεντιρκή', 'Χωρίς'
}

export enum HeatingType {
    'Πετρέλαιο' = 1, 'Φυσικό Αέριο', 'Υγραέριο', 'Ρεύμα', 'Σόμπα', 'Θερμοσυσσωρευτής', 'Pallet', 'Υπέρυθρες', 'Fan Coil', 'Ξύλα', 'Τηλεθέρμανση', 'Γεωθερμική'
}

export enum Purpose {
    Ενοικίαση = 1,
    Πώληση = 2,
    "Ενοικίαση & Πώληση" = 3 
}