(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-category-listing-category-listing-module"], {
    /***/
    "CRB6":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/category-listing/category-listing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: CategoryListingPageModule */

    /***/
    function CRB6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryListingPageModule", function () {
        return CategoryListingPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _category_listing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./category-listing-routing.module */
      "n0dn");
      /* harmony import */


      var _category_listing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./category-listing.page */
      "GZ8V");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "j1ZV");

      var CategoryListingPageModule = function CategoryListingPageModule() {
        _classCallCheck(this, CategoryListingPageModule);
      };

      CategoryListingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _category_listing_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryListingPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_category_listing_page__WEBPACK_IMPORTED_MODULE_6__["CategoryListingPage"]]
      })], CategoryListingPageModule);
      /***/
    },

    /***/
    "GZ8V":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/category-listing/category-listing.page.ts ***!
      \*****************************************************************/

    /*! exports provided: CategoryListingPage */

    /***/
    function GZ8V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryListingPage", function () {
        return CategoryListingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_category_listing_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./category-listing.page.html */
      "yWBl");
      /* harmony import */


      var _category_listing_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./category-listing.page.scss */
      "gxDn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _filters_filters_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../filters/filters.page */
      "ePyq");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_api_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/api-url */
      "0UPu");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var CategoryListingPage = /*#__PURE__*/function () {
        function CategoryListingPage(modalCtrl, route, router, http, toastController) {
          _classCallCheck(this, CategoryListingPage);

          this.modalCtrl = modalCtrl;
          this.route = route;
          this.router = router;
          this.http = http;
          this.toastController = toastController;
          this.products = [{
            title: 'Red Apple',
            subtitle: '1Kg',
            image: 'assets/images/apple.png',
            price: 4.99,
            inCart: false
          }, {
            title: 'Ranch Eggs',
            subtitle: '12pcs',
            image: 'assets/images/eggs.png',
            price: 0.29,
            inCart: false
          }, {
            title: 'Chicken',
            subtitle: '1Kg',
            image: 'assets/images/chicken.png',
            price: 1.99,
            inCart: false
          }, {
            title: 'Waiyu Beef',
            subtitle: '1Kg',
            image: 'assets/images/meat.png',
            price: 24.99,
            inCart: false
          }];
          this.isLogging();
        }

        _createClass(CategoryListingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.category_id = this.route.snapshot.params.id;
            this.category_name = this.route.snapshot.params.name;
            var reqData = {
              "category": this.category_id
            };
            this.http.post(src_app_api_url__WEBPACK_IMPORTED_MODULE_7__["APIURL"].apiURL + 'get_list_product_by_category', reqData).subscribe(function (data) {
              _this.status = data['status'];

              if (_this.status == "Success") {
                _this.product = data['product'];
                console.log(_this.product);
              } else {
                console.log("Tidak ada produk untuk categori: " + _this.category_id);

                _this.displayToast();
              }
            });
          }
        }, {
          key: "productDetail",
          value: function productDetail(id, name) {
            this.router.navigate(['/detail', {
              id: id,
              name: name
            }]);
          }
        }, {
          key: "isLogging",
          value: function isLogging() {
            this.customer_name = localStorage.getItem('customer_name');
            this.customer_email = localStorage.getItem('customer_email');
            console.log("Email: " + this.customer_email);

            if (this.customer_name == null && this.customer_email == null) {
              this.router.navigate(['/signup']);
            } else {
              return false;
            }
          }
        }, {
          key: "displayToast",
          value: function displayToast() {
            this.toastController.create({
              message: 'Belum ada produk pada kategori ini',
              position: 'bottom',
              duration: 2000,
              buttons: [{
                side: 'end',
                icon: 'information-circle'
              }]
            }).then(function (toast) {
              toast.present();
            });
          }
        }, {
          key: "openFilter",
          value: function openFilter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.create({
                        component: _filters_filters_page__WEBPACK_IMPORTED_MODULE_5__["FiltersPage"],
                        id: 'ModalFilter'
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return CategoryListingPage;
      }();

      CategoryListingPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }];
      };

      CategoryListingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-category-listing',
        template: _raw_loader_category_listing_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_category_listing_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CategoryListingPage);
      /***/
    },

    /***/
    "gxDn":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/category-listing/category-listing.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function gxDn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-searchbar {\n  --box-shadow: 0 !important;\n  --border-radius: 8px;\n  --background: var(--ion-color-light);\n  --color: var(--ion-color-medium);\n}\n\nion-title {\n  font-weight: 700;\n}\n\nion-item {\n  --inner-padding-end: 0;\n}\n\nion-text {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXRlZ29yeS1saXN0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksc0JBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0FBR0oiLCJmaWxlIjoiY2F0ZWdvcnktbGlzdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VhcmNoYmFyIHtcbiAgICAtLWJveC1zaGFkb3c6IDAgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbmlvbi1pdGVtIHtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xufVxuaW9uLXRleHQge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */";
      /***/
    },

    /***/
    "n0dn":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/category-listing/category-listing-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: CategoryListingPageRoutingModule */

    /***/
    function n0dn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryListingPageRoutingModule", function () {
        return CategoryListingPageRoutingModule;
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


      var _category_listing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./category-listing.page */
      "GZ8V");

      var routes = [{
        path: '',
        component: _category_listing_page__WEBPACK_IMPORTED_MODULE_3__["CategoryListingPage"]
      }];

      var CategoryListingPageRoutingModule = function CategoryListingPageRoutingModule() {
        _classCallCheck(this, CategoryListingPageRoutingModule);
      };

      CategoryListingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CategoryListingPageRoutingModule);
      /***/
    },

    /***/
    "yWBl":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category-listing/category-listing.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yWBl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/explore\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ category_name }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openFilter()\">\n        <ion-icon\n          color=\"dark\"\n          slot=\"icon-only\"\n          name=\"options-outline\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">{{ category_name }}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid class=\"ion-padding-horizontal\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col class=\"ion-padding-vertical\">\n        <ion-searchbar animated class=\"ion-no-padding\"></ion-searchbar>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-no-padding\" size=\"6\" *ngFor=\"let item of product\">\n        <app-product-category-card [product]=\"item\" (click)=\"productDetail(item.product_id, item.name_item)\"></app-product-category-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-category-listing-category-listing-module-es5.js.map