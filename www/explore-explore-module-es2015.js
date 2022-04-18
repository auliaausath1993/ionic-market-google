(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["explore-explore-module"],{

/***/ "3NHg":
/*!*************************************************!*\
  !*** ./src/app/pages/explore/explore.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-searchbar {\n  --box-shadow: 0 !important;\n  --border-radius: 8px;\n  --background: var(--ion-color-light);\n  --color: var(--ion-color-medium);\n}\n\nion-title {\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxleHBsb3JlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKIiwiZmlsZSI6ImV4cGxvcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlYXJjaGJhciB7XG4gICAgLS1ib3gtc2hhZG93OiAwICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuXG5pb24tdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59Il19 */");

/***/ }),

/***/ "OYUz":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/explore/explore.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>\n      Explore\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Explore</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid class=\"ion-padding-horizontal\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col class=\"ion-padding-vertical\">\n        <ion-searchbar animated class=\"ion-no-padding\"></ion-searchbar>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-no-padding\" size=\"6\" *ngFor=\"let item of listExplore\">\n        <app-product-category [category]=\"item\" (click)=\"gotoCategory(item.id, item.name)\"></app-product-category>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "gzIV":
/*!*********************************************************!*\
  !*** ./src/app/pages/explore/explore-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ExplorePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorePageRoutingModule", function() { return ExplorePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _explore_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./explore.page */ "kfYy");




const routes = [
    {
        path: '',
        component: _explore_page__WEBPACK_IMPORTED_MODULE_3__["ExplorePage"],
    }
];
let ExplorePageRoutingModule = class ExplorePageRoutingModule {
};
ExplorePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ExplorePageRoutingModule);



/***/ }),

/***/ "h3/Z":
/*!*************************************************!*\
  !*** ./src/app/pages/explore/explore.module.ts ***!
  \*************************************************/
/*! exports provided: ExplorePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorePageModule", function() { return ExplorePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _explore_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore.page */ "kfYy");
/* harmony import */ var _explore_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./explore-routing.module */ "gzIV");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let ExplorePageModule = class ExplorePageModule {
};
ExplorePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_routing_module__WEBPACK_IMPORTED_MODULE_6__["ExplorePageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_explore_page__WEBPACK_IMPORTED_MODULE_5__["ExplorePage"]]
    })
], ExplorePageModule);



/***/ }),

/***/ "kfYy":
/*!***********************************************!*\
  !*** ./src/app/pages/explore/explore.page.ts ***!
  \***********************************************/
/*! exports provided: ExplorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorePage", function() { return ExplorePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_explore_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./explore.page.html */ "OYUz");
/* harmony import */ var _explore_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./explore.page.scss */ "3NHg");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_api_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api-url */ "0UPu");







let ExplorePage = class ExplorePage {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.categories = [
            {
                image: 'assets/images/bakery-category.png',
                category: 'Bakery & Snacks',
                color: 'red'
            },
            {
                image: 'assets/images/meats-category.png',
                category: 'Fresh Meats & Fish',
                color: 'orange'
            },
            {
                image: 'assets/images/fruit-category.png',
                category: 'Fruits & Vegetables',
                color: 'green'
            },
            {
                image: 'assets/images/oil-category.png',
                category: 'Cooking Oils & Sauces',
                color: 'magenta'
            }
        ];
        this.loadKategory();
        this.isLogging();
    }
    loadKategory() {
        this.Explore = this.http.get(src_app_api_url__WEBPACK_IMPORTED_MODULE_6__["APIURL"].apiURL + 'get_list_product_category');
        this.Explore.subscribe(result => {
            this.dataExplore = result;
            this.status = this.dataExplore.status;
            if (this.status == "Success") {
                this.listExplore = this.dataExplore.category;
                console.log(this.listExplore);
            }
            else {
                console.error('No data found');
            }
        });
    }
    gotoCategory(id, name) {
        this.router.navigate(['/listing', { id: id, name: name }]);
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
};
ExplorePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ExplorePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-explore',
        template: _raw_loader_explore_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_explore_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ExplorePage);



/***/ })

}]);
//# sourceMappingURL=explore-explore-module-es2015.js.map