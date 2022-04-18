(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "/JIQ":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-otp/modal-otp.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"modalDismiss()\">\n        <ion-icon\n          color=\"dark\"\n          slot=\"icon-only\"\n          name=\"close-outline\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  \n    <ion-grid class=\"flex-container ion-padding ion-text-center\">\n      <ion-row>\n        <ion-col class=\"ion-padding-end\">\n          <img src=\"assets/shapes/accepted.svg\" width=\"160\">\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <h5>Masukkan Kode OTP</h5>\n          <p>Masukkan kode OTP yang telah kami kirim ke email anda</p>\n            <ion-row>\n              <ion-col>\n              <ion-input [(ngModel)]=\"otp_a\" autofocus=\"true\" class=\"otp-input\" maxLength=\"1\"></ion-input>\n              <ion-input [(ngModel)]=\"otp_b\" class=\"otp-input\" maxLength=\"1\"></ion-input>\n              <ion-input [(ngModel)]=\"otp_c\" class=\"otp-input\" maxLength=\"1\"></ion-input>\n              <ion-input [(ngModel)]=\"otp_d\" class=\"otp-input\" maxLength=\"1\"></ion-input>\n              <ion-input [(ngModel)]=\"otp_e\" class=\"otp-input\" maxLength=\"1\"></ion-input>\n              <ion-input [(ngModel)]=\"otp_f\" class=\"otp-input\" maxLength=\"1\"></ion-input>\n              </ion-col>\n            </ion-row>\n          \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-button\n            class=\"action-button ion-margin-bottom\"\n            expand=\"block\"\n            fill=\"solid\"\n            color=\"primary\"\n            type=\"button\"\n            (click)=\"verifOTP()\">\n          <div class=\"button-text\">\n            <span>Verifikasi</span>\n            <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n          </div>\n          </ion-button>\n          <a class=\"link\" (click)=\"resendOTP()\">Resend OTP</a>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n</ion-content>\n");

/***/ }),

/***/ "0UPu":
/*!****************************!*\
  !*** ./src/app/api-url.ts ***!
  \****************************/
/*! exports provided: APIURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIURL", function() { return APIURL; });
class APIURL {
}
APIURL.apiURL = "https://auliaausath.site/mobile/_api_/android_dev/";


/***/ }),

/***/ "0mXc":
/*!***********************************************************!*\
  !*** ./src/app/pages/modal-failed/modal-failed.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flex-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  height: 100%;\n}\n\n.action-button {\n  --border-radius: 12px;\n  --box-shadow: none !important;\n  height: 48px;\n}\n\n.action-button span {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 22px;\n  text-transform: initial;\n  color: #ffffff;\n}\n\n.action-button .button-text {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 0 8px;\n}\n\n.action-button .button-text ion-icon {\n  font-size: 20px;\n  color: #ffffff;\n}\n\n.link {\n  text-decoration: none !important;\n  font-weight: normal;\n  font-size: 15px;\n}\n\nh5 {\n  font-weight: 600;\n  font-size: 26px;\n  line-height: 34px;\n  color: #181725;\n}\n\np {\n  font-size: 16px;\n  line-height: 24px;\n  color: #7c7c7c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtb2RhbC1mYWlsZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFBSjs7QUFFSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBQU47O0FBS0E7RUFDRSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRkYiLCJmaWxlIjoibW9kYWwtZmFpbGVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5hY3Rpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0OHB4O1xuXG4gIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgLmJ1dHRvbi10ZXh0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgOHB4O1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgfVxuICB9XG59XG5cbi5saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuaDUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDI2cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICBjb2xvcjogIzE4MTcyNTtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjN2M3YzdjO1xufVxuIl19 */");

/***/ }),

/***/ "2c9M":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
    getEngine() {
        const win = window;
        return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
    },
    available() {
        return !!this.getEngine();
    },
    isCordova() {
        return !!window.TapticEngine;
    },
    isCapacitor() {
        const win = window;
        return !!win.Capacitor;
    },
    impact(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({ style });
    },
    notification(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({ style });
    },
    selection() {
        this.impact({ style: 'light' });
    },
    selectionStart() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionStart();
        }
        else {
            engine.gestureSelectionStart();
        }
    },
    selectionChanged() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    },
    selectionEnd() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionEnd();
        }
        else {
            engine.gestureSelectionEnd();
        }
    }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
    HapticEngine.impact(options);
};




/***/ }),

/***/ "5qBy":
/*!*************************************************************!*\
  !*** ./src/app/pages/modal-accepted/modal-accepted.page.ts ***!
  \*************************************************************/
/*! exports provided: ModalAcceptedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAcceptedPage", function() { return ModalAcceptedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_accepted_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-accepted.page.html */ "LxN8");
/* harmony import */ var _modal_accepted_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-accepted.page.scss */ "hp9E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let ModalAcceptedPage = class ModalAcceptedPage {
    constructor(modalCtrl, router) {
        this.modalCtrl = modalCtrl;
        this.router = router;
    }
    ngOnInit() {
    }
    modalDismiss() {
        this.modalCtrl.dismiss();
    }
    backHome() {
        this.modalCtrl.dismiss();
        this.router.navigate(['/tabs/shop']);
    }
};
ModalAcceptedPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ModalAcceptedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-accepted',
        template: _raw_loader_modal_accepted_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_accepted_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalAcceptedPage);



/***/ }),

/***/ "6i10":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "HL3O":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/filters/filters.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"modalDismiss()\">\n        <ion-icon\n          color=\"dark\"\n          slot=\"icon-only\"\n          name=\"close-outline\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Filters</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Filters</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-grid class=\"ion-padding-horizontal\">\n    <ion-row>\n      <ion-col>\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          <ion-label slot=\"start\">\n            <ion-text> Price range </ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-range min=\"0\" max=\"500\" color=\"primary\" dualKnobs=\"true\" pin=\"true\">\n          <ion-label slot=\"start\">0</ion-label>\n          <ion-label slot=\"end\">500</ion-label>\n        </ion-range>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          <ion-label slot=\"start\">\n            <ion-text>Categories</ion-text>\n          </ion-label>\n        </ion-item>\n        <app-selectable-btn *ngFor=\"let item of categories\" \n        [item]=\"item\"\n        (state)=\"getState($event)\"\n        ></app-selectable-btn>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          <ion-label slot=\"start\">\n            <ion-text>Brand</ion-text>\n          </ion-label>\n        </ion-item>\n        <app-selectable-btn *ngFor=\"let item of brands\" \n        [item]=\"item\"\n        (state)=\"getState($event)\"\n        ></app-selectable-btn>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer class=\"ion-padding-horizontal ion-padding-bottom ion-no-border\">\n  <ion-toolbar>\n    <ion-button\n          class=\"action-button\"\n          expand=\"block\"\n          fill=\"solid\"\n          color=\"primary\"\n          type=\"button\"\n        >\n        <div class=\"button-text\">\n          <span>Search</span>\n          <ion-icon name=\"search-outline\"></ion-icon>\n        </div>\n        </ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "KeNc":
/*!*********************************************************!*\
  !*** ./src/app/pages/modal-failed/modal-failed.page.ts ***!
  \*********************************************************/
/*! exports provided: ModalFailedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFailedPage", function() { return ModalFailedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_failed_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-failed.page.html */ "rimy");
/* harmony import */ var _modal_failed_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-failed.page.scss */ "0mXc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ModalFailedPage = class ModalFailedPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
    }
    modalDismiss() {
        this.modalCtrl.dismiss();
    }
};
ModalFailedPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ModalFailedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-failed',
        template: _raw_loader_modal_failed_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_failed_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalFailedPage);



/***/ }),

/***/ "Kf9c":
/*!***************************************************!*\
  !*** ./src/app/pages/modal-otp/modal-otp.page.ts ***!
  \***************************************************/
/*! exports provided: ModalOtpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalOtpPage", function() { return ModalOtpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_otp_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-otp.page.html */ "/JIQ");
/* harmony import */ var _modal_otp_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-otp.page.scss */ "Np1y");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_api_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api-url */ "0UPu");








let ModalOtpPage = class ModalOtpPage {
    constructor(http, modalCtrl, router, toastController, loadingCtrl) {
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.toastController = toastController;
        this.loadingCtrl = loadingCtrl;
    }
    ngOnInit() { }
    modalDismiss() {
        this.modalCtrl.dismiss();
    }
    verifOTP() {
        this.otp_code = this.otp_a + this.otp_b + this.otp_c + this.otp_d + this.otp_e + this.otp_f;
        let postData = {
            "otp_code": this.otp_code,
            "token": this.token,
            "customer_id": this.customer_id
        };
        setTimeout(() => {
            this.http.post(src_app_api_url__WEBPACK_IMPORTED_MODULE_7__["APIURL"].apiURL + 'checkOtp', postData)
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
                    this.modalDismiss();
                    this.router.navigate(['/signin']);
                }
                else {
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
            });
        }, 800);
    }
    presentLoadingWithOptions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                spinner: 'lines',
                duration: 1500,
                message: 'Verifikasi OTP...',
                translucent: true,
                cssClass: 'custom-class custom-loading'
            });
            return yield loading.present();
        });
    }
    resendOTP() {
        this.toastController.create({
            message: "Kode OTP telah dikirim ulang",
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
    }
};
ModalOtpPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] }
];
ModalOtpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-modal-otp',
        template: _raw_loader_modal_otp_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_otp_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalOtpPage);



/***/ }),

/***/ "LxN8":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-accepted/modal-accepted.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"modalDismiss()\">\n        <ion-icon\n          color=\"dark\"\n          slot=\"icon-only\"\n          name=\"close-outline\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid class=\"flex-container ion-padding ion-text-center\">\n    <ion-row>\n      <ion-col class=\"ion-padding-end\">\n        <img src=\"assets/shapes/accepted.svg\" width=\"160\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h5>Your order has been accepted</h5>\n        <p>Your order was placed succesfully. Now you can track it</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button\n          class=\"action-button ion-margin-bottom\"\n          expand=\"block\"\n          fill=\"solid\"\n          color=\"primary\"\n          type=\"button\"\n        >\n        <div class=\"button-text\">\n          <span>Track Order</span>\n          <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n        </div>\n        </ion-button>\n        <a class=\"link\" (click)=\"backHome()\">Back to home</a>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "Np1y":
/*!*****************************************************!*\
  !*** ./src/app/pages/modal-otp/modal-otp.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flex-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  height: 100%;\n}\n\n.action-button {\n  --border-radius: 12px;\n  --box-shadow: none !important;\n  height: 48px;\n}\n\n.action-button span {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 22px;\n  text-transform: initial;\n  color: #ffffff;\n}\n\n.action-button .button-text {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 0 8px;\n}\n\n.action-button .button-text ion-icon {\n  font-size: 20px;\n  color: #ffffff;\n}\n\n.link {\n  text-decoration: none !important;\n  font-weight: normal;\n  font-size: 15px;\n}\n\nh5 {\n  font-weight: 600;\n  font-size: 26px;\n  line-height: 34px;\n  color: #181725;\n}\n\np {\n  font-size: 16px;\n  line-height: 24px;\n  color: #7c7c7c;\n}\n\n.otp-input {\n  display: inline-block !important;\n  width: 40px !important;\n  height: 40px !important;\n  margin: 3px !important;\n  border-radius: 10% !important;\n  border: 2px solid #35B175 !important;\n  --background:#e1e1e1 !important;\n  --padding-start:0px !important;\n  font-weight: bolder;\n  color: #000 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtb2RhbC1vdHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFDTjs7QUFFSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFBTjs7QUFFTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBQVI7O0FBS0U7RUFDRSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRko7O0FBS0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRko7O0FBSUU7RUFDRSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQURKIiwiZmlsZSI6Im1vZGFsLW90cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gIC5hY3Rpb24tYnV0dG9uIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICBcbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgfVxuICBcbiAgICAuYnV0dG9uLXRleHQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDAgOHB4O1xuICBcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5saW5rIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICBcbiAgaDUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICAgIGNvbG9yOiAjMTgxNzI1O1xuICB9XG4gIFxuICBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgY29sb3I6ICM3YzdjN2M7XG4gIH1cbiAgLm90cC1pbnB1dHtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICAgIHdpZHRoOjQwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6NDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjozcHggIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAxMCUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzVCMTc1ICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiNlMWUxZTEgIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6MHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICB9Il19 */");

/***/ }),

/***/ "NqGI":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "U/uv":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-92848855.js */ "sxy2");
/* harmony import */ var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-eea61379.js */ "ItpF");
/* harmony import */ var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-7b8ba70a.js */ "2c9M");




const createButtonActiveGesture = (el, isButton) => {
    let currentTouchedButton;
    let initialTouchedButton;
    const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
        if (typeof document === 'undefined') {
            return;
        }
        const target = document.elementFromPoint(x, y);
        if (!target || !isButton(target)) {
            clearActiveButton();
            return;
        }
        if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
        }
    };
    const setActiveButton = (button, hapticFeedbackFn) => {
        currentTouchedButton = button;
        if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
        hapticFeedbackFn();
    };
    const clearActiveButton = (dispatchClick = false) => {
        if (!currentTouchedButton) {
            return;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
        /**
         * Clicking on one button, but releasing on another button
         * does not dispatch a click event in browsers, so we
         * need to do it manually here. Some browsers will
         * dispatch a click if clicking on one button, dragging over
         * another button, and releasing on the original button. In that
         * case, we need to make sure we do not cause a double click there.
         */
        if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
        }
        currentTouchedButton = undefined;
    };
    return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
        el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
        onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
        onEnd: () => {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
        }
    });
};




/***/ }),

/***/ "ePyq":
/*!***********************************************!*\
  !*** ./src/app/pages/filters/filters.page.ts ***!
  \***********************************************/
/*! exports provided: FiltersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersPage", function() { return FiltersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_filters_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./filters.page.html */ "HL3O");
/* harmony import */ var _filters_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters.page.scss */ "eXtL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let FiltersPage = class FiltersPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.categories = [
            { name: 'Bakery', active: true },
            { name: 'Fresh Snacks', active: false },
            { name: 'Fresh Meats', active: false },
            { name: 'Fresh Fruits', active: false },
            { name: 'Cooking Oils', active: false },
        ];
        this.brands = [
            { name: 'Grand Western', active: false },
            { name: 'Bimbo', active: true },
            { name: 'Heinz', active: true },
            { name: 'Helmans', active: false },
            { name: 'Coca Cola', active: false },
        ];
    }
    ngOnInit() { }
    modalDismiss() {
        this.modalCtrl.dismiss();
    }
    getState(evt) {
        const catAux = this.categories.findIndex((item) => item.name == evt.name);
        const brandAux = this.brands.findIndex((item) => item.name == evt.name);
        if (catAux > -1)
            this.categories[catAux] = evt;
        if (brandAux > -1)
            this.brands[brandAux] = evt;
    }
};
FiltersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
FiltersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-filters',
        template: _raw_loader_filters_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_filters_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FiltersPage);



/***/ }),

/***/ "eXtL":
/*!*************************************************!*\
  !*** ./src/app/pages/filters/filters.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".action-button {\n  --border-radius: 12px;\n  --box-shadow: none !important;\n  height: 48px;\n}\n.action-button span {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 22px;\n  text-transform: initial;\n  color: #ffffff;\n}\n.action-button .button-text {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 0 8px;\n}\n.action-button .button-text ion-icon {\n  font-size: 20px;\n  color: #ffffff;\n}\nion-footer ion-toolbar {\n  --background: transparent !important;\n}\nion-title {\n  font-weight: 700;\n}\nion-text {\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmaWx0ZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFBSjtBQUVJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFBTjtBQU1FO0VBQ0Usb0NBQUE7QUFISjtBQU9BO0VBQ0UsZ0JBQUE7QUFKRjtBQU9BO0VBQ0ksZ0JBQUE7QUFKSiIsImZpbGUiOiJmaWx0ZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3Rpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0OHB4O1xuXG4gIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgLmJ1dHRvbi10ZXh0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgOHB4O1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgfVxuICB9XG59XG5cbmlvbi1mb290ZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICB9XG59XG5cbmlvbi10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmlvbi10ZXh0IHtcbiAgICBmb250LXdlaWdodDogNzAwO1xufSJdfQ== */");

/***/ }),

/***/ "hp9E":
/*!***************************************************************!*\
  !*** ./src/app/pages/modal-accepted/modal-accepted.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flex-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  height: 100%;\n}\n\n.action-button {\n  --border-radius: 12px;\n  --box-shadow: none !important;\n  height: 48px;\n}\n\n.action-button span {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 22px;\n  text-transform: initial;\n  color: #ffffff;\n}\n\n.action-button .button-text {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 0 8px;\n}\n\n.action-button .button-text ion-icon {\n  font-size: 20px;\n  color: #ffffff;\n}\n\n.link {\n  text-decoration: none !important;\n  font-weight: normal;\n  font-size: 15px;\n}\n\nh5 {\n  font-weight: 600;\n  font-size: 26px;\n  line-height: 34px;\n  color: #181725;\n}\n\np {\n  font-size: 16px;\n  line-height: 24px;\n  color: #7c7c7c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtb2RhbC1hY2NlcHRlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQUNOOztBQUVJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUFOOztBQUVNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFBUjs7QUFLRTtFQUNFLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRko7O0FBS0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFLRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFGSiIsImZpbGUiOiJtb2RhbC1hY2NlcHRlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gIC5hY3Rpb24tYnV0dG9uIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICBcbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgfVxuICBcbiAgICAuYnV0dG9uLXRleHQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDAgOHB4O1xuICBcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5saW5rIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICBcbiAgaDUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICAgIGNvbG9yOiAjMTgxNzI1O1xuICB9XG4gIFxuICBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgY29sb3I6ICM3YzdjN2M7XG4gIH1cbiAgIl19 */");

/***/ }),

/***/ "rimy":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-failed/modal-failed.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"modalDismiss()\">\n        <ion-icon\n          color=\"dark\"\n          slot=\"icon-only\"\n          name=\"close-outline\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid class=\"flex-container ion-padding ion-text-center\">\n    <ion-row>\n      <ion-col>\n        <img src=\"assets/shapes/order.svg\" width=\"160\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h5>Oops! Order Failed</h5>\n        <p>Something went wrong and your order could not be placed</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button\n          class=\"action-button ion-margin-bottom\"\n          expand=\"block\"\n          fill=\"solid\"\n          color=\"primary\"\n          type=\"button\"\n        >\n        <div class=\"button-text\">\n          <span>Try Again</span>\n          <ion-icon name=\"sync-outline\"></ion-icon>\n        </div>\n        </ion-button>\n        <a class=\"link\" [routerLink]=\"\">Back to home</a>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "sPtc":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-5641d27f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
    return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction, animation);
        }
    }
    return false;
};




/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map