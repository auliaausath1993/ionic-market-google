(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signin-signin-module"],{

/***/ "3P4L":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signin/signin.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n  <ion-grid class=\"ion-padding-horizontal\">\n    <ion-row class=\"ion-padding-vertical\">\n      <ion-col size=\"8\" class=\"ion-padding-vertical\">\n        <h1 class=\"title\">Welcome back</h1>\n        <ion-text class=\"mb\">Enter your email and password for signing in.</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-padding-top\">\n      <ion-col>\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"signIn()\">\n          <ion-item lines=\"none\" class=\"ion-no-padding\">\n            <ion-label class=\"input-label\" position=\"stacked\">Email Address</ion-label>\n            <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n          </ion-item>\n          <div class=\"errors-container\" *ngIf=\"loginForm.get('email').invalid && (loginForm.get('email').dirty || loginForm.get('email').touched)\">\n            <ng-container *ngIf=\"loginForm.get('email').errors.required\">Email is required</ng-container>\n            <ng-container *ngIf=\"loginForm.get('email').errors.invalidEmail\">Email is invalid</ng-container>\n          </div>\n          <ion-item lines=\"none\" class=\"ion-no-padding\">\n            <ion-label class=\"input-label\" position=\"stacked\">Password</ion-label>\n            <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n          </ion-item>\n          <div class=\"errors-container\" *ngIf=\"loginForm.get('password').invalid && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\n            <ng-container *ngIf=\"loginForm.get('password').errors.required\">\n              Password is required\n            </ng-container>\n            <ng-container *ngIf=\"loginForm.get('password').errors.invalidPassword\">\n              {{loginForm.get('password').errors.message}}\n            </ng-container>\n          </div>\n\n          <ion-button\n          [disabled]=\"loginForm.invalid\"\n          class=\"action-button ion-margin-top\"\n          expand=\"block\"\n          fill=\"solid\"\n          color=\"primary\"\n          type=\"submit\">\n          <div class=\"button-text\">\n            <span>Sign In</span>\n            <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n          </div>\n        </ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-text-center ion-padding-bottom\">\n        <a class=\"link\" [routerLink]=\"\">Forgot password?</a>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "7DcM":
/*!***********************************************!*\
  !*** ./src/app/pages/signin/signin.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1.title {\n  font-weight: 600;\n  font-size: 26px;\n  line-height: 30px;\n  color: #181725;\n}\n\nion-grid {\n  height: 100%;\n}\n\nion-text {\n  font-size: 14px;\n  line-height: 24px;\n  color: #7c7c7c;\n}\n\nion-item {\n  --background: transparent;\n  --inner-padding-end: 0;\n}\n\nion-item ion-input {\n  border-bottom: 1px solid rgba(228, 228, 228, 0.6);\n  box-sizing: border-box;\n  background: #ffffff;\n}\n\nion-item ion-toggle {\n  --background: rgba(153, 153, 153, 0.8);\n}\n\n.action-button {\n  --border-radius: 12px;\n  --box-shadow: none !important;\n  height: 48px;\n}\n\n.action-button span {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 22px;\n  text-transform: initial;\n  color: #ffffff;\n}\n\n.action-button .button-text {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 0 8px;\n}\n\n.action-button .button-text ion-icon {\n  font-size: 20px;\n  color: #ffffff;\n}\n\n.mb {\n  margin-bottom: 16px;\n}\n\n.link {\n  text-decoration: none !important;\n  font-weight: normal;\n  font-size: 15px;\n  line-height: 20px;\n}\n\n.input-label {\n  font-weight: 600;\n  color: #151522;\n  margin-bottom: 16px;\n}\n\n.caption {\n  color: #151522;\n}\n\n.errors-container {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--ion-color-danger);\n  margin: 8px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWduaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxpREFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLHNDQUFBO0FBQUo7O0FBSUE7RUFDRSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQURGOztBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFESjs7QUFJRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFGSjs7QUFJSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBRk47O0FBT0E7RUFDRSxtQkFBQTtBQUpGOztBQU9BO0VBQ0UsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUpGOztBQU9BO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7QUFKRjs7QUFPQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQUpGIiwiZmlsZSI6InNpZ25pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMS50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjMTgxNzI1O1xufVxuXG5pb24tZ3JpZCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogIzdjN2M3Yztcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuXG4gIGlvbi1pbnB1dCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjI4LCAyMjgsIDIyOCwgMC42KTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIH1cblxuICBpb24tdG9nZ2xlIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMTUzLCAxNTMsIDE1MywgMC44KTtcbiAgfVxufVxuXG4uYWN0aW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDhweDtcblxuICBzcGFuIHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuXG4gIC5idXR0b24tdGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwIDhweDtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIH1cbiAgfVxufVxuXG4ubWIge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4ubGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uaW5wdXQtbGFiZWwge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzE1MTUyMjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmNhcHRpb24ge1xuICBjb2xvcjogIzE1MTUyMjtcbn1cblxuLmVycm9ycy1jb250YWluZXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgbWFyZ2luOiA4cHggMDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "9PJG":
/*!***********************************************!*\
  !*** ./src/app/pages/signin/signin.module.ts ***!
  \***********************************************/
/*! exports provided: SigninPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageModule", function() { return SigninPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _signin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signin-routing.module */ "lJO5");
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin.page */ "Vk5M");







let SigninPageModule = class SigninPageModule {
};
SigninPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signin_routing_module__WEBPACK_IMPORTED_MODULE_5__["SigninPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_6__["SigninPage"]]
    })
], SigninPageModule);



/***/ }),

/***/ "Vk5M":
/*!*********************************************!*\
  !*** ./src/app/pages/signin/signin.page.ts ***!
  \*********************************************/
/*! exports provided: SigninPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPage", function() { return SigninPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./signin.page.html */ "3P4L");
/* harmony import */ var _signin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin.page.scss */ "7DcM");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_api_url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/api-url */ "0UPu");









let SigninPage = class SigninPage {
    constructor(http, formBuilder, router, toastController) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.router = router;
        this.toastController = toastController;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        });
    }
    signIn() {
        if (this.loginForm.valid) {
            let postData = {
                "customer_id": this.loginForm.value.email,
                "password": this.loginForm.value.password,
                "token": "8abf4902a0db27dcb7f62a01c2fd0d0a"
            };
            this.http.post(src_app_api_url__WEBPACK_IMPORTED_MODULE_8__["APIURL"].apiURL + 'login', postData)
                .subscribe(data => {
                this.status = data['status'];
                this.is_otp = data['kirim_otp'];
                console.log(this.is_otp);
                if (this.is_otp === true) {
                    this.toastController.create({
                        message: "Status akun anda sedang ditangguhkan. Silakan hubungi Admin untuk aktivasi melalui menu Chat pada icon di pojok kanan atau melalui WhatsApp di menu informasi",
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
                else if (this.status == "Success") {
                    console.log(data);
                    this.loginForm.reset();
                    localStorage.setItem('customer_id', data['customer_id']);
                    localStorage.setItem('customer_name', data['customer_name']);
                    localStorage.setItem('customer_email', data['customer_email']);
                    this.router.navigate(['/tabs/shop']);
                }
                else if (this.status == "Failed") {
                    this.toastController.create({
                        message: data['error'],
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
                        message: data['error'],
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
            });
        }
        else {
            console.log('invalid');
        }
    }
};
SigninPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] }
];
SigninPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-signin',
        template: _raw_loader_signin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SigninPage);



/***/ }),

/***/ "lJO5":
/*!*******************************************************!*\
  !*** ./src/app/pages/signin/signin-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SigninPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageRoutingModule", function() { return SigninPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin.page */ "Vk5M");




const routes = [
    {
        path: '',
        component: _signin_page__WEBPACK_IMPORTED_MODULE_3__["SigninPage"]
    }
];
let SigninPageRoutingModule = class SigninPageRoutingModule {
};
SigninPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SigninPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-signin-signin-module-es2015.js.map