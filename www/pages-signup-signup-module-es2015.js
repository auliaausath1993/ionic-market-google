(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"],{

/***/ "UUSl":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "eOyQ");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "XHxw");







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "XHxw":
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./signup.page.html */ "vfPX");
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.page.scss */ "bYg9");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_api_url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/api-url */ "0UPu");
/* harmony import */ var _modal_otp_modal_otp_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modal-otp/modal-otp.page */ "Kf9c");











let SignupPage = class SignupPage {
    constructor(formBuilder, router, http, toastController, loadingCtrl, modalCtrl) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.toastController = toastController;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
        this.signForm = this.formBuilder.group({
            fullName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            phoneNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        });
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modal_otp_modal_otp_page__WEBPACK_IMPORTED_MODULE_9__["ModalOtpPage"]
            });
            yield modal.present();
        });
    }
    signUp() {
        if (this.signForm.valid) {
            this.fullName = this.signForm.value.fullName;
            this.email = this.signForm.value.email;
            this.phoneNumber = this.signForm.value.phoneNumber;
            this.password = this.signForm.value.password;
            let postData = {
                "nama": this.fullName,
                "email": this.email,
                "password": this.password,
                "phone": this.phoneNumber
            };
            this.presentLoadingWithOptions();
            setTimeout(() => {
                this.http.post(src_app_api_url__WEBPACK_IMPORTED_MODULE_8__["APIURL"].apiURL + 'register_v2', postData)
                    .subscribe(data => {
                    console.log(data);
                    let status = data['status'];
                    if (status == "Success") {
                        this.toastController.create({
                            message: data['message'],
                            position: 'bottom',
                            duration: 5000,
                            buttons: [
                                {
                                    side: 'end',
                                    icon: 'information-circle'
                                }
                            ]
                        }).then((toast) => {
                            toast.present();
                        });
                        this.presentModal();
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
            }, 1500);
        }
        else {
        }
    }
    signIn() {
        this.router.navigate(['/signin']);
    }
    presentLoadingWithOptions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                spinner: 'lines',
                duration: 1500,
                message: 'Please wait...',
                translucent: true,
                cssClass: 'custom-class custom-loading'
            });
            return yield loading.present();
        });
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] }
];
SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignupPage);



/***/ }),

/***/ "bYg9":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1.title {\n  font-weight: 600;\n  font-size: 26px;\n  line-height: 30px;\n  color: #181725;\n  margin-top: 0;\n}\n\nion-grid {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nion-text {\n  font-size: 14px;\n  line-height: 24px;\n  color: #7c7c7c;\n}\n\nion-item {\n  --background: transparent;\n  --inner-padding-end: 0;\n}\n\nion-item ion-input {\n  border-bottom: 1px solid rgba(228, 228, 228, 0.6);\n  box-sizing: border-box;\n  background: #ffffff;\n}\n\nion-item ion-toggle {\n  --background: rgba(153, 153, 153, 0.8);\n}\n\n.action-button,\n.social-button {\n  --border-radius: 12px;\n  --box-shadow: none !important;\n  height: 48px;\n}\n\n.action-button span,\n.social-button span {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 22px;\n  text-transform: initial;\n  color: #ffffff;\n}\n\n.action-button .button-text,\n.social-button .button-text {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 0 8px;\n}\n\n.action-button .button-text ion-icon,\n.social-button .button-text ion-icon {\n  font-size: 20px;\n  color: #ffffff;\n}\n\n.mb {\n  margin-bottom: 16px;\n}\n\n.input-label {\n  font-weight: 600;\n  color: #151522;\n  margin-bottom: 16px;\n}\n\n.caption {\n  color: #151522;\n}\n\n.errors-container {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--ion-color-danger);\n  margin: 8px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWdudXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxpREFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLHNDQUFBO0FBQUo7O0FBSUE7O0VBRUUscUJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUFERjs7QUFHRTs7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdFOztFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFBSjs7QUFFSTs7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUNOOztBQUlBO0VBQ0UsbUJBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUFERiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEudGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDI2cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogIzE4MTcyNTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuaW9uLWdyaWQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjN2M3YzdjO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG5cbiAgaW9uLWlucHV0IHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMjgsIDIyOCwgMjI4LCAwLjYpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgfVxuXG4gIGlvbi10b2dnbGUge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgxNTMsIDE1MywgMTUzLCAwLjgpO1xuICB9XG59XG5cbi5hY3Rpb24tYnV0dG9uLFxuLnNvY2lhbC1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ4cHg7XG5cbiAgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAuYnV0dG9uLXRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCA4cHg7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB9XG4gIH1cbn1cblxuLm1iIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmlucHV0LWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMxNTE1MjI7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5jYXB0aW9uIHtcbiAgY29sb3I6ICMxNTE1MjI7XG59XG5cbi5lcnJvcnMtY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "eOyQ":
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "XHxw");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "vfPX":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n  <ion-grid class=\"ion-padding-horizontal\">\n    <ion-row>\n      <ion-col size=\"9\">\n        <h1 class=\"title\">Create an account</h1>\n        <ion-text class=\"mb\">\n          Create your account and start shopping today.\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <form [formGroup]=\"signForm\" (ngSubmit)=\"signUp()\">\n          <ion-item lines=\"none\" class=\"ion-no-padding\">\n            <ion-label class=\"input-label\" position=\"stacked\">Full Name</ion-label>\n            <ion-input type=\"text\" formControlName=\"fullName\">\n            </ion-input>\n          </ion-item>\n          <div class=\"errors-container\" *ngIf=\"signForm.get('fullName').invalid && (signForm.get('fullName').dirty || signForm.get('fullName').touched)\">\n            <ng-container *ngIf=\"signForm.get('fullName').errors.required\">Full Name is required</ng-container>\n          </div>\n\n          <ion-item lines=\"none\" class=\"ion-no-padding\">\n            <ion-label class=\"input-label\" position=\"stacked\">Email Address</ion-label>\n            <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n          </ion-item>\n          <div class=\"errors-container\" *ngIf=\"signForm.get('email').invalid && (signForm.get('email').dirty || signForm.get('email').touched)\">\n            <ng-container *ngIf=\"signForm.get('email').errors.required\">Email is required</ng-container>\n            <ng-container *ngIf=\"signForm.get('email').errors.invalidEmail\">Email is invalid</ng-container>\n          </div>\n\n          <ion-item lines=\"none\" class=\"ion-no-padding\">\n            <ion-label class=\"input-label\" position=\"stacked\">Phone Number</ion-label>\n            <ion-input type=\"text\" formControlName=\"phoneNumber\">\n            </ion-input>\n          </ion-item>\n          <div class=\"errors-container\" *ngIf=\"signForm.get('phoneNumber').invalid && (signForm.get('phoneNumber').dirty || signForm.get('phoneNumber').touched)\">\n            <ng-container *ngIf=\"signForm.get('phoneNumber').errors.required\">Phone Number is required</ng-container>\n          </div>\n\n          <ion-item lines=\"none\" class=\"ion-no-padding\">\n            <ion-label class=\"input-label\" position=\"stacked\">Password</ion-label>\n            <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n          </ion-item>\n          <div class=\"errors-container\" *ngIf=\"signForm.get('password').invalid && (signForm.get('password').dirty || signForm.get('password').touched)\">\n            <ng-container *ngIf=\"signForm.get('password').errors.required\">Password is required</ng-container>\n            <ng-container *ngIf=\"signForm.get('password').errors.invalidPassword\">{{ signForm.get('password').errors.message }}</ng-container>\n          </div>\n\n          <ion-button\n            [disabled]=\"signForm.invalid\"\n            class=\"action-button ion-margin-top\"\n            expand=\"block\"\n            fill=\"solid\"\n            color=\"primary\"\n            type=\"submit\">\n          <div class=\"button-text\">\n            <span>Sign Up</span>\n            <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n          </div>\n          </ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-text-center ion-no-padding\"> Or </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button\n          class=\"social-button\"\n          expand=\"block\"\n          fill=\"solid\"\n          color=\"facebook\" style=\"display: none;\">\n        <div class=\"button-text\" (click)=\"presentModal()\">\n          <span>Continue with Facebook</span>\n          <ion-icon name=\"logo-facebook\"></ion-icon>\n        </div>\n        </ion-button>\n\n        <ion-button\n          class=\"social-button ion-margin-top\"\n          expand=\"block\"\n          fill=\"solid\"\n          color=\"google\">\n          <div class=\"button-text\">\n            <span>Continue with Google</span>\n            <ion-icon name=\"logo-google\"></ion-icon>\n          </div>\n        </ion-button>\n\n        <ion-button\n          (click)=\"signIn()\"\n          class=\"social-button ion-margin-top\"\n          expand=\"block\"\n          fill=\"solid\"\n          color=\"primary\">\n          <div class=\"button-text\">\n            <span>Sign In</span>\n            <ion-icon name=\"log-in-outline\"></ion-icon>\n          </div>\n        </ion-button>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-signup-signup-module-es2015.js.map