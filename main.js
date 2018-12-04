(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/schedule/schedule.component */ "./src/app/components/schedule/schedule.component.ts");




var routes = [
    {
        path: 'schedule',
        component: _components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_3__["ScheduleComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { /*enableTracing: true*/})],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n </div>\n<div>\n  <nav class='navbar navbar-default'>\n    <div class='container-fluid'>\n      <a class='navbar-brand'>{{pageTitle}}</a>\n      <ul class='nav navbar-nav'>\n        <li><a [routerLink]=\"['/schedule']\">Schedule</a></li>\n      </ul>\n    </div>\n  </nav>\n  <div class='container'>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pageTitle = 'Carta';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/schedule/schedule.component */ "./src/app/components/schedule/schedule.component.ts");
/* harmony import */ var _services_investment_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/investment-service.service */ "./src/app/services/investment-service.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");








/* Services */

/* Routing */

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_7__["ScheduleComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ],
            providers: [
                _services_investment_service_service__WEBPACK_IMPORTED_MODULE_8__["InvestmentServiceService"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/schedule/schedule.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/schedule/schedule.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title-row{\r\n    background: lightskyblue;\r\n}\r\n\r\n.title-row-bold {\r\n    font-weight: bold;\r\n}\r\n\r\n.shares-column, .cost-column {\r\n    text-align: right;\r\n}\r\n\r\n.investment-row {\r\n    background: lightgray;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.asset-row{\r\n    background: white;\r\n}\r\n\r\n.investment-quantity, .investment-cost, .asset-quantity, .asset-cost {\r\n    text-align: right;\r\n}\r\n\r\n.mat-expansion-panel, .mat-expansion-panel-header {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.total-cost{\r\n    text-align: right;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zY2hlZHVsZS9zY2hlZHVsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0NBQzVCOztBQUVEO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2NoZWR1bGUvc2NoZWR1bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZS1yb3d7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodHNreWJsdWU7XHJcbn1cclxuXHJcbi50aXRsZS1yb3ctYm9sZCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNoYXJlcy1jb2x1bW4sIC5jb3N0LWNvbHVtbiB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmludmVzdG1lbnQtcm93IHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5hc3NldC1yb3d7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmludmVzdG1lbnQtcXVhbnRpdHksIC5pbnZlc3RtZW50LWNvc3QsIC5hc3NldC1xdWFudGl0eSwgLmFzc2V0LWNvc3Qge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnRvdGFsLWNvc3R7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/schedule/schedule.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/schedule/schedule.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"panel-body\">\n    <div class=\"row title-row\">\n      <div class=\"col-md-12\">\n        <div class=\"row title-row-bold\">\n         <div class=\"col-md-12\">\n            Krakatoa Ventures Fund I, L.P.\n         </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            As of {{ investmentDate}}\n          </div>\n        </div>\n        <div class=\"row title-row-bold\">\n          <div class=\"col-md-2\">\n            Investment\n          </div>\n          <div class=\"col-md-3\">\n            Asset\n          </div>\n          <div class=\"col-md-3\">\n            Investment date\n          </div>\n          <div class=\"col-md-2 shares-column\">\n            Shares\n          </div>\n          <div class=\"col-md-2 cost-column\">\n            Cost\n          </div>\n        </div>      \n      </div>\n    </div>\n    <div class=\"row\">\n        <mat-form-field>\n            <input \n              matInput [matDatepicker]=\"picker\" \n              placeholder=\"\"\n              (dateChange)=\"addEvent('change', $event)\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n        <button (click)=\"allExpandState = true\">Expand All </button>\n        <button (click)=\"allExpandState = false\">Collapse All </button>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div *ngFor='let investment of investments' class=\"row\">\n          <div class=\"col-md-12\">\n              <mat-expansion-panel [expanded]=\"allExpandState\">\n                  <mat-expansion-panel-header class=\"row\">\n                    <mat-panel-title class=\"col-md-6\">\n                        {{ investment.name }}\n                    </mat-panel-title>\n                    <mat-panel-description class=\"col-md-6\">\n                          <div class=\"col-md-5\">\n                            <!--empty whitespace-->\n                          </div>\n                  <!--created a ternary for case of a company(Questindustries) having no shares or possibly cost, \n                          the value null was displaying 0, but the example given shows nothing,\n                          adjusted accordingly to display empty string-->                          \n                          <div class=\"col-md-3 investment-quantity\">\n                              {{ investment.quantity > 0 ? investment.quantity : \"\" }} $\n                          </div>\n                          <div class=\"col-md-4 investment-cost\">\n                              {{ investment.cost.$ > 0 ? investment.cost.$ : \"\" }} $   \n                          </div>\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n                \n                    <div *ngFor='let issued_asset of investment.issued_assets' class=\"row asset-row\">\n                      <div class=\"col-md-2\">\n                          <!--empty whitespace-->\n                      </div>\n                      <div class=\"col-md-3\">\n                        {{ issued_asset.asset_class }}\n                      </div>\n                      <div class=\"col-md-3\">\n                        {{ issued_asset.investment_date }}\n                      </div>\n                  <!--created a ternary for case of a company(Questindustries) having no shares or possibly cost, \n                          the value null was displaying 0, but the example given shows nothing,\n                          adjusted accordingly to display empty string-->\n                      <div class=\"col-md-2 asset-quantity\">\n                        {{ issued_asset.quantity > 0 ? issued_asset.quantity : \"\" }} $\n                      </div>\n                      <div class=\"col-md-2 asset-cost\">\n                        {{ issued_asset.cost.$ > 0 ? issued_asset.cost.$ : \"\" }} $\n                      </div>\n                    </div>              \n                </mat-expansion-panel>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row .title-row-bold\">\n      <div class=\"col-md-6\">\n        Total \n      </div>\n      <div class=\"col-md-6 total-cost\">\n         $ {{ totalCost }}\n        </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/schedule/schedule.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/schedule/schedule.component.ts ***!
  \***********************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_investment_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/investment-service.service */ "./src/app/services/investment-service.service.ts");



var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(_investmentService) {
        this._investmentService = _investmentService;
        this.allExpandState = true;
        this.pageTitle = "Schedule";
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        var now = new Date();
        this.investmentDate = now.toString();
        this._investmentService.getInvestments(null)
            .subscribe(function (investments) {
            _this.investments = investments;
            _this.totalCost = _this.retrieveTotal();
        }, function (error) {
            console.log("Error: " + error);
        });
    };
    ScheduleComponent.prototype.retrieveTotal = function () {
        var totalCost = 0;
        for (var i = 0; i < this.investments.length; i++) {
            totalCost += this.investments[i].cost["$"];
        }
        return totalCost;
    };
    ScheduleComponent.prototype.addEvent = function (type, event) {
        var _this = this;
        this.investmentDate = event.value.toString();
        this._investmentService.getInvestments(event.value)
            .subscribe(function (investments) {
            _this.investments = investments;
        }, function (error) {
            console.log("Error: " + error);
        });
    };
    ScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__(/*! ./schedule.component.html */ "./src/app/components/schedule/schedule.component.html"),
            styles: [__webpack_require__(/*! ./schedule.component.css */ "./src/app/components/schedule/schedule.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_investment_service_service__WEBPACK_IMPORTED_MODULE_2__["InvestmentServiceService"]])
    ], ScheduleComponent);
    return ScheduleComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");





var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
            ],
            exports: [
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
            ],
            providers: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"]],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/services/investment-service.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/investment-service.service.ts ***!
  \********************************************************/
/*! exports provided: InvestmentServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestmentServiceService", function() { return InvestmentServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/mergeMap */ "./node_modules/rxjs-compat/_esm5/add/operator/mergeMap.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");









var InvestmentServiceService = /** @class */ (function () {
    function InvestmentServiceService(_http) {
        this._http = _http;
        this.investmentUrl = "https://gist.githubusercontent.com/cranium/d8b83184bf0750f2c834760b7c9203dc/raw/a73a70716951f77b90e84b8848ff1fee46938dd1/soi.json";
    }
    InvestmentServiceService.prototype.getInvestments = function (filter) {
        var endpointUrl = this.investmentUrl;
        if (filter !== null) {
            // append ?date=YYYY-MM-DD
            var dayNumber = filter.getDate();
            var day = dayNumber > 9 ? dayNumber + "" : "0" + dayNumber;
            var monthNumber = filter.getMonth() + 1;
            var month = monthNumber > 9 ? monthNumber + "" : "0" + monthNumber;
            var year = filter.getFullYear() + "";
            var dateFilter = year + "-" + month + "-" + day;
            // FUTURE REFERENCE: uncomment this when the API is real and not a file storing json data
            // endpointUrl = endpointUrl + "?date=" + dateFilter
        }
        return this._http.get(endpointUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (response) {
            var investments = response.json();
            return investments;
        }));
    };
    InvestmentServiceService.prototype.handleError = function (error) {
        console.error(error);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error.json().error || 'Server error');
    };
    InvestmentServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], InvestmentServiceService);
    return InvestmentServiceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Daniel W\desktop\Learn_Angular\Carta\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map