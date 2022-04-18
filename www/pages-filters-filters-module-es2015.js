(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-filters-filters-module"],{

/***/ "McSc":
/*!*************************************************!*\
  !*** ./src/app/pages/filters/filters.module.ts ***!
  \*************************************************/
/*! exports provided: FiltersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersPageModule", function() { return FiltersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _filters_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filters-routing.module */ "zr9v");
/* harmony import */ var _filters_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filters.page */ "ePyq");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let FiltersPageModule = class FiltersPageModule {
};
FiltersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _filters_routing_module__WEBPACK_IMPORTED_MODULE_5__["FiltersPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_filters_page__WEBPACK_IMPORTED_MODULE_6__["FiltersPage"]]
    })
], FiltersPageModule);



/***/ }),

/***/ "zr9v":
/*!*********************************************************!*\
  !*** ./src/app/pages/filters/filters-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: FiltersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersPageRoutingModule", function() { return FiltersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _filters_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filters.page */ "ePyq");




const routes = [
    {
        path: '',
        component: _filters_page__WEBPACK_IMPORTED_MODULE_3__["FiltersPage"]
    }
];
let FiltersPageRoutingModule = class FiltersPageRoutingModule {
};
FiltersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FiltersPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-filters-filters-module-es2015.js.map