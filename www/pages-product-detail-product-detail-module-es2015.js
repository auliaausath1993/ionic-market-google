(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-detail-product-detail-module"],{

/***/ "+zku":
/*!***********************************************************************!*\
  !*** ./src/app/pages/product-detail/product-detail-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ProductDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPageRoutingModule", function() { return ProductDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-detail.page */ "KLt4");




const routes = [
    {
        path: '',
        component: _product_detail_page__WEBPACK_IMPORTED_MODULE_3__["ProductDetailPage"]
    }
];
let ProductDetailPageRoutingModule = class ProductDetailPageRoutingModule {
};
ProductDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductDetailPageRoutingModule);



/***/ }),

/***/ "DGXm":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-detail/product-detail.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-no-padding green\">\n      <ion-header class=\"ion-no-border\">\n        <ion-toolbar>\n          <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/tabs/shop\"></ion-back-button>\n          </ion-buttons>\n          <ion-title></ion-title>\n          <ion-buttons slot=\"end\">\n            <ion-button>\n              <ion-icon\n                color=\"dark\"\n                slot=\"icon-only\"\n                name=\"share-social-outline\"\n              ></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n      <ion-slides [pager]=\"true\" [options]=\"imageConfig\">\n        <ion-slide *ngFor=\"let item of [1,1,1]\">\n          <ion-col class=\"ion-padding ion-margin-bottom\">\n            <img src=\"{{ product?.image }}\" />\n          </ion-col>\n        </ion-slide>\n      </ion-slides>\n    </ion-row>\n    <ion-row class=\"ion-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <div class=\"title-container\">\n          <div class=\"text-container\">\n            <p>{{ product?.item_name }}</p>\n            <span>{{ product?.price | currency:'Rp ':'symbol':'3.0'}}</span>\n          </div>\n          <ion-button\n            (click)=\"favorite()\"\n            class=\"circle-btn\"\n            slot=\"end\"\n            fill=\"clear\"\n            size=\"small\"\n            shape=\"round\"\n            color=\"primary\"\n          >\n            <ion-icon slot=\"icon-only\" [name]=\"isFavorite ? 'heart' : 'heart-outline'\"></ion-icon>\n          </ion-button>\n        </div>\n      </ion-col>\n      <!-- <ion-col size=\"12\" class=\"ion-no-padding\">\n        <div class=\"buttons-container\">\n          <ul>\n            <li>\n              <ion-button\n                class=\"ion-no-padding\"\n                [disabled]=\"disable\"\n                fill=\"clear\"\n                size=\"small\"\n                shape=\"round\"\n                color=\"primary\"\n                (click)=\"decrease(product)\"\n              >\n                <ion-icon slot=\"icon-only\" name=\"remove-outline\"></ion-icon>\n              </ion-button>\n            </li>\n            <li>{{ product?.quantity }}</li>\n            <li>\n              <ion-button\n                class=\"ion-no-padding\"\n                fill=\"clear\"\n                size=\"small\"\n                shape=\"round\"\n                color=\"primary\"\n                (click)=\"increase(product)\"\n              >\n                <ion-icon slot=\"icon-only\" name=\"add-outline\"></ion-icon>\n              </ion-button>\n            </li>\n          </ul>\n          <ion-text>{{ product?.price | currency }}</ion-text>\n        </div>\n      </ion-col> -->\n    </ion-row>\n\n    <ion-grid class=\"ion-margin\">\n      <ion-row>\n        <ion-col style=\"color: white;\">Variant</ion-col>\n        <ion-col style=\"color: white;\">Stock</ion-col>\n        <ion-col style=\"color: white;\">Harga</ion-col>\n        <ion-col style=\"color: white; text-align: center;\">Qty</ion-col>\n      </ion-row>\n      <ion-row *ngFor=\"let price of product_variant; index as n\" style=\"border: 1px solid #8bd3a5\">\n        <ion-col class=\"col-padding\">{{ price.variant_name }}</ion-col>\n        <ion-col  class=\"col-padding\">{{ price.stock }}</ion-col>\n        <ion-col>{{ price.harga | currency:'Rp ':'symbol':'3.0' }}</ion-col>\n        <ion-col  class=\"col-padding\" style=\"text-align: center; font-size: 11pt !important;\">\n          <ion-icon name=\"remove-circle\" (click)=\"decrement(price)\" class=\"red\"></ion-icon>\n          <ion-input type=\"text\" style=\"display: none;\" value=\"{{ price.id_variant }}\" [(ngModel)]=\"id_variant[n]\"></ion-input>{{ price.quantity }}\n          <span id=\"var_id_{{ n }}\" style=\"display: none;\">{{ price.id_variant }}</span>\n          <ion-input type=\"text\" style=\"display: none;\" value=\"{{ price.quantity }}\" [(ngModel)]=\"variant_qty[n]\"></ion-input> \n          <ion-icon name=\"add-circle\" (click)=\"increment(price)\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-row class=\"ion-padding\">\n      <ion-col class=\"ion-no-padding\">\n        <app-dropdown [open]=\"true\" [title]=\"'Info Grosir'\">\n          <ion-grid class=\"ion-no-margin\">\n            <ion-row>\n              <ion-col style=\"color: white;\">Variant</ion-col>\n              <ion-col style=\"color: white;\">Awal QTY</ion-col>\n              <ion-col style=\"color: white;\">Akhir QTY</ion-col>\n              <ion-col style=\"color: white;\">Harga</ion-col>\n            </ion-row>\n            <ion-row *ngFor=\"let price of product_variant; index as i\" style=\"border: 1px solid #8bd3a5\">\n              <ion-col class=\"col-padding\">{{ price.variant_name }}</ion-col>\n              <ion-col class=\"col-padding\">{{ price.qty_awal }}</ion-col>\n              <ion-col class=\"col-padding\">{{ price.qty_akhir }}</ion-col>\n              <ion-col class=\"col-padding\">{{ price.harga | currency:'Rp ':'symbol':'3.0' }}</ion-col>\n            </ion-row>\n            <ion-input type=\"text\" style=\"display: none;\" value=\"{{ jumData }}\" [(ngModel)]=\"jumVarian\"></ion-input>\n          </ion-grid>\n        </app-dropdown>\n        <app-dropdown [open]=\"false\" [title]=\"'Nutrition'\">\n          <p class=\"text\">\n            {{ nutrisi }}\n          </p>\n        </app-dropdown>\n        <app-dropdown [open]=\"false\" [title]=\"'Reviews'\">\n          <p class=\"text\">\n            Apples are a good source of fiber and vitamin C. They also contain\n            polyphenols, which may have numerous health benefits.\n          </p>\n        </app-dropdown>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer class=\"ion-padding-horizontal ion-no-border\">\n  <ion-toolbar>\n    <ion-button\n      (click)=\"addToCart()\"\n      class=\"action-button\"\n      expand=\"block\"\n      fill=\"solid\"\n      color=\"primary\"\n      type=\"button\">\n      <div class=\"button-text\">\n        <span>Add to Cart</span>\n        <ion-icon name=\"cart-outline\"></ion-icon>\n      </div>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n\n");

/***/ }),

/***/ "KLt4":
/*!*************************************************************!*\
  !*** ./src/app/pages/product-detail/product-detail.page.ts ***!
  \*************************************************************/
/*! exports provided: ProductDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPage", function() { return ProductDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-detail.page.html */ "DGXm");
/* harmony import */ var _product_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-detail.page.scss */ "ZDMx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_api_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api-url */ "0UPu");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let ProductDetailPage = class ProductDetailPage {
    constructor(route, router, http, toastController) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.toastController = toastController;
        /**
        product_variant = [
          {
            "variant": "100gr daging",
            "stock": 30,
            "harga": 56000
          },
          {
            "variant": "300gr daging",
            "stock": 22,
            "harga": 75000
          },
          {
            "variant": "500gr daging",
            "stock": 15,
            "harga": 90000
          },
          {
            "variant": "700gr daging",
            "stock": 9,
            "harga": 97000
          }
        ]
        **/
        this.stock_groshir = [
            {
                "variant": "100gr",
                "qty_awal": 5,
                "qty_akhir": 10,
                "harga": 50000
            },
            {
                "variant": "300gr",
                "qty_awal": 11,
                "qty_akhir": 15,
                "harga": 70000
            },
            {
                "variant": "500gr",
                "qty_awal": 16,
                "qty_akhir": 20,
                "harga": 85000
            },
            {
                "variant": "700gr",
                "qty_awal": 21,
                "qty_akhir": 25,
                "harga": 90000
            }
        ];
        this.disable = false;
        this.imageConfig = {
            centeredSlides: true,
            slidesPerView: 1,
        };
        this.currentNumber = 0;
        this.qty = 1;
        this.variant_qty = [];
        this.id_variant = [];
        this.isLogging();
    }
    ngOnInit() {
        this.product_id = this.route.snapshot.params.id;
        let reqData = {
            "product_id": this.product_id
        };
        this.http.post(src_app_api_url__WEBPACK_IMPORTED_MODULE_6__["APIURL"].apiURL + 'get_detail_product', reqData)
            .subscribe(data => {
            this.product = {
                item_name: data['name_item'],
                subtitle: data['harga'],
                image: data['img_medium'],
                price: data['harga'],
                quantity: 1,
            };
            this.product_variant = data['variant'];
            this.nutrisi = data['keterangan'];
            this.jumData = this.product_variant.length;
        });
    }
    isLogging() {
        this.customer_name = localStorage.getItem('customer_name');
        this.customer_email = localStorage.getItem('customer_email');
        console.log("Email: " + this.customer_email);
        if (this.customer_name == null && this.customer_email == null) {
            this.router.navigate(['/signup']);
        }
        else {
            return false;
        }
    }
    increase(item) {
        if (item.quantity === 1) {
            this.disable = false;
        }
        item.quantity++;
    }
    increment(price) {
        if (price.quantity === 1) {
            this.disable = false;
        }
        price.quantity++;
    }
    decrement(price) {
        if (price.quantity < 1) {
            this.disable = true;
        }
        else {
            price.quantity--;
        }
    }
    decrease(item) {
        if (item.quantity < 2) {
            this.disable = true;
        }
        else {
            item.quantity--;
        }
    }
    favorite() {
        this.isFavorite = !this.isFavorite;
    }
    trackByFn(index, item) {
        return index;
    }
    addToCart() {
        var arrQty = [];
        var arrID = [];
        for (let i = 0; i < this.jumVarian; i++) {
            arrQty.push(this.variant_qty[i]);
            arrID.push(document.getElementById("var_id" + "_" + i).innerHTML);
        }
        this.product_id = this.route.snapshot.params.id;
        let reqData = {
            "token": "8abf4902a0db27dcb7f62a01c2fd0d0a",
            "prod_id": this.product_id,
            "variant_id": arrID,
            "qty": arrQty,
            "notes": "Catatan",
            "ref": "Android",
            "customer_id": localStorage.getItem("customer_id")
        };
        this.http.post(src_app_api_url__WEBPACK_IMPORTED_MODULE_6__["APIURL"].apiURL + 'process_order_item', reqData)
            .subscribe(data => {
            console.log(reqData);
            let sts = data['status'];
            if (sts == "Failed") {
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
            else {
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
                    this.router.navigate(['/tabs/cart']);
                }, 900);
            }
        });
    }
};
ProductDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] }
];
ProductDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-detail',
        template: _raw_loader_product_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductDetailPage);



/***/ }),

/***/ "ZDMx":
/*!***************************************************************!*\
  !*** ./src/app/pages/product-detail/product-detail.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  /* --background: rgba(83, 177, 117, 0.25); */\n  --background: transparent;\n}\n\n.green {\n  background: rgba(83, 177, 117, 0.25);\n  border-radius: 0 0 18px 18px;\n}\n\n.title-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.title-container p {\n  font-weight: 700;\n  font-size: 22px;\n  line-height: 28px;\n  color: #181725;\n  margin: 0;\n}\n\n.title-container span {\n  font-size: 16px;\n  line-height: 22px;\n  color: #7c7c7c;\n}\n\n.title-container .circle-btn {\n  --border-radius: 50%;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  width: 48px;\n  height: 48px;\n}\n\n.buttons-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 8px;\n}\n\n.buttons-container ion-text {\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 27px;\n  letter-spacing: 0.1px;\n  color: #181725;\n}\n\n.buttons-container ul {\n  padding-left: 0;\n  margin: 0;\n}\n\n.buttons-container ul li:nth-child(2) {\n  padding: 8px;\n  width: 36px;\n  height: 36px;\n  border-radius: 14px;\n  text-align: center;\n}\n\n.buttons-container ul li {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.buttons-container ul li ion-button {\n  width: 36px;\n  height: 36px;\n  --border-radius: 14px;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.buttons-container ul li ion-button ion-icon {\n  color: var(--ion-color-primary);\n  font-weight: 700;\n  font-size: 20px;\n}\n\n.text {\n  font-size: 13px;\n  line-height: 21px;\n  text-align: left;\n  color: #7c7c7c;\n}\n\n.action-button {\n  --border-radius: 12px;\n  --box-shadow: none !important;\n  height: 48px;\n}\n\n.action-button span {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 22px;\n  text-transform: initial;\n  color: #ffffff;\n}\n\n.action-button .button-text {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 0 8px;\n}\n\n.action-button .button-text ion-icon {\n  font-size: 20px;\n  color: #ffffff;\n}\n\nion-footer ion-toolbar {\n  --background: transparent !important;\n  padding-bottom: 8px;\n}\n\nion-grid {\n  --ion-grid-column-padding: 10px;\n  border-collapse: collapse;\n  border-style: hidden;\n  padding: 4px !important;\n  font-size: 10pt !important;\n  /*   ion-col {\n      border: 1px solid black;\n      border-bottom: 0;\n      border-right: 0;\n    }\n    ion-col:last-child {\n      border-right: 1px solid black;\n    } */\n  /* ion-row:last-child {\n    border-bottom: 1px solid black;\n  } */\n}\n\nion-grid ion-row:first-child {\n  background-color: #53b175;\n  font-weight: bold;\n  padding: 5px !important;\n}\n\nion-grid .col-padding {\n  padding: 4px !important;\n  font-size: 9.5pt !important;\n  vertical-align: middle !important;\n}\n\nion-grid .red {\n  color: red !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9kdWN0LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0Q0FBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0U7RUFDRSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFESjs7QUFLQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFJRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBRko7O0FBS0U7RUFDRSxlQUFBO0VBQ0EsU0FBQTtBQUhKOztBQUtJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhOOztBQU1JO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtBQUpOOztBQU1NO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBSlI7O0FBTVE7RUFDRSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUpWOztBQVdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBUkY7O0FBV0E7RUFDRSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQVJGOztBQVVFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFSSjs7QUFXRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFUSjs7QUFXSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBVE47O0FBZUU7RUFDRSxvQ0FBQTtFQUNBLG1CQUFBO0FBWko7O0FBZ0JBO0VBQ0UsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQWdCRjs7Ozs7OztPQUFBO0VBU0U7O0tBQUE7QUEzQkY7O0FBSUU7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFGSjs7QUFLRTtFQUNFLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtBQUhKOztBQUtFO0VBQ0UscUJBQUE7QUFISiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgLyogLS1iYWNrZ3JvdW5kOiByZ2JhKDgzLCAxNzcsIDExNywgMC4yNSk7ICovXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5ncmVlbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoODMsIDE3NywgMTE3LCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDE4cHggMThweDtcbn1cblxuLnRpdGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBwIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBjb2xvcjogIzE4MTcyNTtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICBzcGFuIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgY29sb3I6ICM3YzdjN2M7XG4gIH1cblxuICAuY2lyY2xlLWJ0biB7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gIH1cbn1cblxuLmJ1dHRvbnMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogOHB4O1xuXG4gIGlvbi10ZXh0IHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gICAgY29sb3I6ICMxODE3MjU7XG4gIH1cblxuICB1bCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIG1hcmdpbjogMDtcblxuICAgIGxpOm50aC1jaGlsZCgyKSB7XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICB3aWR0aDogMzZweDtcbiAgICAgIGhlaWdodDogMzZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgbGkge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjN2M3YzdjO1xufVxuXG4uYWN0aW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDhweDtcblxuICBzcGFuIHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuXG4gIC5idXR0b24tdGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwIDhweDtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIH1cbiAgfVxufVxuXG5pb24tZm9vdGVyIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICB9XG59XG5cbmlvbi1ncmlkIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXN0eWxlOiBoaWRkZW47XG4gIHBhZGRpbmc6IDRweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEwcHQgIWltcG9ydGFudDtcbiAgXG4gIGlvbi1yb3c6Zmlyc3QtY2hpbGQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IzUzYjE3NTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jb2wtcGFkZGluZyB7XG4gICAgcGFkZGluZzogNHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiA5LjVwdCAhaW1wb3J0YW50O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbiAgfVxuICAucmVke1xuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgfVxuLyogICBpb24tY29sIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItYm90dG9tOiAwO1xuICAgIGJvcmRlci1yaWdodDogMDtcbiAgfVxuICBpb24tY29sOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuICB9ICovXG4gIFxuICAvKiBpb24tcm93Omxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgfSAqL1xufVxuIl19 */");

/***/ }),

/***/ "ePSv":
/*!***************************************************************!*\
  !*** ./src/app/pages/product-detail/product-detail.module.ts ***!
  \***************************************************************/
/*! exports provided: ProductDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPageModule", function() { return ProductDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-detail-routing.module */ "+zku");
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-detail.page */ "KLt4");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let ProductDetailPageModule = class ProductDetailPageModule {
};
ProductDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductDetailPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_product_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailPage"]]
    })
], ProductDetailPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-product-detail-product-detail-module-es2015.js.map