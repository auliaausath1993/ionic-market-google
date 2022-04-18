import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { FiltersPage } from '../filters/filters.page';
import { ActivatedRoute, Router } from '@angular/router';
import { APIURL } from 'src/app/api-url';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.page.html',
  styleUrls: ['./category-listing.page.scss'],
})
export class CategoryListingPage implements OnInit {

  products = [
    {
      title: 'Red Apple',
      subtitle: '1Kg',
      image: 'assets/images/apple.png',
      price: 4.99,
      inCart: false
    },
    {
      title: 'Ranch Eggs',
      subtitle: '12pcs',
      image: 'assets/images/eggs.png',
      price: 0.29,
      inCart: false
    },
    {
      title: 'Chicken',
      subtitle: '1Kg',
      image: 'assets/images/chicken.png',
      price: 1.99,
      inCart: false
    },
    {
      title: 'Waiyu Beef',
      subtitle: '1Kg',
      image: 'assets/images/meat.png',
      price: 24.99,
      inCart: false
    }
  ];
  category_id: any;
  product:any;
  product_variant:any;
  listDetailProduct:any;
  category_name:string;
  status:string;
  nutrisi:string;
  customer_name: string;
  customer_email: string;
  constructor(private modalCtrl: ModalController, private route: ActivatedRoute, private router: Router, public http: HttpClient, public toastController: ToastController) {
    this.isLogging();
  }

  ngOnInit() {
    this.category_id   = this.route.snapshot.params.id;
    this.category_name = this.route.snapshot.params.name;

    let reqData = {
      "category": this.category_id
    }
    this.http.post(APIURL.apiURL + 'get_list_product_by_category', reqData)
      .subscribe(data => {
        this.status = data['status'];
        if(this.status == "Success") {
          this.product = data['product'];
          console.log(this.product);
          
        }
        else {
          console.log("Tidak ada produk untuk categori: " + this.category_id);
          this.displayToast();
        }

        
      });
  }
  productDetail(id, name) {
    this.router.navigate(['/detail', { id: id, name:name }]);
  }
  
  isLogging(){
    this.customer_name = localStorage.getItem('customer_name');
    this.customer_email = localStorage.getItem('customer_email');
    console.log("Email: "+ this.customer_email);
    if(this.customer_name==null && this.customer_email==null){
      this.router.navigate(['/signup']);
    }
    else{
      return false;
    }
  }

  displayToast() {
    this.toastController.create({
      message: 'Belum ada produk pada kategori ini',
      position: 'bottom',
      duration: 2000,
      buttons: [
        {
          side: 'end',
          icon: 'information-circle'
        }
      ]
    }).then((toast) => {
      toast.present();
    });
  }  

  async openFilter() {
    const modal = await this.modalCtrl.create({
      component: FiltersPage,
      id: 'ModalFilter',
    });
    return await modal.present();
  }

}
