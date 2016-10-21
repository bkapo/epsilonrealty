import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { ModalController, ToastController, LoadingController, NavController } from 'ionic-angular';

import { InvolvepdPartyModel, InvolvedPartyType } from '../../app/models/involved-party.model';
import { ErrorModel, ErrorType } from '../../app/models/error.model'
import { IPService } from '../../core/involved-party.service'


@Component({
  selector: 'involved-party',
  templateUrl: 'involved-party.component.html'
})
export class InvolvedPartyComponent implements OnInit {
  @Input() involvedparty: InvolvepdPartyModel;
  involedpartyform: FormGroup;
  involedpartySegment: string = 'name';
  isLoading: boolean = false;
  errorObject: ErrorModel
  loader: any;
  public submitted: boolean; // keep track on whether form is 
  invPartyType = InvolvedPartyType;

  constructor(public fb: FormBuilder, public navCtrl: NavController, public ipService: IPService,
    public modalController: ModalController, public toastController: ToastController, public loadingCtrl: LoadingController) {

  }

  ngOnInit() {
    this.involedpartyform = this.fb.group({
      InvolvedPartyType: [this.involvedparty.InvolvedPartyType, Validators.required],
      firstName: [this.involvedparty.FirstName, Validators.required],
      lastName: [this.involvedparty.LastName, Validators.required],
      companyName: [this.involvedparty.CompanyName],
      fatherName: [this.involvedparty.FatherName],
      motherName: [this.involvedparty.MotherName],
      sizigouName: [this.involvedparty.Sizigou],
      AFM: [this.involvedparty.AFM],
      mobile: [this.involvedparty.Mobile],
      homeTelephone: [this.involvedparty.HomeTelephone],
      workTelephone: [this.involvedparty.WorkTelephone],
      fax: [this.involvedparty.Fax],
      webSiteURL: [this.involvedparty.website],
      email: [this.involvedparty.Email],
      InvolvedPartyId: [this.involvedparty.InvolvedPartyId]
    });
  }

  onSubmit(): void {
    this.errorObject = null;

    let loader = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    loader.present();

    if (this.involedpartyform.get('InvolvedPartyId').value) {
      this.ipService.updateInvolvedParty(this.involedpartyform.value).finally(() => loader.dismiss())
        .subscribe(
        updatedIP =>
          this.ipUpdated(updatedIP),
        error => this.setError(error)
        );
    } else {
      this.ipService.addInvolvedParty(this.involedpartyform.value).finally(() => loader.dismiss())
        .subscribe(
        newIP =>
          this.ipAdded(newIP),
        error => this.setError(error)
        );
    }

  }// end onSubmit

  ipAdded(ip) {
    this.presentToast('Created succesfully with id:' +
      ip.InvolvedPartyId);
    this.navCtrl.popToRoot();
  }

  ipUpdated(ip) {
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



