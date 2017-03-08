import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { ModalController, ToastController, LoadingController, NavController } from 'ionic-angular';

import { InvolvedPartySelectComponent } from '../../involved-parties/involved-party-select.page/involved-party-select.page'
import { RealEstatePropertyModel } from '../../app/models/realestate-property.model'
import { PropertyCategory, PropertyType, Purpose, HeatingCategory, HeatingType } from '../../app/models/propertyabstract.model'

import { InvolvepdPartyModel, InvolvedPartyType } from '../../app/models/involved-party.model'
import { ErrorModel, ErrorType } from '../../app/models/error.model'
import { REPService } from '../../core/realestate-property.service'
import { Blobservice } from '../../core/blob.service'
import { GeoDataService, Country, Periferia, PeriferiakiEnotita, Dimos } from '../../core/geodata.service'
import { GoogleMapComponent } from '../realestate-property-map.component/realestate-property-map.component'


@Component({
  selector: 'realestate-property',
  templateUrl: 'realestate-property.component.html'
})

export class RealEstatePropertyComponent implements OnInit {
  @Input() estateproperty: RealEstatePropertyModel;
  estateform: FormGroup;
  estateSegment: string = 'Basic';
  responsibleFullName: string = 'Επιλέξτε';
  ownerFullName: string = 'Επιλέξτε';
  propesedByFullName: string = 'Επιλέξτε';
  errorObject: ErrorModel;
  propCategories = PropertyCategory;
  propTypes = PropertyType;
  propPurpose = Purpose;
  heatingCategory = HeatingCategory;
  HeatingType = HeatingType;
  images: Array<string>;
  countries: Array<Country>;
  periferies: Array<Periferia>;
  periferiakesEnotites: Array<PeriferiakiEnotita>;
  dimoi: Array<Dimos>;


  constructor(public fb: FormBuilder, public navCtrl: NavController, public modalCtrl: ModalController, public toastController: ToastController,
    public loadingCtrl: LoadingController, public repService: REPService, public blobService: Blobservice, public geoDataService: GeoDataService) {
  }

  onSelectPeriferia(perifId) {
    this.periferiakesEnotites = this.geoDataService.getPeriferiakesEnoties().filter((item) => item.periferiaid == perifId);
    this.dimoi = this.geoDataService.getDimous().filter((i) => i.periferiakienotiaid == 0);
  }

  onSelectPeriferiakiEnotita(periferiakienotiaId) {
    this.dimoi = this.geoDataService.getDimous().filter((item) => item.periferiakienotiaid == periferiakienotiaId);
  }

  ngOnInit() {
    console.log(this.estateproperty);

    this.countries = this.geoDataService.getCountries();
    this.periferies = this.geoDataService.getPeriferies();
    this.periferiakesEnotites = this.geoDataService.getPeriferiakesEnoties().filter((i) => i.periferiaid == 0);
    this.dimoi = this.geoDataService.getDimous().filter((i) => i.periferiakienotiaid == 0);


    this.blobService.getImagesOfProperty(this.estateproperty.RealEstatePropertyId)
      .subscribe(
      (lst: Array<string>) => this.images = lst,
      error => this.setError(error)
      );

    this.responsibleFullName = this.estateproperty.ResponsibleId ? (this.estateproperty.Responsible.FirstName + ' ' + this.estateproperty.Responsible.LastName) : 'Επιλέξτε';
    this.ownerFullName = this.estateproperty.Owner ? (this.estateproperty.Owner.FirstName + ' ' + this.estateproperty.Owner.LastName) : 'Επιλέξτε';
    this.propesedByFullName = this.estateproperty.Proposed ? (this.estateproperty.Proposed.FirstName + ' ' + this.estateproperty.Proposed.LastName) : 'Επιλέξτε';

    this.buildForm();

  }

  buildForm(): void {
    this.estateform = this.fb.group({
      RealEstatePropertyId: [this.estateproperty.RealEstatePropertyId],

      //Responsible            
      ResponsibleId: [this.estateproperty.ResponsibleId, Validators.required],
      Responsible: [this.estateproperty.Responsible, Validators.required],

      //Owner
      OwnerId: [this.estateproperty.OwnerId, Validators.required],
      Owner: [this.estateproperty.Owner, Validators.required],

      //Proposed
      ProposedId: [this.estateproperty.ProposedId],
      Proposed: [this.estateproperty.Proposed],

      PropertyCategory: [this.estateproperty.PropertyCategory, Validators.required],
      PropertyType: [this.estateproperty.PropertyType, Validators.required],
      Purpose: [this.estateproperty.Purpose, Validators.required],

      SiteCode: [this.estateproperty.SiteCode],
      Title: [this.estateproperty.Title],
      PriceRental: [this.estateproperty.PriceRental],
      PriceSale: [this.estateproperty.PriceSale],
      SqFeeterior: [this.estateproperty.SqFeetInterior],
      SqfFeetLand: [this.estateproperty.SqfFeetLand],
      Year: [this.estateproperty.Year],

      Renovated: [this.estateproperty.Renovated],
      NewConstruction: [this.estateproperty.NewConstruction],
      Rooms: [this.estateproperty.Rooms],
      NoOfKitchen: [this.estateproperty.NoOfKitchen],
      FullBedrooms: [this.estateproperty.FullBedrooms],
      HalfBedrooms: [this.estateproperty.HalfBedrooms],
      SemiOutdoorSpaces: [this.estateproperty.SemiOutdoorSpaces],
      LegalSemiOutdoorSpaces: [this.estateproperty.LegalSemiOutdoorSpaces],
      Levels: [this.estateproperty.Levels],
      
      EnergyPerformanceCertificates: [this.estateproperty.EnergyPerformanceCertificates],
      Mortgage: [this.estateproperty.Mortgage],
      HolidayHome: [this.estateproperty.HolidayHome],
      StoneHome: [this.estateproperty.StoneHome],
      NeoClassicalHouse: [this.estateproperty.NeoClassicalHouse],
      TraditionalHouse: [this.estateproperty.TraditionalHouse],
      ListedBuildings: [this.estateproperty.ListedBuildings],
      LuxuryHouse: [this.estateproperty.LuxuryHouse],
      Penthouse: [this.estateproperty.Penthouse],

      //Parking
      Parkings: [this.estateproperty.Parkings],
      ClosedParking: [this.estateproperty.ClosedParking],
      HeatedParking: [this.estateproperty.HeatedParking],

      //Additional Rooms
      Basement: [this.estateproperty.Basement],
      FitnessRoom: [this.estateproperty.FitnessRoom],
      HomeTheatre: [this.estateproperty.HomeTheatre],
      Library: [this.estateproperty.Library],
      Spa: [this.estateproperty.Spa],
      WineCellar: [this.estateproperty.WineCellar],
      GuestSuite: [this.estateproperty.GuestSuite],
      HomeOffice: [this.estateproperty.HomeOffice],
      Attic: [this.estateproperty.Attic],

      //Heating
      HeatingCategory: [this.estateproperty.HeatingCategory, Validators.required],
      HeatingType: [this.estateproperty.HeatingType],
      AC: [this.estateproperty.AC],
      SolarHeating: [this.estateproperty.SolarHeating],
      FloorHeating: [this.estateproperty.FloorHeating],
      Boiler: [this.estateproperty.Boiler],
      FirePlaces: [this.estateproperty.FirePlaces],

      //Security
      SafetyDoor: [this.estateproperty.SafetyDoor],
      Alarm: [this.estateproperty.Alarm],
      SafetyDepositBox: [this.estateproperty.SafetyDepositBox],
      VideoDoorPhone: [this.estateproperty.VideoDoorPhone],

      //Other
      Terraces: [this.estateproperty.Terraces],
      InternalStairs: [this.estateproperty.InternalStairs],
      Corner: [this.estateproperty.Corner],
      IndoorBBQ: [this.estateproperty.IndoorBBQ],
      Elevator: [this.estateproperty.Elevator],
      SatteliteTV: [this.estateproperty.SatteliteTV],
      DoubleWindows: [this.estateproperty.DoubleWindows],
      TripleWindows: [this.estateproperty.TripleWindows],
      Internet: [this.estateproperty.Internet],
      AnimalFriendly: [this.estateproperty.AnimalFriendly],
      StudentsHousing: [this.estateproperty.StudentsHousing],
      WithoutCharges: [this.estateproperty.WithoutCharges],

      //Surrounding Area
      SportField: [this.estateproperty.SportField],
      Grass: [this.estateproperty.Grass],
      Trees: [this.estateproperty.Trees],
      OutdoorPool: [this.estateproperty.OutdoorPool],
      OutdoorPoolHeated: [this.estateproperty.OutdoorPoolHeated],
      IndoorPool: [this.estateproperty.IndoorPool],
      IndoorPoolHeated: [this.estateproperty.IndoorPoolHeated],
      Garden: [this.estateproperty.Garden],
      OutdoorBBQ: [this.estateproperty.OutdoorBBQ],
      ElectronicGates: [this.estateproperty.ElectronicGates],
      AutomaticWatering: [this.estateproperty.AutomaticWatering],

      //For Rental
      RentStart: [this.estateproperty.RentStart],
      RentEnd: [this.estateproperty.RentEnd],
      RentDamageDeposit: [this.estateproperty.RentDamageDeposit],
      Furnished: [this.estateproperty.Furnished],

      //Distances from key pos
      Orientation: [this.estateproperty.Orientation],
      DistanceFromVillage: [this.estateproperty.DistanceFromVillage],
      DistanceFromCity: [this.estateproperty.DistanceFromCity],
      DistanceFromSea: [this.estateproperty.DistanceFromSea],
      DistanceFromAirport: [this.estateproperty.DistanceFromCity],
      NearMetro: [this.estateproperty.DistanceFromSea],

      //Map
      YoutubeURL: [this.estateproperty.YoutubeURL],
      GeoLat: [this.estateproperty.GeoLat],
      GeoLong: [this.estateproperty.GeoLong],
      UploadMapToRealEstatePortals: [this.estateproperty.UploadMapToRealEstatePortals]

    });

  }

  onSubmit(form: FormGroup): void {
    console.log(form.value);
    console.log(form.valid);
    if (!form.valid) {
      console.log(form.errors);
      return;
    }

    //updates the model 
    this.estateproperty = form.value;

    this.errorObject = null;

    let loader = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    loader.present();

    if (this.estateform.get('RealEstatePropertyId').value) {
      this.repService.updateProperty(this.estateform.value).finally(() => loader.dismiss())
        .subscribe(
        updatedRE =>
          this.reUpdated(updatedRE),
        error => this.setError(error)
        );
    } else {
      this.repService.addProperty(this.estateform.value).finally(() => loader.dismiss())
        .subscribe(
        (addedRE: RealEstatePropertyModel) =>
          this.reAdded(addedRE),
        error => this.setError(error)
        );
    }
  }

  reAdded(re: RealEstatePropertyModel) {
    this.presentToast(re.RealEstatePropertyId);
    this.navCtrl.popToRoot();
  }

  reUpdated(ip) {
    this.presentToast('Updated succesfully');
    this.navCtrl.pop();
  }

  presentToast(msg: any) {
    let toast = this.toastController.create({
      message: msg.toString(),
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  selectBroker() {
    this.setInvolvedParty(InvolvedPartyType.Agent, '');
  }
  selectOwner() {
    this.setInvolvedParty(InvolvedPartyType.Owner, '');
  }
  selectProposed() {
    this.setInvolvedParty(InvolvedPartyType.Contact, '');
  }


  setInvolvedParty(typeId: number, name: string) {
    let selectModal = this.modalCtrl.create(InvolvedPartySelectComponent, {
      id: 0,
      type: typeId,
      name: name
    });

    selectModal.onDidDismiss((data: InvolvepdPartyModel) => {

      if (typeId === InvolvedPartyType.Owner) {
        this.estateform.controls['OwnerId'].setValue(data.InvolvedPartyId);
        this.estateform.controls['Owner'].setValue(data);
        this.ownerFullName = data.FirstName + ' ' + data.LastName;
      } else if (typeId === InvolvedPartyType.Agent) {
        this.estateform.controls['ResponsibleId'].setValue(data.InvolvedPartyId);
        this.estateform.controls['Responsible'].setValue(data);
        this.estateform.value.ResponsibleId = data.InvolvedPartyId;
        this.estateform.value.Responsible = data;
        this.responsibleFullName = data.FirstName + ' ' + data.LastName;
      } else {
        this.estateform.controls['ProposedId'].setValue(data.InvolvedPartyId);
        this.estateform.controls['Proposed'].setValue(data);
        this.propesedByFullName = data.FirstName + ' ' + data.LastName;
      }
      console.log(this.estateform.value);
    });

    selectModal.present();
  } // end setInvolvedParty


  openMap() {
    let selectModal = this.modalCtrl.create(GoogleMapComponent, {
      lat: this.estateform.value.GeoLat ? this.estateform.value.GeoLat : 38.014133,
      lng: this.estateform.value.GeoLong ? this.estateform.value.GeoLong : 23.795480,
      label: this.estateform.value.Title,
      draggable: true
    });

    selectModal.onDidDismiss(data => {
      console.log(data);
      this.estateform.setValue(
        {
          GeoLat: data.lat,
          GeoLong: data.lng
        }
      );
      // this.estateform.value.GeoLat= data.lat;
      // this.estateform.value.GeoLong  = data.lng;
      console.log(this.estateform.value);
    });

    selectModal.present();
  } // end openMap

  setError(err) {
    if (err === 'Not found') {
      this.errorObject = new ErrorModel(ErrorType.NotFound, 'Δεν βρέθηκαν αποτελέσματα...', '');
      console.log(this.errorObject);
    } else {
      this.errorObject = new ErrorModel(ErrorType.Error, err, '');
    }
  }





}