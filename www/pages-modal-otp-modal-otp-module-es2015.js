(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-modal-otp-modal-otp-module"],{

/***/ "JuFO":
/*!*************************************************************!*\
  !*** ./src/app/pages/modal-otp/modal-otp-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ModalOtpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalOtpPageRoutingModule", function() { return ModalOtpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modal_otp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-otp.page */ "Kf9c");




const routes = [
    {
        path: '',
        component: _modal_otp_page__WEBPACK_IMPORTED_MODULE_3__["ModalOtpPage"]
    }
];
let ModalOtpPageRoutingModule = class ModalOtpPageRoutingModule {
};
ModalOtpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalOtpPageRoutingModule);



/***/ }),

/***/ "PSp6":
/*!*****************************************************!*\
  !*** ./src/app/pages/modal-otp/modal-otp.module.ts ***!
  \*****************************************************/
/*! exports provided: ModalOtpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalOtpPageModule", function() { return ModalOtpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_otp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-otp-routing.module */ "JuFO");
/* harmony import */ var _modal_otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-otp.page */ "Kf9c");







let ModalOtpPageModule = class ModalOtpPageModule {
};
ModalOtpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_otp_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalOtpPageRoutingModule"]
        ],
        declarations: [_modal_otp_page__WEBPACK_IMPORTED_MODULE_6__["ModalOtpPage"]]
    })
], ModalOtpPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-modal-otp-modal-otp-module-es2015.js.map