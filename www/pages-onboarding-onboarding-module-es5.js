(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-onboarding-onboarding-module"], {
    /***/
    "40Vc":
    /*!*******************************************************!*\
      !*** ./src/app/pages/onboarding/onboarding.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function Vc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n}\n\n.background-opts {\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  --background: transparent;\n}\n\nion-grid {\n  width: 100%;\n}\n\n.gradient {\n  background: black;\n  background: linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0) 85%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#000000\",endColorstr=\"#000000\",GradientType=1);\n}\n\n.flex-between {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nion-card {\n  --background: transparent;\n  box-shadow: none;\n}\n\nion-card ion-card-title {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 28px;\n  line-height: 32px;\n  text-align: center;\n  color: #ffffff;\n}\n\nion-card p {\n  font-size: 14px;\n  line-height: 22px;\n  font-weight: normal;\n  color: rgba(255, 255, 255, 0.85);\n}\n\nion-label,\nion-card-title {\n  color: #ffffff !important;\n  text-shadow: 0px 16px 24px rgba(50, 50, 71, 0.08), 0px 12px 12px rgba(50, 50, 71, 0.08);\n}\n\n.action-button {\n  --border-radius: 12px;\n  --box-shadow: none !important;\n  height: 48px;\n}\n\n.action-button span {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 22px;\n  text-transform: initial;\n  color: #ffffff;\n}\n\n.action-button .button-text {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 0 8px;\n}\n\n.action-button .button-text ion-icon {\n  font-size: 20px;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxvbmJvYXJkaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBRUEseUJBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBV0EsaUVBQUE7RUFDQSxnSEFBQTtBQVJGOztBQVdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFSRjs7QUFXQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUFSRjs7QUFVRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFSSjs7QUFXRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUFUSjs7QUFhQTs7RUFFRSx5QkFBQTtFQUNBLHVGQUFBO0FBVkY7O0FBY0E7RUFDRSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQVhGOztBQWFFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFYSjs7QUFjRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFaSjs7QUFjSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBWk4iLCJmaWxlIjoib25ib2FyZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5iYWNrZ3JvdW5kLW9wdHMge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAvLyBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxMDAwcHQgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tZ3JpZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZ3JhZGllbnQge1xuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KFxuICAgIDBkZWcsXG4gICAgcmdiYSgwLCAwLCAwLCAxKSAwJSxcbiAgICByZ2JhKDAsIDAsIDAsIDApIDg1JVxuICApO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcbiAgICAwZGVnLFxuICAgIHJnYmEoMCwgMCwgMCwgMSkgMCUsXG4gICAgcmdiYSgwLCAwLCAwLCAwKSA4NSVcbiAgKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMCwgMCwgMSkgMCUsIHJnYmEoMCwgMCwgMCwgMCkgODUlKTtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj1cIiMwMDAwMDBcIixlbmRDb2xvcnN0cj1cIiMwMDAwMDBcIixHcmFkaWVudFR5cGU9MSk7XG59XG5cbi5mbGV4LWJldHdlZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW9uLWNhcmQge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBub25lO1xuXG4gIGlvbi1jYXJkLXRpdGxlIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XG4gIH1cbn1cblxuaW9uLWxhYmVsLFxuaW9uLWNhcmQtdGl0bGUge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICB0ZXh0LXNoYWRvdzogMHB4IDE2cHggMjRweCByZ2JhKDUwLCA1MCwgNzEsIDAuMDgpLFxuICAgIDBweCAxMnB4IDEycHggcmdiYSg1MCwgNTAsIDcxLCAwLjA4KTtcbn1cblxuLmFjdGlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ4cHg7XG5cbiAgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAuYnV0dG9uLXRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCA4cHg7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "Fxwi":
    /*!*****************************************************!*\
      !*** ./src/app/pages/onboarding/onboarding.page.ts ***!
      \*****************************************************/

    /*! exports provided: OnboardingPage */

    /***/
    function Fxwi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnboardingPage", function () {
        return OnboardingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_onboarding_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./onboarding.page.html */
      "cwH1");
      /* harmony import */


      var _onboarding_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./onboarding.page.scss */
      "40Vc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var OnboardingPage = /*#__PURE__*/function () {
        function OnboardingPage(router) {
          _classCallCheck(this, OnboardingPage);

          this.router = router;
          this.background = {
            backgroundImage: 'url(https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80)'
          };
        }

        _createClass(OnboardingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "signUp",
          value: function signUp() {
            this.router.navigate(['/signup']);
          }
        }]);

        return OnboardingPage;
      }();

      OnboardingPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      OnboardingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-onboarding',
        template: _raw_loader_onboarding_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_onboarding_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OnboardingPage);
      /***/
    },

    /***/
    "L7Uo":
    /*!*******************************************************!*\
      !*** ./src/app/pages/onboarding/onboarding.module.ts ***!
      \*******************************************************/

    /*! exports provided: OnboardingPageModule */

    /***/
    function L7Uo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnboardingPageModule", function () {
        return OnboardingPageModule;
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


      var _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./onboarding-routing.module */
      "NPBV");
      /* harmony import */


      var _onboarding_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./onboarding.page */
      "Fxwi");

      var OnboardingPageModule = function OnboardingPageModule() {
        _classCallCheck(this, OnboardingPageModule);
      };

      OnboardingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_5__["OnboardingPageRoutingModule"]],
        declarations: [_onboarding_page__WEBPACK_IMPORTED_MODULE_6__["OnboardingPage"]]
      })], OnboardingPageModule);
      /***/
    },

    /***/
    "NPBV":
    /*!***************************************************************!*\
      !*** ./src/app/pages/onboarding/onboarding-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: OnboardingPageRoutingModule */

    /***/
    function NPBV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnboardingPageRoutingModule", function () {
        return OnboardingPageRoutingModule;
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


      var _onboarding_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./onboarding.page */
      "Fxwi");

      var routes = [{
        path: '',
        component: _onboarding_page__WEBPACK_IMPORTED_MODULE_3__["OnboardingPage"]
      }];

      var OnboardingPageRoutingModule = function OnboardingPageRoutingModule() {
        _classCallCheck(this, OnboardingPageRoutingModule);
      };

      OnboardingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OnboardingPageRoutingModule);
      /***/
    },

    /***/
    "cwH1":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/onboarding/onboarding.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function cwH1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\" class=\"background-opts\" [ngStyle]=\"background\">\n  <div class=\"container\">\n    <ion-grid class=\"ion-padding-horizontal\">\n      <ion-row class=\"ion-padding-vertical\">\n        <ion-col size=\"9\" class=\"ion-padding-vertical\">\n         \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid class=\"ion-padding gradient flex-between\">\n      <ion-row class=\"ion-padding-top\">\n        <ion-col>\n          <ion-card class=\"ion-text-center\">\n            <ion-card-title class=\"ion-padding-bottom\"> Welcome to Ionic Grocery</ion-card-title>\n            <ion-card-content class=\"ion-padding-bottom\">\n              <p>All your groceries needs and find low prices on high quality produce and products.</p>\n            </ion-card-content>\n          </ion-card>\n          <ion-button\n          (click)=\"signUp()\"\n          class=\"action-button\"\n          expand=\"block\"\n          fill=\"solid\"\n          color=\"primary\"\n          type=\"button\"\n        >\n          <div class=\"button-text\">\n            <span>Get started</span>\n            <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n          </div>\n        </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-onboarding-onboarding-module-es5.js.map