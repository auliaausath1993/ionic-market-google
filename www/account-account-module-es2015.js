(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "3Bst":
/*!*********************************************************!*\
  !*** ./src/app/pages/account/account-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function() { return AccountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.page */ "S9xc");




const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
    }
];
let AccountPageRoutingModule = class AccountPageRoutingModule {
};
AccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccountPageRoutingModule);



/***/ }),

/***/ "4+IK":
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.module.ts ***!
  \*************************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-routing.module */ "3Bst");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.page */ "S9xc");







let AccountPageModule = class AccountPageModule {
};
AccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountPageRoutingModule"]
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
    })
], AccountPageModule);



/***/ }),

/***/ "E4AK":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>Account</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Account</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col class=\"ion-padding\">\n        <ion-item lines=\"none\">\n          <ion-avatar slot=\"start\">\n              <img src=\"../../../assets/images/user-avatar.png\">\n          </ion-avatar>\n          <ion-label class=\"ion-no-margin\">\n            <p>{{ customer_name }}</p>\n            <span>{{ customer_email }}</span>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-no-padding\">\n      <ion-list>\n\n        <ion-item detail lines=\"none\" class=\"ion-padding-horizontal\">\n            <ion-icon size=\"medium\" slot=\"start\" name=\"cart-outline\"></ion-icon>\n            <ion-label>           \n              <p (click)=\"shoppingChart()\">My Shopping Cart</p>\n            </ion-label>\n        </ion-item>\n\n        <ion-item detail lines=\"none\" class=\"ion-padding-horizontal\">\n          <ion-icon size=\"medium\" slot=\"start\" name=\"document-outline\"></ion-icon>\n          <ion-label>           \n            <p (click)=\"myOrder()\">My Orders</p>\n          </ion-label>\n        </ion-item>\n\n        <ion-item detail lines=\"none\" class=\"ion-padding-horizontal\">\n          <ion-icon size=\"medium\" slot=\"start\" name=\"map-outline\"></ion-icon>\n          <ion-label>           \n            <p (click)=\"myAddress()\">My Addresses</p>\n          </ion-label>\n        </ion-item>\n\n        <ion-item detail lines=\"none\" class=\"ion-padding-horizontal\">\n          <ion-icon size=\"medium\" slot=\"start\" name=\"card-outline\"></ion-icon>\n          <ion-label>           \n            <p (click)=\"myPayments()\">My Payments Methods</p>\n          </ion-label>\n        </ion-item>\n\n        <ion-item detail lines=\"none\" class=\"ion-padding-horizontal\">\n          <ion-icon size=\"medium\" slot=\"start\" name=\"settings-outline\"></ion-icon>\n          <ion-label>           \n            <p (click)=\"appSetting()\">App Settings</p>\n          </ion-label>\n        </ion-item>\n\n      </ion-list>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-padding\">\n        <ion-button\n        (click)=\"signOut()\"\n        class=\"action-button\"\n        expand=\"block\"\n        fill=\"solid\"\n        color=\"light\"\n        type=\"button\">\n      <div class=\"button-text\">\n        <span>Sign Out</span>\n        <ion-icon name=\"log-out-outline\"></ion-icon>\n      </div>\n      </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "S9xc":
/*!***********************************************!*\
  !*** ./src/app/pages/account/account.page.ts ***!
  \***********************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./account.page.html */ "E4AK");
/* harmony import */ var _account_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account.page.scss */ "c5PT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let AccountPage = class AccountPage {
    constructor(router, alertController) {
        this.router = router;
        this.alertController = alertController;
        this.menu = [
            {
                icon: 'cart-outline',
                title: 'My Shopping Cart',
                action: "shoppingChart()"
            },
            {
                icon: 'document-outline',
                title: 'My Orders',
                action: "myOrder()"
            },
            {
                icon: 'map-outline',
                title: 'My Addresses',
                action: "myAddress()"
            },
            {
                icon: 'card-outline',
                title: 'My Payments Methods',
                action: "myPayments()"
            },
            {
                icon: 'settings-outline',
                title: 'App Settings',
                action: "appSetting()"
            },
        ];
        this.customer_name = localStorage.getItem('customer_name');
        this.customer_email = localStorage.getItem('customer_email');
        this.isLogging();
    }
    ngOnInit() {
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
    signOut() {
        this.showConfirm();
    }
    appSetting() {
        console.log('Apps Setting');
    }
    myPayments() { console.log('My Payments'); }
    myAddress() { console.log('My Address'); }
    myOrder() {
        this.router.navigate(['tabs/cart']);
    }
    shoppingChart() {
        this.router.navigate(['tabs/cart']);
    }
    showConfirm() {
        this.alertController.create({
            header: 'Konfirmasi',
            cssClass: 'my-custom-class',
            message: 'Apakah anda yakin untuk signout ?',
            buttons: [
                {
                    text: 'Batal',
                    handler: () => {
                    }
                },
                {
                    text: 'Signout',
                    handler: () => {
                        this.router.navigate(['/onboarding']);
                        localStorage.removeItem('customer_id');
                        localStorage.removeItem('customer_name');
                        localStorage.removeItem('customer_email');
                        localStorage.clear();
                    }
                }
            ]
        }).then(res => {
            res.present();
        });
    }
};
AccountPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
AccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-account',
        template: _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AccountPage);



/***/ }),

/***/ "c5PT":
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-avatar {\n  width: 52px;\n  height: 52px;\n  --border-radius: 18px;\n}\n\np {\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 22px;\n  color: #181725;\n}\n\nspan {\n  font-size: 14px;\n  line-height: 18px;\n  color: #7c7c7c;\n}\n\nion-list {\n  width: 100%;\n}\n\nion-list ion-item {\n  --inner-padding-end: 0;\n  border-bottom: 1px solid rgba(228, 228, 228, 0.6);\n}\n\nion-list ion-item ion-icon[slot=start] {\n  color: var(--ion-color-primary);\n}\n\nion-title {\n  font-weight: 700;\n}\n\n.action-button {\n  --border-radius: 12px;\n  --box-shadow: none !important;\n  height: 48px;\n}\n\n.action-button span {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 22px;\n  text-transform: initial;\n  color: var(--ion-color-primary);\n}\n\n.action-button .button-text {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 0 8px;\n}\n\n.action-button .button-text ion-icon {\n  font-size: 20px;\n  color: var(--ion-color-primary);\n}\n\n.my-custom-class {\n  --backdrop-opacity: 0.2;\n  --background: linear-gradient(90deg, rgba(165, 255, 192, 1) 1%, rgba(0, 212, 255, 1) 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxzQkFBQTtFQUNBLGlEQUFBO0FBQ0o7O0FBQ0k7RUFDRSwrQkFBQTtBQUNOOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FBREY7O0FBR0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7QUFESjs7QUFJRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFGSjs7QUFJSTtFQUNFLGVBQUE7RUFDQSwrQkFBQTtBQUZOOztBQU9BO0VBQ0UsdUJBQUE7RUFDQSwwRkFBQTtBQUpGIiwiZmlsZSI6ImFjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhciB7XG4gIHdpZHRoOiA1MnB4O1xuICBoZWlnaHQ6IDUycHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMThweDtcbn1cblxucCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICMxODE3MjU7XG59XG5cbnNwYW4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogIzdjN2M3Yztcbn1cblxuaW9uLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcblxuICBpb24taXRlbSB7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMjgsIDIyOCwgMjI4LCAwLjYpO1xuXG4gICAgaW9uLWljb25bc2xvdD1cInN0YXJ0XCJdIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxuICB9XG59XG5cbmlvbi10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5hY3Rpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0OHB4O1xuXG4gIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cblxuICAuYnV0dG9uLXRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCA4cHg7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIH1cbiAgfVxufVxuXG4ubXktY3VzdG9tLWNsYXNzIHtcbiAgLS1iYWNrZHJvcC1vcGFjaXR5OiAwLjI7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDE2NSwgMjU1LCAxOTIsIDEpIDElLCByZ2JhKDAsIDIxMiwgMjU1LCAxKSAxMDAlKTtcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=account-account-module-es2015.js.map