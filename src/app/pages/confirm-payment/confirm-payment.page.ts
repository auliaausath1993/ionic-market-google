import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APIURL } from 'src/app/api-url';

import { LoadingController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-payment',
  templateUrl: './confirm-payment.page.html',
  styleUrls: ['./confirm-payment.page.scss'],
})
export class ConfirmPaymentPage implements OnInit {
  order_id: any;
  dataAddress: any = [];
  confirmForm: FormGroup;
  isLoadingResults = false;


  constructor(private route: ActivatedRoute, private router: Router,private formBuilder: FormBuilder, public http: HttpClient, public toastController: ToastController) { }

  dataAccount: any = [];
  
  ngOnInit() {
    this.order_id = this.route.snapshot.params.id;
    this.confirmForm = this.formBuilder.group({
      'order_id' : this.order_id,
      'token' : "8abf4902a0db27dcb7f62a01c2fd0d0a",
      'customer_id' : localStorage.getItem("customer_id"),
      'nama' : [null, Validators.required],
      'bank' : [null, Validators.required],
      'jumlah' : [null, Validators.required],
      'rekening' : [null, Validators.required],
      'bank_account' : [null, Validators.required],
    });
  }

  ionViewWillEnter() {
    this.getOngkir();
  }

  getOngkir(){
    let reqData = {
      "customer_id": localStorage.getItem("customer_id"),
      "token": "8abf4902a0db27dcb7f62a01c2fd0d0a"
    }
    this.http.post(APIURL.apiURL + 'getAccount', reqData)
    .subscribe((res) => {
      this.dataAccount = res;
      console.log(this.dataAccount);
    });
  }

  confirm_payment() {
    this.isLoadingResults = true;
    this.http.post(APIURL.apiURL + 'confirm_payment', this.confirmForm.value)
    .subscribe(data => {
      //console.log(reqData);
      let sts = data['status'];
      if(sts == "Failed"){
        this.toastController.create({
          message: data['message'],
          position: 'bottom',
          duration: 5000,
          buttons: [
            {
              side: 'end',
              icon: 'warning'
            }
          ]
        }).then((toast) => {
          toast.present();
        });
      }
      else{
        this.toastController.create({
          message: data['message'],
          position: 'bottom',
          duration: 5000,
          buttons: [
            {
              side: 'end',
              icon: 'checkmark-done-circle-outline'
            }
          ]
        }).then((toast) => {
          toast.present();
        });
        setTimeout(() => {
          this.router.navigate(['/list-order']);
        }, 900);
      }
      
    });
  }

}
