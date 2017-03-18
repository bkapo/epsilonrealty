import { InvolvepdPartyModel } from '../models/involved-party.model';

export  class PropertyModel {

    //Responsible
    ResponsibleId: number;
    Responsible: InvolvepdPartyModel;

    //Proposed
    ProposedId: number;
    Proposed: InvolvepdPartyModel;
    
    //Category - Purpose
    PropertyCategory: PropertyCategory;
    Purpose: Purpose;

    //Type
    HousePropertyType: HousePropertyType;
    CommercialPropertyType: CommercialPropertyType;
    LandPropertyType: LandPropertyType;
    OtherPropertyType: OtherPropertyType;

    //Rooms
    Rooms: number;
    Bathrooms: number;
    WC: number;
    NoOfKitchen: number;
    FullBedrooms: number;
    HalfBedrooms: number;

    //Characteristics
    Access:Access;
    Levels: number;
    Floor: number;
    Orientation: Orientation;
    Renovated: boolean = false;
    NewConstruction: boolean = false;
    SemiOutdoorSpaces: number;
    LegalSemiOutdoorSpaces: number;
    EnergyPerformanceCertificates: boolean = false;
    Mortgage: boolean = false;
    HolidayHome: boolean = false;
    StoneHome: boolean = false;
    NeoClassicalHouse: boolean = false;
    TraditionalHouse: boolean = false;
    ListedBuildings: boolean = false;
    LuxuryHouse: boolean = false;
    Penthouse: boolean = false;
    Sight: boolean = false; //Θεα
    FrontView: boolean = false; //Πρόσοψης
    Investment: boolean = false; //Επενδυτικό
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
    Furnished: boolean;

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
    
    //Distances from key pos
    DistanceFromVillage: number;
    DistanceFromCity: number;
    DistanceFromSea: number;
    DistanceFromAirport: number;
    NearMetro: boolean;

    //Location
    LandZone: LandZone; //Ζώνη

    //Land//
    BuiltSurfaceRatio: number; //συντελεστής δόμησης  
    BuildingDensityFactor: number; //Συντελεστής κάλυψης
    BuildingFacade: number; //Μήκος πρόσοψης
    Inclination: number;
    UrbanPlanningZone: boolean = false; //Εντός σχεδίου πόλεως
    RuralDevelopment: boolean = false;  //Κατάλληλο για αγροτική χρήση
    Antiparoxi: boolean = false;

}

export enum PropertyCategory {
    'Κατοικία' = 1, 'Επαγγελματικό', 'Γη', 'Λοιπά'
}

export enum CommercialPropertyType {
    'Γραφείο' = 1, 'Κατάστημα', 'Αποθήκη', 'Βιομηχανικός χώρος', 'Βιοτεχνικός χώρος', 'Ξενοδοχείο', 'Κτήριο επαγγελματικών χώρων', 'Αίθουσα', 'Εκθεσιακός χώρος', 'Λοιπά'
}

export enum HousePropertyType {
    'Διαμέρισμα' = 1, 'Studio', 'Μεζονέτα', 'Μονοκατοικία', 'Villa', 'Loft', 'Bungalow', 'Κτίριο', 'Συγκρότημα διαμερισμάτων', 'Φάρμα', 'Πλωτό', 'Λοιπά'
}

export enum LandPropertyType {
    'Οικόπεδο' = 1, 'Αγροτεμάχιο', 'Νησί', 'Λοιπά'
}

export enum OtherPropertyType {
    'Parking' = 1, 'Επιχείρηση', 'Προκατασκευασμένο', 'Λυόμενο', 'Αέρας', 'Λοιπά'
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

export enum LandZone {
    'Οικιστική Ζώνη' = 1, 'Αγροτική', 'Εμπορική', 'Βιομηχανική', 'Ζώνη Ανάπλασης', 'Εκτός Σχεδίου'
}

export enum Orientation {
    'Ανατολικός' = 1, 'Ανατολικοδυτικός', 'Ανατολικομεσημβρινός', 'Βόρειος', 'Βορειοανατολικός', 'Βορειοδυτικός'
}

export enum EnergyPerformance {
    'Α+' = 1, 'Α', 'Β+', 'Β', 'Γ', 'Δ', 'Ε','Ζ','Η'
}

export enum Access {
    'Άσφαλτο' = 1, 'Πεζοδρόμιο', 'Πλακόστρωτο', 'Χωματόδρομο', 'Χωρίς Πρόσβαση', 'Θάλασσα', 'Αλλού'
}



