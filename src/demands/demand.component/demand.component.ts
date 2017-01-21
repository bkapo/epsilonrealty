import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { NavController, ModalController, ToastController, LoadingController } from 'ionic-angular';

import { IPService } from '../../core/involved-party.service';
import { DemandModel } from '../../app/models/demand.model';
import { ErrorModel, ErrorType } from '../../app/models/error.model';
import { InvolvedPartySelectComponent } from '../../involved-parties/involved-party-select.page/involved-party-select.page';
import { PropertyCategory, PropertyType } from '../../app/models/propertyabstract.model';
import { InvolvedPartyType } from '../../app/models/involved-party.model';

@Component({
    selector: 'rep-demand',
    templateUrl: 'demand.component.html'
})

export class DemandComponent implements OnInit {
    @Input() demand: DemandModel;
    demandform: FormGroup;
    demandSegment: string = 'Basic';
    responsibleFullName: string = 'Επιλέξτε';
    isLoading: boolean = false;
    errorObject: ErrorModel
    loading: any;
    pricerange: any = { lower: 100, upper: 2000 };
    sqfeetrange: any = { lower: 50, upper: 500 };
    yearange: any = { lower: 2000, upper: 2017 };
    customerFullName: string = 'Επιλέξτε';
    propCategories = PropertyCategory;
    propTypes = PropertyType;


    constructor(public fb: FormBuilder, public navCtrl: NavController, public modalCtrl: ModalController, public ipService: IPService,
        public toastController: ToastController, public loadingCtrl: LoadingController) {

    }

    ngOnInit() {
        if (this.demand.Customer) {
            this.customerFullName = this.demand.Customer.FirstName + ' ' + this.demand.Customer.LastName;
        }
        this.responsibleFullName = this.demand.DemandId ? (this.demand.Responsible.FirstName + ' ' + this.demand.Responsible.LastName) : 'Επιλέξτε';

        this.demandform = this.fb.group({
            DemandId: [this.demand.DemandId],
            UserId: [this.demand.UserId],
            CreatedDate: [this.demand.CreatedDate],
            ModifiedDate: [this.demand.ModifiedDate],
            Comments: [this.demand.Comments],

            PropertyCategory: [this.demand.PropertyCategory, Validators.required],
            PropertyType: [this.demand.PropertyType, Validators.required],
            Purpose: [this.demand.Purpose, Validators.required],

            PriceFrom: [this.demand.PriceFrom, Validators.required],
            PriceTo: [this.demand.PriceTo, Validators.required],
            SqFeetInteriorFrom: [this.demand.SqFeetInteriorFrom, Validators.required],
            SqFeetInteriorTo: [this.demand.SqFeetInteriorTo, Validators.required],

            SqfFeetLandFrom: [this.demand.SqfFeetLandFrom],
            SqfFeetLandTo: [this.demand.SqfFeetLandTo],
            YearFrom: [this.demand.YearFrom],
            YearTo: [this.demand.YearTo],

            Renovated: [this.demand.Renovated],
            NewConstruction: [this.demand.NewConstruction],
            Rooms: [this.demand.Rooms],
            NoOfKitchen: [this.demand.NoOfKitchen],
            FullBedrooms: [this.demand.FullBedrooms],
            HalfBedrooms: [this.demand.HalfBedrooms],
            SemiOutdoorSpaces: [this.demand.SemiOutdoorSpaces],
            LegalSemiOutdoorSpaces: [this.demand.LegalSemiOutdoorSpaces],
            Levels: [this.demand.Levels],
            FirePlaces: [this.demand.FirePlaces],
            EnergyPerformanceCertificates: [this.demand.EnergyPerformanceCertificates],
            Mortgage: [this.demand.Mortgage],
            HolidayHome: [this.demand.HolidayHome],
            StoneHome: [this.demand.StoneHome],
            NeoClassicalHouse: [this.demand.NeoClassicalHouse],
            TraditionalHouse: [this.demand.TraditionalHouse],
            ListedBuildings: [this.demand.ListedBuildings],
            LuxuryHouse: [this.demand.LuxuryHouse],
            Penthouse: [this.demand.Penthouse],

            // Parking
            Parkings: [this.demand.Parkings],
            ClosedParking: [this.demand.ClosedParking],
            HeatedParking: [this.demand.HeatedParking],

            // Additional Rooms
            Basement: [this.demand.Basement],
            FitnessRoom: [this.demand.FitnessRoom],
            HomeTheatre: [this.demand.HomeTheatre],
            Library: [this.demand.Library],
            Spa: [this.demand.Spa],
            WineCellar: [this.demand.WineCellar],
            GuestSuite: [this.demand.GuestSuite],
            HomeOffice: [this.demand.HomeOffice],
            Attic: [this.demand.Attic],

            // Heating
            AC: [this.demand.AC],
            SolarHeating: [this.demand.SolarHeating],
            FloorHeating: [this.demand.FloorHeating],
            Boiler: [this.demand.Boiler],

            // Security
            SafetyDoor: [this.demand.SafetyDoor],
            Alarm: [this.demand.Alarm],
            SafetyDepositBox: [this.demand.SafetyDepositBox],
            VideoDoorPhone: [this.demand.VideoDoorPhone],

            // Other
            Terraces: [this.demand.Terraces],
            InternalStairs: [this.demand.InternalStairs],
            Corner: [this.demand.Corner],
            IndoorBBQ: [this.demand.IndoorBBQ],
            Elevator: [this.demand.Elevator],
            SatteliteTV: [this.demand.SatteliteTV],
            DoubleWindows: [this.demand.DoubleWindows],
            TripleWindows: [this.demand.TripleWindows],
            Internet: [this.demand.Internet],
            AnimalFriendly: [this.demand.AnimalFriendly],
            StudentsHousing: [this.demand.StudentsHousing],
            WithoutCharges: [this.demand.WithoutCharges],

            // Surrounding Area
            SportField: [this.demand.SportField],
            Grass: [this.demand.Grass],
            Trees: [this.demand.Trees],
            OutdoorPool: [this.demand.OutdoorPool],
            OutdoorPoolHeated: [this.demand.OutdoorPoolHeated],
            IndoorPool: [this.demand.IndoorPool],
            IndoorPoolHeated: [this.demand.IndoorPoolHeated],
            Garden: [this.demand.Garden],
            OutdoorBBQ: [this.demand.OutdoorBBQ],
            ElectronicGates: [this.demand.ElectronicGates],
            AutomaticWatering: [this.demand.AutomaticWatering],

            // Customer
            CustomerId: [this.demand.CustomerId],
            Customer: [this.demand.Customer],

        });
    }

    updateRanges(e) {
        this.demandform.value.PriceFrom = this.pricerange.lower;
        this.demandform.value.PriceTo = this.pricerange.upper;
        this.demandform.value.SqFeetInteriorFrom = this.sqfeetrange.lower;
        this.demandform.value.SqFeetInteriorTo = this.sqfeetrange.upper;
        this.demandform.value.YearFrom = this.yearange.lower;
        this.demandform.value.YearTo = this.yearange.upper;
        console.log(this.demandform.value);
        console.log(this.demandform.valid);
    }

    selectBroker() {
        this.setInvolvedParty(InvolvedPartyType.Agent, '');
    }

    selectCustomer() {
        this.setInvolvedParty(InvolvedPartyType.Customer, '');

    }

    setInvolvedParty(typeId: number, name: string) {
        let selectModal = this.modalCtrl.create(InvolvedPartySelectComponent, {
            id: 0,
            type: typeId,
            name: name
        });

        selectModal.onDidDismiss(data => {
            if (typeId === InvolvedPartyType.Customer) {
                this.demandform.value.CustomerId = data.InvolvedPartyId;
                this.demandform.value.Customer = data;
                this.customerFullName = data.FirstName + ' ' + data.LastName;
            } else {
                this.demandform.value.ResponsibleId = data.ResponsibleId;
                this.demandform.value.Responsible = data;
                this.responsibleFullName = data.FirstName + ' ' + data.LastName;
            }
            console.log(this.demandform.value);
        });

        selectModal.present();
    }// end setInvolvedParty


    onSubmit(value: string): void {
        this.errorObject = null;

        let loader = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        loader.present();

        console.log('you submitted value: ', value);
        this.ipService
            .saveDeamndOfInvolvedParty(this.demandform.value.CustomerId, this.demandform.value.DemandId, this.demandform.value)
            .subscribe(
            updatedDM => this.demandUpdated(updatedDM),
            error => this.setError(error)
            );
    }

    demandUpdated(dm) {
        this.presentToast('Updated succesfully');
        this.navCtrl.popToRoot();
    }

    presentToast(msg: any) {
        let toast = this.toastController.create({
            message: msg.toString(),
            duration: 2000,
            position: 'top'
        });
        toast.present();
    }

    setError(err) {
        if (err === 'Not found') {
            this.errorObject = new ErrorModel(ErrorType.NotFound, 'Δεν βρέθηκαν αποτελέσματα...', '');
            console.log(this.errorObject);
        } else {
            this.errorObject = new ErrorModel(ErrorType.Error, err, '');
        }
    }
}