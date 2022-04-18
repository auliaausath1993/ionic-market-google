(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-tabs-module"], {
    /***/
    "1vg1":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function vg1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"shop\">\n      <ion-icon name=\"basket-outline\"></ion-icon>\n      <ion-label>Shop</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"explore\">\n      <ion-icon name=\"search-outline\"></ion-icon>\n      <ion-label>Explore</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"cart\">\n      <ion-icon name=\"cart-outline\"></ion-icon>\n      <ion-label>Cart</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"favorites\">\n      <ion-icon name=\"heart-outline\"></ion-icon>\n      <ion-label>Favorites</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"account\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <ion-label>Account</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n";
      /***/
    },

    /***/
    "Gg5j":
    /*!*******************************************!*\
      !*** ./src/app/pages/tabs/tabs.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function Gg5j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "MM9G":
    /*!***************************************************!*\
      !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: TabsPageRoutingModule */

    /***/
    function MM9G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
        return TabsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tabs.page */
      "TA0h");

      var routes = [{
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [{
          path: 'shop',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | shop-shop-module */
            [__webpack_require__.e("default~cart-cart-module~explore-explore-module~favorites-favorites-module~pages-category-listing-ca~79070e4e"), __webpack_require__.e("common"), __webpack_require__.e("shop-shop-module")]).then(__webpack_require__.bind(null,
            /*! ../shop/shop.module */
            "wq26")).then(function (m) {
              return m.ShopPageModule;
            });
          }
        }, {
          path: 'explore',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | explore-explore-module */
            [__webpack_require__.e("default~cart-cart-module~explore-explore-module~favorites-favorites-module~pages-category-listing-ca~79070e4e"), __webpack_require__.e("common"), __webpack_require__.e("explore-explore-module")]).then(__webpack_require__.bind(null,
            /*! ../explore/explore.module */
            "h3/Z")).then(function (m) {
              return m.ExplorePageModule;
            });
          }
        }, {
          path: 'cart',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | cart-cart-module */
            [__webpack_require__.e("default~cart-cart-module~explore-explore-module~favorites-favorites-module~pages-category-listing-ca~79070e4e"), __webpack_require__.e("common"), __webpack_require__.e("cart-cart-module")]).then(__webpack_require__.bind(null,
            /*! ../cart/cart.module */
            "sFz8")).then(function (m) {
              return m.CartPageModule;
            });
          }
        }, {
          path: 'favorites',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | favorites-favorites-module */
            [__webpack_require__.e("default~cart-cart-module~explore-explore-module~favorites-favorites-module~pages-category-listing-ca~79070e4e"), __webpack_require__.e("common"), __webpack_require__.e("favorites-favorites-module")]).then(__webpack_require__.bind(null,
            /*! ../favorites/favorites.module */
            "JSWD")).then(function (m) {
              return m.FavoritesPageModule;
            });
          }
        }, {
          path: 'account',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | account-account-module */
            "account-account-module").then(__webpack_require__.bind(null,
            /*! ../account/account.module */
            "4+IK")).then(function (m) {
              return m.AccountPageModule;
            });
          }
        }, {
          path: '',
          redirectTo: '/tabs/shop',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: '/tabs/shop',
        pathMatch: 'full'
      }];

      var TabsPageRoutingModule = function TabsPageRoutingModule() {
        _classCallCheck(this, TabsPageRoutingModule);
      };

      TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TabsPageRoutingModule);
      /***/
    },

    /***/
    "TA0h":
    /*!*****************************************!*\
      !*** ./src/app/pages/tabs/tabs.page.ts ***!
      \*****************************************/

    /*! exports provided: TabsPage */

    /***/
    function TA0h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
        return TabsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "1vg1");
      /* harmony import */


      var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tabs.page.scss */
      "Gg5j");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TabsPage = function TabsPage() {
        _classCallCheck(this, TabsPage);
      };

      TabsPage.ctorParameters = function () {
        return [];
      };

      TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TabsPage);
      /***/
    },

    /***/
    "qiIP":
    /*!*******************************************!*\
      !*** ./src/app/pages/tabs/tabs.module.ts ***!
      \*******************************************/

    /*! exports provided: TabsPageModule */

    /***/
    function qiIP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
        return TabsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tabs-routing.module */
      "MM9G");
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tabs.page */
      "TA0h");

      var TabsPageModule = function TabsPageModule() {
        _classCallCheck(this, TabsPageModule);
      };

      TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
      })], TabsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-tabs-tabs-module-es5.js.map