(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shop-shop-module"],{

/***/ "5X3v":
/*!*******************************************!*\
  !*** ./src/app/pages/shop/shop.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --inner-padding-end: 0;\n}\n\nion-text {\n  font-weight: 600;\n}\n\nion-searchbar {\n  --box-shadow: 0 !important;\n  --border-radius: 8px;\n  --background: var(--ion-color-light);\n  --color: var(--ion-color-medium);\n}\n\nion-title {\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaG9wLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0ksMEJBQUE7RUFDQSxvQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoic2hvcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG59XG5cbmlvbi10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gICAgLS1ib3gtc2hhZG93OiAwICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuXG5pb24tdGl0bGUge1xuICBmb250LXdlaWdodDogNzAwO1xufSJdfQ== */");

/***/ }),

/***/ "KJwO":
/*!***************************************************!*\
  !*** ./src/app/pages/shop/shop-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ShopPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPageRoutingModule", function() { return ShopPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shop_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop.page */ "hjvh");




const routes = [
    {
        path: '',
        component: _shop_page__WEBPACK_IMPORTED_MODULE_3__["ShopPage"],
    }
];
let ShopPageRoutingModule = class ShopPageRoutingModule {
};
ShopPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ShopPageRoutingModule);



/***/ }),

/***/ "fSjV":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop/shop.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title> Shop </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Shop</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-grid class=\"ion-padding-horizontal\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col class=\"ion-padding-vertical\">\n        <ion-searchbar animated class=\"ion-no-padding\"></ion-searchbar>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"ion-no-padding\">\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          <ion-text>Today Offers</ion-text>\n          <ion-button (click)=\"seeAllProduct('Today Offers')\"\n            slot=\"end\"\n            fill=\"clear\"\n            size=\"small\"\n            shape=\"round\"\n            color=\"primary\"\n          >\n            See All\n          </ion-button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-no-padding\">\n        <ion-slides [options]=\"slideConfig\">\n          <ion-slide *ngFor=\"let item of listProduct\">\n            <app-product-card [product]=\"item\" (click)=\"productDetail(item.product_id, item.name_item)\"></app-product-card>\n          </ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"ion-no-padding\">\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          <ion-text>Best Selling</ion-text>\n          <ion-button (click)=\"seeAllProduct('Best Selling')\"\n            slot=\"end\"\n            fill=\"clear\"\n            size=\"small\"\n            shape=\"round\"\n            color=\"primary\"\n          >\n            See All\n          </ion-button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-no-padding\">\n        <ion-slides [options]=\"slideConfig\">\n          <ion-slide *ngFor=\"let item of listBestSelling\">\n            <app-product-card [product]=\"item\" (click)=\"productDetail(item.product_id, item.name_item)\"></app-product-card>\n          </ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"ion-no-padding\">\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          <ion-text>Groceries</ion-text>\n          <ion-button\n          (click)=\"seeAllProduct('Groceries')\"\n            slot=\"end\"\n            fill=\"clear\"\n            size=\"small\"\n            shape=\"round\"\n            color=\"primary\"\n          >\n            See All\n          </ion-button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-slides [options]=\"groupConfig\">\n        <ion-slide *ngFor=\"let item of listGrocery\">\n          <ion-col class=\"ion-no-padding\">\n            <app-product-group [group]=\"item\"> </app-product-group>\n          </ion-col>\n          </ion-slide>\n        </ion-slides>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "hjvh":
/*!*****************************************!*\
  !*** ./src/app/pages/shop/shop.page.ts ***!
  \*****************************************/
/*! exports provided: ShopPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPage", function() { return ShopPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_shop_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./shop.page.html */ "fSjV");
/* harmony import */ var _shop_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop.page.scss */ "5X3v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_api_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api-url */ "0UPu");








let ShopPage = class ShopPage {
    constructor(modalCtrl, router, http) {
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.http = http;
        this.slideConfig = {
            spaceBetween: 1,
            slidesPerView: 2,
        };
        this.groupConfig = {
            spaceBetween: 1,
            slidesPerView: 1.3,
        };
        this.groups = [
            {
                image: 'assets/images/product-group-1.png',
                group: 'Rices',
                color: 'red'
            },
            {
                image: 'assets/images/product-group-2.png',
                group: 'Beans',
                color: 'green'
            }
        ];
        this.products = [
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
        this.loadTodayOffers();
        this.loadBestSelling();
        this.loadGrocery();
        this.isLogging();
    }
    productDetail(id, name) {
        this.router.navigate(['/detail', { id: id, name: name }]);
    }
    seeAllProduct(title) {
        this.router.navigate(['/all-product', { title: title }]);
    }
    isLogging() {
        this.customer_name = localStorage.getItem('customer_name');
        this.customer_email = localStorage.getItem('customer_email');
        if (this.customer_name == null && this.customer_email == null) {
            this.router.navigate(['/signup']);
        }
        else {
            return false;
        }
    }
    loadTodayOffers() {
        this.data = this.http.get(src_app_api_url__WEBPACK_IMPORTED_MODULE_7__["APIURL"].apiURL + 'get_list_product_v2');
        this.data.subscribe(result => {
            this.dataProduct = result;
            this.status = this.dataProduct.status;
            if (this.status == "Success") {
                this.listProduct = this.dataProduct.product;
                console.log(this.listProduct);
            }
            else {
                console.error('No data found');
            }
        });
    }
    loadBestSelling() {
        let reqData = {
            "token": "8abf4902a0db27dcb7f62a01c2fd0d0a",
            "customer_id": localStorage.getItem("customer_id")
        };
        this.data = this.http.post(src_app_api_url__WEBPACK_IMPORTED_MODULE_7__["APIURL"].apiURL + 'get_dashboard_data', reqData);
        this.data.subscribe(result => {
            console.log(result);
            this.dataBestSelling = result;
            let cekAda = this.dataBestSelling.data_best_seller;
            if (cekAda == undefined) {
                console.log("No data found");
            }
            else {
                this.listBestSelling = this.dataBestSelling.data_best_seller;
                console.log(this.listBestSelling);
            }
        });
    }
    loadGrocery() {
        this.Grocery = this.http.get(src_app_api_url__WEBPACK_IMPORTED_MODULE_7__["APIURL"].apiURL + 'get_list_product_category');
        this.Grocery.subscribe(result => {
            this.dataGrocery = result;
            this.status = this.dataGrocery.status;
            if (this.status == "Success") {
                this.listGrocery = this.dataGrocery.category;
                console.log(this.listGrocery);
            }
            else {
                console.error('No data found');
            }
        });
    }
};
ShopPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
ShopPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-shop',
        template: _raw_loader_shop_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_shop_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ShopPage);



/***/ }),

/***/ "wq26":
/*!*******************************************!*\
  !*** ./src/app/pages/shop/shop.module.ts ***!
  \*******************************************/
/*! exports provided: ShopPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPageModule", function() { return ShopPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shop_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop.page */ "hjvh");
/* harmony import */ var _shop_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop-routing.module */ "KJwO");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let ShopPageModule = class ShopPageModule {
};
ShopPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _shop_routing_module__WEBPACK_IMPORTED_MODULE_6__["ShopPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_shop_page__WEBPACK_IMPORTED_MODULE_5__["ShopPage"]]
    })
], ShopPageModule);



/***/ })

}]);
//# sourceMappingURL=shop-shop-module-es2015.js.map