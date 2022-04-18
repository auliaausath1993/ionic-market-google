(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-all-product-all-product-module"],{

/***/ "Cqj/":
/*!*******************************************************!*\
  !*** ./src/app/pages/all-product/all-product.page.ts ***!
  \*******************************************************/
/*! exports provided: AllProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllProductPage", function() { return AllProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_all_product_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./all-product.page.html */ "R6dy");
/* harmony import */ var _all_product_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-product.page.scss */ "RPpM");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_api_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api-url */ "0UPu");








let AllProductPage = class AllProductPage {
    constructor(route, router, toastController, http) {
        this.route = route;
        this.router = router;
        this.toastController = toastController;
        this.http = http;
    }
    ngOnInit() {
        this.title = this.route.snapshot.params.title;
        this.showProduct();
    }
    showProduct() {
        this.data = this.http.get(src_app_api_url__WEBPACK_IMPORTED_MODULE_7__["APIURL"].apiURL + 'get_list_product_v2');
        this.data.subscribe(result => {
            this.dataProduct = result;
            this.status = this.dataProduct.status;
            if (this.status == "Success") {
                this.allProduct = this.dataProduct.product;
            }
            else {
                this.toastController.create({
                    message: 'Tidak ada produk untuk ditampilkan',
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
        });
    }
    productDetail(id, name) {
        this.router.navigate(['/detail', { id: id, name: name }]);
    }
};
AllProductPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AllProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-all-product',
        template: _raw_loader_all_product_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_all_product_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AllProductPage);



/***/ }),

/***/ "R6dy":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/all-product/all-product.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/shop\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ title }}</ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">{{ title }}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid class=\"ion-padding-horizontal\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col class=\"ion-padding-vertical\">\n        <ion-searchbar animated class=\"ion-no-padding\"></ion-searchbar>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-no-padding\" size=\"6\" *ngFor=\"let item of allProduct\">\n        <ion-card class=\"ion-no-margin\" (click)=\"productDetail(item.product_id, item.name_item)\">\n          <ion-card-header>\n            <img [src]=\"item.img_medium\" />\n          </ion-card-header>\n          <ion-card-content>\n            <ion-card-title class=\"margin-top-30\">{{ item.name_item }}</ion-card-title>\n            <ion-card-subtitle class=\"ion-padding-bottom\"></ion-card-subtitle>\n            <div class=\"price-container\">\n              <ion-text>\n                {{ item.harga | currency:'Rp':'symbol':'3.0'  }}\n              </ion-text>\n              <ion-button>\n                <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n              </ion-button>\n            </div>\n          </ion-card-content>\n        </ion-card>\n        \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "RPpM":
/*!*********************************************************!*\
  !*** ./src/app/pages/all-product/all-product.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --inner-padding-end: 0;\n}\n\nion-text {\n  font-weight: 600;\n}\n\nion-searchbar {\n  --box-shadow: 0 !important;\n  --border-radius: 8px;\n  --background: var(--ion-color-light);\n  --color: var(--ion-color-medium);\n}\n\nion-title {\n  font-weight: 700;\n}\n\nion-card {\n  box-shadow: none !important;\n  border: 1px solid #e2e2e2;\n  box-sizing: border-box;\n  border-radius: 18px;\n  margin: 8px;\n}\n\nion-card ion-card-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 110px;\n  min-width: 110px;\n}\n\nion-card ion-card-header img {\n  margin: auto !important;\n}\n\nion-card ion-card-content ion-card-title {\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 22px;\n  letter-spacing: 0.1px;\n  color: #181725;\n  text-align: left;\n}\n\nion-card ion-card-content ion-card-subtitle {\n  font-size: 14px;\n  line-height: 22px;\n  color: #7c7c7c;\n  text-align: left;\n}\n\nion-card ion-card-content .margin-top-30 {\n  margin-top: 30px !important;\n  margin-bottom: -20px !important;\n}\n\nion-card ion-card-content .price-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nion-card ion-card-content .price-container ion-text {\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 18px;\n  letter-spacing: 0.1px;\n  color: #181725;\n}\n\nion-card ion-card-content .price-container ion-button {\n  width: 40px;\n  height: 40px;\n  --border-radius: 14px;\n  --box-shadow: none !important;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\nion-card ion-card-content .price-container ion-button ion-icon {\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhbGwtcHJvZHVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7QUFDSjs7QUFFRTtFQUNJLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdDQUFBO0FBQ047O0FBRUU7RUFDRSxnQkFBQTtBQUNKOztBQUtFO0VBQ0UsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBRko7O0FBSUk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUZOOztBQUdNO0VBQ0UsdUJBQUE7QUFEUjs7QUFNTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFKUjs7QUFNTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUpSOztBQU1NO0VBQ0ksMkJBQUE7RUFDQSwrQkFBQTtBQUpWOztBQU9NO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFMUjs7QUFPUTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFMVjs7QUFRUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFOVjs7QUFRVTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFOWiIsImZpbGUiOiJhbGwtcHJvZHVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgfVxuICBcbiAgaW9uLXRleHQge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbiAgXG4gIGlvbi1zZWFyY2hiYXIge1xuICAgICAgLS1ib3gtc2hhZG93OiAwICFpbXBvcnRhbnQ7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICB9XG4gIFxuICBpb24tdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cblxuXG5cblxuICBpb24tY2FyZCB7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmUyZTI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICAgIG1hcmdpbjogOHB4O1xuICBcbiAgICBpb24tY2FyZC1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGhlaWdodDogMTEwcHg7XG4gICAgICBtaW4td2lkdGg6IDExMHB4O1xuICAgICAgaW1nIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgIGlvbi1jYXJkLXRpdGxlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICAgICAgICBjb2xvcjogIzE4MTcyNTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cbiAgICAgIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgY29sb3I6ICM3YzdjN2M7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB9XG4gICAgICAubWFyZ2luLXRvcC0zMCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0yMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gIFxuICAgICAgLnByaWNlLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgXG4gICAgICAgIGlvbi10ZXh0IHtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICAgICAgICAgIGNvbG9yOiAjMTgxNzI1O1xuICAgICAgICB9XG4gIFxuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgICAgICAgIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICBcbiAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICJdfQ== */");

/***/ }),

/***/ "SA92":
/*!*****************************************************************!*\
  !*** ./src/app/pages/all-product/all-product-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AllProductPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllProductPageRoutingModule", function() { return AllProductPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _all_product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-product.page */ "Cqj/");




const routes = [
    {
        path: '',
        component: _all_product_page__WEBPACK_IMPORTED_MODULE_3__["AllProductPage"]
    }
];
let AllProductPageRoutingModule = class AllProductPageRoutingModule {
};
AllProductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AllProductPageRoutingModule);



/***/ }),

/***/ "ilHA":
/*!*********************************************************!*\
  !*** ./src/app/pages/all-product/all-product.module.ts ***!
  \*********************************************************/
/*! exports provided: AllProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllProductPageModule", function() { return AllProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _all_product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./all-product-routing.module */ "SA92");
/* harmony import */ var _all_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-product.page */ "Cqj/");







let AllProductPageModule = class AllProductPageModule {
};
AllProductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _all_product_routing_module__WEBPACK_IMPORTED_MODULE_5__["AllProductPageRoutingModule"]
        ],
        declarations: [_all_product_page__WEBPACK_IMPORTED_MODULE_6__["AllProductPage"]]
    })
], AllProductPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-all-product-all-product-module-es2015.js.map