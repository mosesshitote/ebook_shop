webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ebooks_ebooks_component__ = __webpack_require__("../../../../../src/app/ebooks/ebooks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ebook_detail_ebook_detail_component__ = __webpack_require__("../../../../../src/app/ebook-detail/ebook-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loans_loans_component__ = __webpack_require__("../../../../../src/app/loans/loans.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_reviews_my_reviews_component__ = __webpack_require__("../../../../../src/app/my-reviews/my-reviews.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__ebooks_ebooks_component__["a" /* EbooksComponent */] },
    { path: 'ebook/:id', component: __WEBPACK_IMPORTED_MODULE_4__ebook_detail_ebook_detail_component__["a" /* EbookDetailComponent */] },
    { path: 'loans', component: __WEBPACK_IMPORTED_MODULE_5__loans_loans_component__["a" /* LoansComponent */] },
    { path: 'my-reviews', component: __WEBPACK_IMPORTED_MODULE_6__my_reviews_my_reviews_component__["a" /* MyReviewsComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__registration_registration_component__["a" /* RegistrationComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div class=\"container row\">\n    <div class=\"col s9\">\n        <router-outlet></router-outlet>\n    </div>\n    <app-sidenav></app-sidenav>\n    <app-newsletter></app-newsletter>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__newsletter_newsletter_service__ = __webpack_require__("../../../../../src/app/newsletter/newsletter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__http_headers_service__ = __webpack_require__("../../../../../src/app/http-headers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ebook_service__ = __webpack_require__("../../../../../src/app/ebook.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__review_service__ = __webpack_require__("../../../../../src/app/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sidenav_sidenav_component__ = __webpack_require__("../../../../../src/app/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__newsletter_newsletter_component__ = __webpack_require__("../../../../../src/app/newsletter/newsletter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__sidenav_private_sidenav_private_component__ = __webpack_require__("../../../../../src/app/sidenav-private/sidenav-private.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ebooks_ebooks_component__ = __webpack_require__("../../../../../src/app/ebooks/ebooks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ebook_detail_ebook_detail_component__ = __webpack_require__("../../../../../src/app/ebook-detail/ebook-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__loans_loans_component__ = __webpack_require__("../../../../../src/app/loans/loans.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__review_review_component__ = __webpack_require__("../../../../../src/app/review/review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__my_reviews_my_reviews_component__ = __webpack_require__("../../../../../src/app/my-reviews/my-reviews.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__newsletter_newsletter_component__["a" /* NewsletterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_13__sidenav_sidenav_component__["a" /* SidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_17__sidenav_private_sidenav_private_component__["a" /* SidenavPrivateComponent */],
                __WEBPACK_IMPORTED_MODULE_19__ebooks_ebooks_component__["a" /* EbooksComponent */],
                __WEBPACK_IMPORTED_MODULE_20__ebook_detail_ebook_detail_component__["a" /* EbookDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_21__loans_loans_component__["a" /* LoansComponent */],
                __WEBPACK_IMPORTED_MODULE_22__review_review_component__["a" /* ReviewComponent */],
                __WEBPACK_IMPORTED_MODULE_23__my_reviews_my_reviews_component__["a" /* MyReviewsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__["a" /* MaterializeModule */],
                __WEBPACK_IMPORTED_MODULE_18__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__newsletter_newsletter_service__["a" /* NewsletterService */],
                __WEBPACK_IMPORTED_MODULE_7__message_service__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_8__authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_9__http_headers_service__["a" /* HttpHeadersService */],
                __WEBPACK_IMPORTED_MODULE_10__ebook_service__["a" /* EbookService */],
                __WEBPACK_IMPORTED_MODULE_11__review_service__["a" /* ReviewService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_headers_service__ = __webpack_require__("../../../../../src/app/http-headers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var User = (function () {
    function User() {
    }
    return User;
}());

var LoginData = (function () {
    function LoginData() {
    }
    return LoginData;
}());
var AuthenticationService = (function () {
    function AuthenticationService(http, message) {
        this.http = http;
        this.message = message;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post("/authentication/login/", { username: username, password: password }, { headers: __WEBPACK_IMPORTED_MODULE_4__http_headers_service__["a" /* HttpHeadersService */].get() })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (data) { return _this.setLoginData(data); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (data) { return _this.message.log("Zalogowano poprawne"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('login')));
    };
    AuthenticationService.prototype.setLoginData = function (loginData) {
        localStorage.setItem('token', loginData.key);
        localStorage.setItem('user', JSON.stringify(loginData.user_instance));
    };
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        return this.http.post("/authentication/logout/", {}, { headers: __WEBPACK_IMPORTED_MODULE_4__http_headers_service__["a" /* HttpHeadersService */].get() })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (_) { return _this.removeLoginData(); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (_) { return _this.message.log("Wylogowano poprawnie"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('logout')));
    };
    AuthenticationService.prototype.removeLoginData = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    };
    AuthenticationService.prototype.register = function (user) {
        var _this = this;
        return this.http.post("/authentication/register/", user, { headers: __WEBPACK_IMPORTED_MODULE_4__http_headers_service__["a" /* HttpHeadersService */].get() })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (_) { return _this.message.log("Zarejestrowano poprawnie"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (_) { return _this.login(user.username, user.password).subscribe(); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('register')));
    };
    AuthenticationService.prototype.getUser = function () {
        var userJson = localStorage.getItem('user');
        var user = new User();
        if (userJson !== null) {
            user = JSON.parse(userJson);
        }
        return user;
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        return localStorage.getItem('token') !== null;
    };
    AuthenticationService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error, any) {
            console.log(operation + " failed: " + error.message);
            for (var key in error.error) {
                _this.message.error(error.error[key]);
            }
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__message_service__["a" /* MessageService */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/ebook-detail/ebook-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ebook-detail/ebook-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<h5 class=\"indigo-text\">{{ ebook.name }}</h5>\n<div class=\"col s4 nopadding\">\n  <img class=\"responsive-img\" src=\"{{ ebook.image_url }}\">\n</div>\n<div class=\"col s8\">\n  <div class=\"description\">\n    <p><strong>Autor:</strong> {{ ebook.author.first_name }} {{ ebook.author.last_name }}</p>\n    <p class=\"max-desc\">{{ ebook.description }}</p>\n    <p><strong>Forma produktu:</strong> PDF</p>\n    <div class=\"button\"><a class=\"waves-effect waves-light btn\">Wypożycz</a></div>\n  </div>\n</div>\n<app-review></app-review>\n"

/***/ }),

/***/ "../../../../../src/app/ebook-detail/ebook-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EbookDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ebook_service__ = __webpack_require__("../../../../../src/app/ebook.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EbookDetailComponent = (function () {
    function EbookDetailComponent(library, route) {
        this.library = library;
        this.route = route;
    }
    EbookDetailComponent.prototype.ngOnInit = function () {
        this.getEbook();
    };
    EbookDetailComponent.prototype.getEbook = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.library.getEbook(id).subscribe(function (ebook) { return _this.ebook = ebook; });
    };
    EbookDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ebook-detail',
            template: __webpack_require__("../../../../../src/app/ebook-detail/ebook-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ebook-detail/ebook-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ebook_service__["a" /* EbookService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], EbookDetailComponent);
    return EbookDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ebook.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Ebook */
/* unused harmony export Loan */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EbookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_headers_service__ = __webpack_require__("../../../../../src/app/http-headers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Author = (function () {
    function Author() {
    }
    return Author;
}());
var Ebook = (function () {
    function Ebook() {
    }
    return Ebook;
}());

var Loan = (function () {
    function Loan() {
    }
    return Loan;
}());

var EbookService = (function () {
    function EbookService(http, message) {
        this.http = http;
        this.message = message;
        this.api_url = '/api/v1/library/';
    }
    EbookService.prototype.listAllEbooks = function () {
        return this.http.get(this.api_url + "ebooks/", { headers: __WEBPACK_IMPORTED_MODULE_4__http_headers_service__["a" /* HttpHeadersService */].get() })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('list all ebooks')));
    };
    EbookService.prototype.getEbook = function (id) {
        return this.http.get(this.api_url + "ebooks/" + id + "/", { headers: __WEBPACK_IMPORTED_MODULE_4__http_headers_service__["a" /* HttpHeadersService */].get() })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('get ebook')));
    };
    EbookService.prototype.borrowEbook = function (ebookId) {
        var _this = this;
        return this.http.post(this.api_url + "loans/", { ebook: ebookId }, { headers: __WEBPACK_IMPORTED_MODULE_4__http_headers_service__["a" /* HttpHeadersService */].get() })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (_) { return _this.message.log("Wypo\u017Cyczono ebooka"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('borrow ebook')));
    };
    EbookService.prototype.listAllLoans = function () {
        return this.http.get(this.api_url + "loans/", { headers: __WEBPACK_IMPORTED_MODULE_4__http_headers_service__["a" /* HttpHeadersService */].get() })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('list all loans')));
    };
    EbookService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error, any) {
            console.log(operation + " failed: " + error.message);
            for (var key in error.error) {
                _this.message.error(error.error[key]);
            }
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    EbookService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__message_service__["a" /* MessageService */]])
    ], EbookService);
    return EbookService;
}());



/***/ }),

/***/ "../../../../../src/app/ebooks/ebooks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ebooks/ebooks.component.html":
/***/ (function(module, exports) {

module.exports = "<h5 class=\"indigo-text\">Znajdź swojego e-booka</h5>\n<div class=\"row flex\">\n<div *ngFor=\"let ebook of ebooks\" class=\"col s4\">\n  <div class=\"card small z-depth-2\">\n\t<div class=\"card-image waves-effect waves-block waves-light\">\n    <img class=\"activator\" src=\"{{ ebook.image_url }}\">\n  </div>\n    <div class=\"card-content\">\n      <span class=\"card-title activator grey-text text-darken-4\"><a routerLink=\"/ebook/{{ ebook.id }}/\">{{ ebook.name }}</a><i class=\"material-icons right\">more_vert</i></span>\n      <div class=\"button\"><a class=\"waves-effect waves-light btn\" (click)=\"borrowEbook(ebook.id)\" href=\"#!\" id=\"wypozycz\">Wypożycz</a></div>\n    </div>\n    <div class=\"card-reveal\">\n      <span class=\"card-title grey-text text-darken-4\"><a routerLink=\"/ebook/{{ ebook.id }}/\">{{ ebook.name }}</a><i class=\"material-icons right\">close</i></span>\n      <p>{{ ebook.description }}</p>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ebooks/ebooks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EbooksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ebook_service__ = __webpack_require__("../../../../../src/app/ebook.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EbooksComponent = (function () {
    function EbooksComponent(library) {
        this.library = library;
    }
    EbooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.library.listAllEbooks().subscribe(function (ebooks) { return _this.ebooks = ebooks; });
    };
    EbooksComponent.prototype.borrowEbook = function (ebookId) {
        this.library.borrowEbook(ebookId).subscribe();
    };
    EbooksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ebooks',
            template: __webpack_require__("../../../../../src/app/ebooks/ebooks.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ebooks/ebooks.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ebook_service__["a" /* EbookService */]])
    ], EbooksComponent);
    return EbooksComponent;
}());



/***/ }),

/***/ "../../../../../src/app/http-headers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpHeadersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpHeadersService = (function () {
    function HttpHeadersService() {
    }
    HttpHeadersService.get = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token');
        if (token !== null) {
            header = header.append('Authorization', 'Token ' + token);
        }
        return header;
    };
    HttpHeadersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], HttpHeadersService);
    return HttpHeadersService;
}());



/***/ }),

/***/ "../../../../../src/app/loans/loans.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loans/loans.component.html":
/***/ (function(module, exports) {

module.exports = "<h5 class=\"indigo-text\">Lista twoich wypożyczeń</h5>\n<div class=\"row flex\">\n<div *ngFor=\"let loan of loans\" class=\"col s4\">\n  <div class=\"card small z-depth-2\">\n    <div class=\"card-image waves-effect waves-block waves-light\">\n    <img class=\"activator\" src=\"{{ loan.ebook_object.image_url }}\">\n  </div>\n    <div class=\"card-content\">\n      <span class=\"card-title activator grey-text text-darken-4\"><a routerLink=\"/ebook/{{ loan.ebook_object.id }}/\">{{ loan.ebook_object.name }}</a><i class=\"material-icons right\">more_vert</i></span>\n      <div class=\"button\"><a class=\"waves-effect waves-light btn\" href=\"/api/v1/library/epub/{{ loan.uuid_key }}\" id=\"download\">Pobierz</a></div>\n    </div>\n    <div class=\"card-reveal\">\n      <span class=\"card-title grey-text text-darken-4\"><a routerLink=\"/ebook/{{ loan.ebook_object.id }}/\">{{ loan.ebook_object.name }}</a><i class=\"material-icons right\">close</i></span>\n      <p>{{ loan.ebook_object.description }}</p>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/loans/loans.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoansComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ebook_service__ = __webpack_require__("../../../../../src/app/ebook.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoansComponent = (function () {
    function LoansComponent(library) {
        this.library = library;
    }
    LoansComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.library.listAllLoans().subscribe(function (loans) { return _this.loans = loans; });
    };
    LoansComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loans',
            template: __webpack_require__("../../../../../src/app/loans/loans.component.html"),
            styles: [__webpack_require__("../../../../../src/app/loans/loans.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ebook_service__["a" /* EbookService */]])
    ], LoansComponent);
    return LoansComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "      <h5 class=\"indigo-text\">Zaloguj się</h5>\n      <form class=\"z-depth-1 grey lighten-4 row\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"row center\">\n            <div class=\"col offset-s1 s10 input-field\">\n                <input id=\"username\" type=\"text\" class=\"validate\" name=\"username\"\n                    required\n                    [(ngModel)]=\"username\">\n                <label for=\"username\">Nazwa użytkownika</label>\n            </div>\n        </div>\n        <div class=\"row center\">\n            <div class=\"col offset-s1 s10 input-field\">\n                <input id=\"password\" type=\"password\" class=\"validate\" name=\"password\"\n                    required\n                    [(ngModel)]=\"password\">\n                <label for=\"password\">Hasło</label>\n            </div>\n        </div>\n        <div class=\"row center\">\n            <button type=\"submit\" name=\"btn_login\" class=\"col s12 btn btn-large waves-effect indigo\">Zaloguj</button>\n        </div>\n      </form>\n      <div class=\"row center\">\n        <a routerLink='/register'> Utwórz konto </a>\n      </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(auth) {
        this.auth = auth;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        this.auth.login(this.username, this.password).subscribe();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = (function () {
    function MessageService() {
    }
    MessageService.prototype.log = function (message) {
        Object(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])(message, 3000);
    };
    MessageService.prototype.error = function (message) {
        Object(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])(message, 3000, 'red');
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/app/my-reviews/my-reviews.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".review {\n    border: 1px solid #d1d1d1;\n    padding: 10px 30px;\n    margin-bottom: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/my-reviews/my-reviews.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12\"><h5>Opinie</h5></div>\n</div>\n<div class=\"row review\" *ngFor=\"let review of reviews\">\n  <div class=\"row\">\n    <div class=\"col s9\">\n      <i class=\"material-icons left\">book</i>\n      <a routerLink=\"/ebook/{{ review.review_object.id }}\">{{ review.review_object.name }}</a>\n    </div>\n    <div class=\"col s3 date\">Dodano: {{ review.created_at | date }}</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col s12\">\n\t  <p>{{ review.content }}</p>\n\t</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/my-reviews/my-reviews.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyReviewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__review_service__ = __webpack_require__("../../../../../src/app/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyReviewsComponent = (function () {
    function MyReviewsComponent(review, auth) {
        this.review = review;
        this.auth = auth;
    }
    MyReviewsComponent.prototype.ngOnInit = function () {
        this.getReviews();
    };
    MyReviewsComponent.prototype.getReviews = function () {
        var _this = this;
        var id = this.auth.getUser().id;
        this.review.getUserReviews(id).subscribe(function (reviews) { return _this.reviews = reviews; });
    };
    MyReviewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-my-reviews',
            template: __webpack_require__("../../../../../src/app/my-reviews/my-reviews.component.html"),
            styles: [__webpack_require__("../../../../../src/app/my-reviews/my-reviews.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__review_service__["a" /* ReviewService */],
            __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]])
    ], MyReviewsComponent);
    return MyReviewsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"teal\">\n  <div class=\"container\">\n    <div class=\"nav-wrapper\"> <a routerLink=\"/\" class=\"brand-logo\">E-book Shop</a>\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n        <li><a href=\"\"><i class=\"material-icons left\">book</i>E-booki</a></li>\n\t\t<li><a href=\"\"><i class=\"material-icons left\">person</i>Panel użytkownika</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("../../../../../src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/newsletter/newsletter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/newsletter/newsletter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n  <form class=\"col s6 offset-s3 z-depth-2\" (ngSubmit)=\"onSubmit()\" #newsletterForm=\"ngForm\">\n    <div class=\"row\">\n      <div class=\"input-field col s12\">\n        <input id=\"email\" type=\"email\" class=\"validate\" name=\"email\"\n          required\n          [(ngModel)]=\"subscriber.email\">\n        <label for=\"email\">Zapisz się do naszej subskrypcji</label>\n      </div>\n    </div>\n  </form>\n</div>\t\n"

/***/ }),

/***/ "../../../../../src/app/newsletter/newsletter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsletterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__newsletter_service__ = __webpack_require__("../../../../../src/app/newsletter/newsletter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsletterComponent = (function () {
    function NewsletterComponent(newsletterService) {
        this.newsletterService = newsletterService;
        this.subscriber = {
            email: ""
        };
    }
    NewsletterComponent.prototype.ngOnInit = function () {
    };
    NewsletterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.newsletterService.addSubscriber(this.subscriber)
            .subscribe(function (_) { return _this.subscriber.email = ""; });
    };
    NewsletterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-newsletter',
            template: __webpack_require__("../../../../../src/app/newsletter/newsletter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/newsletter/newsletter.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__newsletter_service__["a" /* NewsletterService */]])
    ], NewsletterComponent);
    return NewsletterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/newsletter/newsletter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsletterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var NewsletterService = (function () {
    function NewsletterService(http, message) {
        this.http = http;
        this.message = message;
        this.newsletterUrl = 'api/v1/newsletter';
    }
    NewsletterService.prototype.addSubscriber = function (subscriber) {
        var _this = this;
        return this.http.post(this.newsletterUrl + "/subscribers/", subscriber, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (subscriber) { return _this.message.log("Dodano do subskrypcji"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('add subscriber')));
    };
    NewsletterService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error, any) {
            console.log(operation + " failed: " + error.message);
            for (var key in error.error) {
                error.error[key].forEach(function (msg) { return _this.message.error(key + ': ' + msg); });
            }
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    NewsletterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__message_service__["a" /* MessageService */]])
    ], NewsletterService);
    return NewsletterService;
}());



/***/ }),

/***/ "../../../../../src/app/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "\t<h5 class=\"indigo-text\">Zarejestruj się</h5>\n\t  \n\t <div class=\"row\">\n    <form class=\"col s12\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input id=\"username\" class=\"validate\" type=\"text\" name=\"username\"\n            required\n            [(ngModel)]=\"user.username\">\n          <label for=\"username\">Nazwa użytkownika</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s6\">\n          <input id=\"first_name\" class=\"validate\" type=\"text\" name=\"first_name\"\n            [(ngModel)]=\"user.first_name\">\n          <label for=\"first_name\" class=\"\">Imię</label>\n        </div>\n        <div class=\"input-field col s6\">\n          <input id=\"last_name\" class=\"validate\" type=\"text\" name=\"last_name\"\n            [(ngModel)]=\"user.last_name\">\n          <label for=\"last_name\" class=\"\">Nazwisko</label>\n        </div>\n      </div>\n\t\t<div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input id=\"email\" class=\"validate\" type=\"email\" name=\"email\"\n            [(ngModel)]=\"user.email\">\n          <label for=\"email\" class=\"\">Email</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input id=\"password\" class=\"validate\" type=\"password\" name=\"password\"\n            required\n            [(ngModel)]=\"user.password\">\n          <label for=\"password\" class=\"\">Hasło</label>\n        </div>\n      </div>\n\t\t<button type=\"submit\" name=\"btn_login\" class=\"col s12 btn btn-large waves-effect indigo\">Zarejestruj</button>\n    </form>\n  </div>\n\t\n"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationComponent = (function () {
    function RegistrationComponent(auth, location) {
        this.auth = auth;
        this.location = location;
        this.user = {
            username: "",
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        };
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.onSubmit = function () {
        this.auth.register(this.user).subscribe();
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/review.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Review */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_headers_service__ = __webpack_require__("../../../../../src/app/http-headers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Review = (function () {
    function Review() {
    }
    return Review;
}());

var ReviewService = (function () {
    function ReviewService(http, message) {
        this.http = http;
        this.message = message;
        this.api_url = '/api/v1/review/reviews/';
    }
    ReviewService.prototype.getEbookReviews = function (ebookId) {
        return this.http.get(this.api_url + "?object_review=" + ebookId, { headers: __WEBPACK_IMPORTED_MODULE_4__http_headers_service__["a" /* HttpHeadersService */].get() })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError("get ebook's reviews")));
    };
    ReviewService.prototype.getUserReviews = function (userId) {
        return this.http.get(this.api_url + "?created_by=" + userId, { headers: __WEBPACK_IMPORTED_MODULE_4__http_headers_service__["a" /* HttpHeadersService */].get() })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError("get user's reviews")));
    };
    ReviewService.prototype.addReview = function (review) {
        var _this = this;
        return this.http.post("" + this.api_url, review, { headers: __WEBPACK_IMPORTED_MODULE_4__http_headers_service__["a" /* HttpHeadersService */].get() })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (_) { return _this.message.log("Dodano recenzje"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError("add ebook's review")));
    };
    ReviewService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error, any) {
            console.log(operation + " failed: " + error.message);
            for (var key in error.error) {
                _this.message.error(error.error[key]);
            }
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    ReviewService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__message_service__["a" /* MessageService */]])
    ], ReviewService);
    return ReviewService;
}());



/***/ }),

/***/ "../../../../../src/app/review/review.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".review {\n    border: 1px solid #d1d1d1;\n    padding: 10px 30px;\n    margin-bottom: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/review/review.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12\"><h5>Opinie</h5></div>\n</div>\n<div class=\"row review\" *ngFor=\"let review of reviews\">\n  <div class=\"row\">\n    <div class=\"col s9\"><i class=\"material-icons left\">person</i>{{ review.created_by.username }}</div>\n<div class=\"col s3 date\">Dodano: {{ review.created_at | date }}</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col s12\">\n\t  <p>{{ review.content }}</p>\n\t</div>\n  </div>\n</div>\n<div class=\"row\" *ngIf=\"auth.isAuthenticated()\">\n  <form class=\"col s12\" (ngSubmit)=\"onSubmit(newReview.value); newReview.value=''\">\n    <div class=\"row\">\n      <div class=\"input-field col s12\">\n        <textarea id=\"textarea\" #newReview required class=\"materialize-textarea\"></textarea>\n        <label for=\"textarea\">Napisz swoją opinię</label>\n      </div>\n    </div>\n    <button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\" style=\"float: right;\">Wyślij opinię<i class=\"material-icons right\">send</i>\n  </button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/review/review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__review_service__ = __webpack_require__("../../../../../src/app/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewComponent = (function () {
    function ReviewComponent(review, route, auth) {
        this.review = review;
        this.route = route;
        this.auth = auth;
    }
    ReviewComponent.prototype.ngOnInit = function () {
        this.getReviews();
    };
    ReviewComponent.prototype.getReviews = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.review.getEbookReviews(id).subscribe(function (reviews) { return _this.reviews = reviews; });
    };
    ReviewComponent.prototype.onSubmit = function (content) {
        var _this = this;
        var object_review = +this.route.snapshot.paramMap.get('id');
        this.review.addReview({ content: content, object_review: object_review }).subscribe(function (newReview) { return _this.reviews.push(newReview); });
    };
    ReviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-review',
            template: __webpack_require__("../../../../../src/app/review/review.component.html"),
            styles: [__webpack_require__("../../../../../src/app/review/review.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__review_service__["a" /* ReviewService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]])
    ], ReviewComponent);
    return ReviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sidenav-private/sidenav-private.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidenav-private/sidenav-private.component.html":
/***/ (function(module, exports) {

module.exports = "<h5 class=\"indigo-text\">Co chcesz zrobić?</h5>\n<div class=\"z-depth-1 grey lighten-4 section\">\n  <div class=\"row center\">\n    <a routerLink=\"/my-reviews/\" class=\"waves-effect waves-light btn\">Opinie</a>\n  </div>\n  <div class=\"row center\">\n    <a routerLink=\"/loans/\" class=\"waves-effect waves-light btn\">Wypożyczenia</a>\n  </div>\n  <div class=\"row center\" *ngIf=\"user.is_staff\">\n    <a href=\"/admin/\" class=\"waves-effect waves-light btn\">Admin</a>\n  </div>\n  <div class=\"row center\">\n    <a (click)=\"logout()\" class=\"waves-effect waves-light btn\">Wyloguj</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sidenav-private/sidenav-private.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavPrivateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidenavPrivateComponent = (function () {
    function SidenavPrivateComponent(auth) {
        this.auth = auth;
    }
    SidenavPrivateComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    SidenavPrivateComponent.prototype.logout = function () {
        this.auth.logout().subscribe();
    };
    SidenavPrivateComponent.prototype.getUser = function () {
        this.user = this.auth.getUser();
    };
    SidenavPrivateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidenav-private',
            template: __webpack_require__("../../../../../src/app/sidenav-private/sidenav-private.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidenav-private/sidenav-private.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]])
    ], SidenavPrivateComponent);
    return SidenavPrivateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sidenav/sidenav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col s3\">\n    <div class=\"col s10 offset-s1\"> \n        <app-login *ngIf=\"!auth.isAuthenticated()\"></app-login>\n        <app-sidenav-private *ngIf=\"auth.isAuthenticated()\"></app-sidenav-private>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidenavComponent = (function () {
    function SidenavComponent(auth) {
        this.auth = auth;
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidenav',
            template: __webpack_require__("../../../../../src/app/sidenav/sidenav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidenav/sidenav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map