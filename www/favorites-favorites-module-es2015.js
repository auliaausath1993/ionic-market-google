(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favorites-favorites-module"],{

/***/ "BdBH":
/*!*****************************************************!*\
  !*** ./src/app/pages/favorites/favorites.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".action-button {\n  --border-radius: 12px;\n  --box-shadow: none !important;\n  height: 48px;\n}\n.action-button span {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 22px;\n  text-transform: initial;\n  color: #ffffff;\n}\n.action-button .button-text {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 0 8px;\n}\n.action-button .button-text ion-icon {\n  font-size: 20px;\n  color: #ffffff;\n}\nion-footer ion-toolbar {\n  --background: transparent !important;\n}\nion-title {\n  font-weight: 700;\n}\nion-item-option {\n  background: none;\n}\n.trash-button {\n  --border-radius: 16px;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  width: 42px;\n  height: 42px;\n}\n.item-options-ios {\n  border-bottom-style: none;\n}\n.ios > .trash-button {\n  width: auto !important;\n  height: auto !important;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmYXZvcml0ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUFDSjtBQUNJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFDTjtBQUVJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUFOO0FBRU07RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUFWO0FBTUk7RUFDRSxvQ0FBQTtBQUhOO0FBT0U7RUFDRSxnQkFBQTtBQUpKO0FBT0U7RUFDRSxnQkFBQTtBQUpKO0FBT0U7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFKSjtBQU9FO0VBQ0UseUJBQUE7QUFKSjtBQU9FO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFKSiIsImZpbGUiOiJmYXZvcml0ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGlvbi1idXR0b24ge1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gIFxuICAgIHNwYW4ge1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB9XG4gIFxuICAgIC5idXR0b24tdGV4dCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMCA4cHg7XG4gIFxuICAgICAgaW9uLWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGlvbi1mb290ZXIge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgXG4gIGlvbi10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBcbiAgaW9uLWl0ZW0tb3B0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICB9XG4gIFxuICAudHJhc2gtYnV0dG9uIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB3aWR0aDogNDJweDtcbiAgICBoZWlnaHQ6IDQycHg7XG4gIH1cbiAgXG4gIC5pdGVtLW9wdGlvbnMtaW9zICB7XG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbiAgfVxuICBcbiAgLmlvcyA+IC50cmFzaC1idXR0b24ge1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gIH0iXX0= */");

/***/ }),

/***/ "ICDV":
/*!*************************************************************!*\
  !*** ./src/app/pages/favorites/favorites-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: FavoritesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPageRoutingModule", function() { return FavoritesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favorites.page */ "gZ2K");




const routes = [
    {
        path: '',
        component: _favorites_page__WEBPACK_IMPORTED_MODULE_3__["FavoritesPage"]
    }
];
let FavoritesPageRoutingModule = class FavoritesPageRoutingModule {
};
FavoritesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FavoritesPageRoutingModule);



/***/ }),

/***/ "JSWD":
/*!*****************************************************!*\
  !*** ./src/app/pages/favorites/favorites.module.ts ***!
  \*****************************************************/
/*! exports provided: FavoritesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPageModule", function() { return FavoritesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _favorites_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favorites-routing.module */ "ICDV");
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favorites.page */ "gZ2K");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let FavoritesPageModule = class FavoritesPageModule {
};
FavoritesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _favorites_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavoritesPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_favorites_page__WEBPACK_IMPORTED_MODULE_6__["FavoritesPage"]]
    })
], FavoritesPageModule);



/***/ }),

/***/ "dRO/":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorites/favorites.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title> Favorites </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Favorites</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid class=\"ion-padding-horizontal\">\n    <ion-row>\n      <ion-col class=\"ion-no-padding\">\n        <ion-list>\n          <ion-item-sliding *ngFor=\"let item of favorites\">\n            <app-favorite-item [item]=\"item\" (click)=\"productDetail()\"></app-favorite-item>\n            <ion-item-options side=\"end\">\n              <ion-item-option>\n                <ion-button\n                  class=\"trash-button\"\n                  fill=\"clear\"\n                  size=\"small\"\n                  shape=\"round\"\n                  color=\"danger\"\n                >\n                  <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n                </ion-button>\n              </ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer class=\"ion-padding-horizontal ion-no-border\">\n  <ion-toolbar>\n    <ion-button\n      class=\"action-button\"\n      expand=\"block\"\n      fill=\"solid\"\n      color=\"primary\"\n      type=\"button\"\n      (click)=\"openModalFailed()\"\n    >\n      <div class=\"button-text\">\n        <span>Add to Cart</span>\n        <ion-icon name=\"cart-outline\"></ion-icon>\n      </div>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "gZ2K":
/*!***************************************************!*\
  !*** ./src/app/pages/favorites/favorites.page.ts ***!
  \***************************************************/
/*! exports provided: FavoritesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPage", function() { return FavoritesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_favorites_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./favorites.page.html */ "dRO/");
/* harmony import */ var _favorites_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favorites.page.scss */ "BdBH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_failed_modal_failed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal-failed/modal-failed.page */ "KeNc");







let FavoritesPage = class FavoritesPage {
    constructor(modalCtrl, router) {
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.favorites = [
            {
                title: 'Sprite Light',
                subtitle: '335ml',
                image: 'assets/images/sprite.png',
                price: 1.99
            },
            {
                title: 'Ranch Peppers',
                subtitle: '100g',
                image: 'assets/images/pepper.png',
                price: 0.29,
            },
            {
                title: 'Premium Mayonnaise',
                subtitle: '400g',
                image: 'assets/images/mayo.png',
                price: 3.99
            },
            {
                title: 'Light Coke',
                subtitle: '330ml',
                image: 'assets/images/coke.png',
                price: 2.99
            }
        ];
    }
    ngOnInit() {
    }
    openModalFailed() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modal_failed_modal_failed_page__WEBPACK_IMPORTED_MODULE_6__["ModalFailedPage"],
                id: 'ModalFailed',
            });
            return yield modal.present();
        });
    }
    productDetail() {
        this.router.navigate(['/detail']);
    }
};
FavoritesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
FavoritesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-favorites',
        template: _raw_loader_favorites_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_favorites_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FavoritesPage);



/***/ })

}]);
//# sourceMappingURL=favorites-favorites-module-es2015.js.map