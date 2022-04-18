(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "2Cor":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>\n      My Cart\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">My Cart</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid class=\"ion-padding-horizontal\">    \n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-no-padding\" *ngFor=\"let item of dataOrder\">\n        <app-cart-item [item]=\"item\"></app-cart-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer class=\"ion-padding-horizontal ion-no-border\">\n  <ion-toolbar>\n    <ion-button\n    (click)=\"openModalAccepted()\"\n          class=\"action-button\"\n          expand=\"block\"\n          fill=\"solid\"\n          color=\"primary\"\n          type=\"button\"\n        >\n        <div class=\"button-text\">\n          <span>Checkout Now</span>\n          <ion-note>{{ totalAmount | currency:'Rp ':'symbol':'3.0' }}</ion-note>\n        </div>\n        </ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "Y+Iu":
/*!***************************************************!*\
  !*** ./src/app/pages/cart/cart-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageRoutingModule", function() { return CartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.page */ "rqSi");




const routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_3__["CartPage"],
    }
];
let CartPageRoutingModule = class CartPageRoutingModule {
};
CartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CartPageRoutingModule);



/***/ }),

/***/ "rqSi":
/*!*****************************************!*\
  !*** ./src/app/pages/cart/cart.page.ts ***!
  \*****************************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cart.page.html */ "2Cor");
/* harmony import */ var _cart_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.page.scss */ "vwaP");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_api_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api-url */ "0UPu");
/* harmony import */ var _modal_accepted_modal_accepted_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal-accepted/modal-accepted.page */ "5qBy");









let CartPage = class CartPage {
    constructor(modalCtrl, router, http) {
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.http = http;
        this.cart = {
            products: [
                {
                    title: 'Red Apple',
                    subtitle: '1Kg',
                    image: 'assets/images/apple.png',
                    price: 4.99,
                    quantity: 1
                },
                {
                    title: 'Ranch Eggs',
                    subtitle: '12pcs',
                    image: 'assets/images/eggs.png',
                    price: 0.29,
                    quantity: 1
                },
                {
                    title: 'Chicken',
                    subtitle: '1Kg',
                    image: 'assets/images/chicken.png',
                    price: 1.99,
                    quantity: 1
                },
                {
                    title: 'Waiyu Beef',
                    subtitle: '1Kg',
                    image: 'assets/images/meat.png',
                    price: 24.99,
                    quantity: 1
                }
            ],
            subtotal: 244,
            taxRate: 12
        };
        this.isLogging();
        this.showCart();
    }
    openModalAccepted() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modal_accepted_modal_accepted_page__WEBPACK_IMPORTED_MODULE_8__["ModalAcceptedPage"],
                id: 'ModalAccepted',
            });
            return yield modal.present();
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
    showCart() {
        let reqData = {
            "customer_id": localStorage.getItem("customer_id"),
            "token": "8abf4902a0db27dcb7f62a01c2fd0d0a"
        };
        this.http.post(src_app_api_url__WEBPACK_IMPORTED_MODULE_7__["APIURL"].apiURL + 'list_order', reqData)
            .subscribe(data => {
            this.dataOrder = data['order'];
            console.log(this.dataOrder);
            this.totalAmount = data['total_amount'];
        });
    }
};
CartPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
CartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-cart',
        template: _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cart_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CartPage);



/***/ }),

/***/ "sFz8":
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.module.ts ***!
  \*******************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart.page */ "rqSi");
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart-routing.module */ "Y+Iu");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let CartPageModule = class CartPageModule {
};
CartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_6__["CartPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_5__["CartPage"]]
    })
], CartPageModule);



/***/ }),

/***/ "vwaP":
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".action-button {\n  --border-radius: 12px;\n  --box-shadow: none !important;\n  height: 48px;\n}\n.action-button span {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 22px;\n  text-transform: initial;\n  color: #ffffff;\n}\n.action-button .button-text {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 0 8px;\n}\n.action-button .button-text ion-note {\n  font-weight: 700;\n  color: #ffffff;\n}\nion-footer ion-toolbar {\n  --background: transparent !important;\n}\nion-title {\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFBSjtBQUVJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBQVI7QUFNRTtFQUNFLG9DQUFBO0FBSEo7QUFPQTtFQUNFLGdCQUFBO0FBSkYiLCJmaWxlIjoiY2FydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDhweDtcblxuICBzcGFuIHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuXG4gIC5idXR0b24tdGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwIDhweDtcblxuICAgIGlvbi1ub3RlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgfVxuICB9XG59XG5cbmlvbi1mb290ZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICB9XG59XG5cbmlvbi10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=cart-cart-module-es2015.js.map