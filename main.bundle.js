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

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes_app_route__ = __webpack_require__("../../../../../src/app/routes/app.route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_auth_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_threads_threads_component__ = __webpack_require__("../../../../../src/app/components/threads/threads.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_threads_thread_list_thread_list_component__ = __webpack_require__("../../../../../src/app/components/threads/thread-list/thread-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_threads_chat_box_chat_box_component__ = __webpack_require__("../../../../../src/app/components/threads/chat-box/chat-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_threads_chat_bubble_chat_bubble_component__ = __webpack_require__("../../../../../src/app/components/threads/chat-bubble/chat-bubble.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_user_user_component__ = __webpack_require__("../../../../../src/app/components/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_people_people_component__ = __webpack_require__("../../../../../src/app/components/people/people.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_threads_threads_component__["a" /* ThreadsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_threads_thread_list_thread_list_component__["a" /* ThreadListComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_threads_chat_box_chat_box_component__["a" /* ChatBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_threads_chat_bubble_chat_bubble_component__["a" /* ChatBubbleComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_people_people_component__["a" /* PeopleComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_routes_app_route__["a" /* APP_ROUTE */])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_11__guards_auth_auth_guard__["a" /* AuthGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"showcase\">\n  <h1><i class=\"fa fa-commenting\"></i> &nbsp; Let's Chat</h1>\n  <p>A simple chat app built with <span class=\"bold\">Angular</span> and <span class=\"bold\">Firebase</span></p>\n  <div class=\"actions\">\n      <a [routerLink]=\"['/auth/login']\" class=\"btn green\"><i class=\"fa fa-sign-in\"></i> &nbsp; Login</a>\n      <a href=\"https://github.com/ameerthehacker/letschat\" class=\"btn black\"><i class=\"fa fa-github\"></i> &nbsp; Github</a>    \n  </div>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0; }\n\n.showcase {\n  background-image: url(\"https://ameerthehacker.github.io/letschat/assets/images/bg.jpeg\");\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  color: #ecf0f1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  line-height: 1.6;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .showcase h1 {\n    font-size: 50px; }\n  .showcase p {\n    font-size: 20px;\n    padding: 5px;\n    text-align: center; }\n  .showcase .bold {\n    font-weight: bold; }\n  .showcase .actions {\n    margin-top: 10px; }\n  .showcase .btn {\n    padding: 10px 30px;\n    font-weight: bold;\n    font-size: 20px;\n    border: 0px;\n    border-radius: 75px;\n    color: #ecf0f1;\n    text-decoration: none; }\n  .showcase .green {\n    background: #2ecc71; }\n  .showcase .black {\n    background: #34495e; }\n  .showcase .btn.green:active, .showcase .btn.green:hover {\n    background: #27ae60; }\n  .showcase .btn.black:active, .showcase .btn.black:hover {\n    background: #2c3e50; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'lc-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<lc-navbar></lc-navbar>\n<div class=\"ui grid\">\n  <div class=\"row\">\n    <div class=\"five wide column\"></div>\n    <div class=\"six wide column\">\n      <div class=\"ui segments login-box\">\n        <div class=\"ui secondary segment\">\n          <h1 class=\"text-center\"><i class=\"fa fa-user\"></i> &nbsp;Login</h1>\n        </div> \n        <div class=\"ui {{ loadingUser ? 'loading': '' }} segment\">\n          <div class=\"margin-top-10\">\n            <button class=\"ui fluid facebook massive button\" (click)=\"onBtnLoginClick(authProviders.FACEBOOK)\"><i class=\"fa fa-facebook-square\"></i> &nbsp; Login With Facebook</button>\n          </div>\n          <div class=\"margin-top-10\">\n            <button class=\"ui fluid google plus massive button\" (click)=\"onBtnLoginClick(authProviders.GOOGLE)\"><i class=\"fa fa-google\"></i> &nbsp; Login With Google</button>\n          </div>\n          <div class=\"margin-top-10\">\n            <button class=\"ui fluid black massive button\" (click)=\"onBtnLoginClick(authProviders.GITHUB)\"><i class=\"fa fa-github\"></i> &nbsp; Login With Github</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.loadingUser = false;
        this.authProviders = __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */].providers;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingUser = true;
        this.authService.user
            .subscribe(function (user) {
            _this.loadingUser = false;
        });
    };
    LoginComponent.prototype.onBtnLoginClick = function (provider) {
        var _this = this;
        this.authService.login(provider)
            .then(function (user) {
            if (user) {
                _this.router.navigate(['/threads']);
            }
        })
            .catch(function (err) {
            // TODO: Handle errors in OAuth
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'lc-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui massive menu\">\n  <a [routerLink]=\"['/']\" class=\"item\"><i class=\"fa fa-commenting\"></i> &nbsp;  LetsChat</a>\n  <div class=\"right menu\">\n    <a class=\"item\" *ngIf=\"!(authService.user | async)\" [routerLink]=\"['/']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\"><i class=\"fa fa-home\"></i> &nbsp; Home</a>\n    <a class=\"item\" *ngIf=\"!(authService.user | async)\" [routerLink]=\"['/auth/login']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\"><i class=\"fa fa-sign-in\"></i> &nbsp; Login</a>\n    <a class=\"item\" *ngIf=\"(authService.user | async)\" [routerLink]=\"['/threads']\" routerLinkActive=\"active\"><i class=\"fa fa-comment\"></i> &nbsp; Threads</a>        \n    <a class=\"item\" *ngIf=\"(authService.user | async)\" [routerLink]=\"['/people']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: false }\"><i class=\"fa fa-users\"></i> &nbsp; People</a>      \n    <a class=\"item\" *ngIf=\"(authService.user | async)\" (click)=\"authService.logout()\" [routerLink]=\"['/auth/login']\"><i class=\"fa fa-sign-out\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\"></i> &nbsp; Logout</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'lc-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/people/people.component.html":
/***/ (function(module, exports) {

module.exports = "<lc-navbar></lc-navbar>\n<div class=\"ui grid wrapper\">\n  <div class=\"ui inverted active dimmer\" *ngIf=\"loadingPeople\">\n    <div class=\"ui massive text loader\">Loading...</div>\n  </div>\n  <div class=\"row\">\n    <div *ngFor=\"let user of people\" class=\"four wide column\">\n      <lc-user (onAddClick)=\"onAddClick($event)\" [user]=\"user\"></lc-user> \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/people/people.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  padding: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/people/people.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PeopleComponent = (function () {
    function PeopleComponent(firestore, router, authService) {
        this.firestore = firestore;
        this.router = router;
        this.authService = authService;
        this.loadingPeople = false;
    }
    PeopleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingPeople = true;
        this.firestore.collection('/users')
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (snap) {
                var user = snap.payload.doc.data();
                user.uid = snap.payload.doc.id;
                return user;
            });
        })
            .subscribe(function (users) {
            users.forEach(function (user, index) {
                if (user.uid == _this.authService.currentUser.uid) {
                    users.splice(index, 1);
                    return;
                }
            });
            _this.loadingPeople = false;
            _this.people = users;
        });
    };
    PeopleComponent.prototype.onAddClick = function (threadId) {
        this.router.navigate(['/threads']);
    };
    PeopleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'lc-people',
            template: __webpack_require__("../../../../../src/app/components/people/people.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/people/people.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__["a" /* AuthService */]])
    ], PeopleComponent);
    return PeopleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/threads/chat-box/chat-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid\">\n  <div *ngIf=\"loadingMessages\" class=\"ui active inverted dimmer\">\n    <div class=\"ui text loader\">Loading Messages...</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"sixteen wide column\">\n      <div #messageBox class=\"message-box\">\n        <div *ngIf=\"showOldMessages\" class=\"old-messages-container\">\n            <button [ngClass]=\"{ loading: loadingOldMessages }\" (click)=\"onBtnOldMessagesClick()\" class=\"ui tiny primary button\" [disabled]=\"loadingOldMessages\"><i class=\"fa fa-arrow-circle-o-up\"></i> &nbsp; Old Messages</button>\n        </div>\n        <lc-chat-bubble *ngFor=\"let message of messages\" [isRead]=\"message.read\" [isReply]=\"authService.currentUser.uid != message.sender.id\" [message]=\"message.message\" [timestamp]=\"message.timestamp\"></lc-chat-bubble>\n      </div>\n    </div>\n    <div class=\"sixteen wide column\">\n      <div class=\"chat-controls\">\n        <div class=\"ui right action fluid input\">\n          <input [(ngModel)]=\"message\" type=\"text\" (keypress)=\"onKeyPress($event)\" placeholder=\"Enter the message here :)\">\n          <button (click)=\"onBtnSendClick()\" [disabled]=\"message.length == 0\" class=\"ui icon button positive\">\n              <i class=\"send icon\"></i>\n          </button>   \n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/threads/chat-box/chat-box.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".message-box {\n  height: 69vh;\n  display: block;\n  padding: 20px;\n  overflow-y: auto; }\n\n.chat-controls {\n  padding: 15px; }\n\n.old-messages-container {\n  padding: 3px;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/threads/chat-box/chat-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatBoxComponent = (function () {
    function ChatBoxComponent(route, firedatabase, firestore, authService) {
        this.route = route;
        this.firedatabase = firedatabase;
        this.firestore = firestore;
        this.authService = authService;
        this.showOldMessages = false;
        this.loadingOldMessages = false;
        this.loadingMessages = false;
    }
    ChatBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.message = "";
        // Start with 20 messages    
        this.messagesLimit = 20;
        this.route.params.subscribe(function (params) {
            // unsubscribe previous thread
            if (_this.messagesListener) {
                _this.messagesListener();
            }
            _this.threadId = params.thread_id;
            _this.loadingMessages = true;
            _this.loadMessages(_this.threadId, _this.messagesLimit, function (messages) {
                _this.messages = messages;
                _this.scrollToBottom();
                if (messages.length >= _this.messagesLimit) {
                    _this.showOldMessages = true;
                }
                else {
                    _this.showOldMessages = false;
                }
                _this.loadingMessages = false;
            });
        });
    };
    ChatBoxComponent.prototype.onBtnOldMessagesClick = function () {
        var _this = this;
        this.messagesLimit += 10;
        this.loadingOldMessages = true;
        this.loadMessages(this.threadId, this.messagesLimit, function (messages) {
            _this.messages = messages;
            if (messages.length >= _this.messagesLimit) {
                _this.showOldMessages = true;
            }
            else {
                _this.showOldMessages = false;
            }
            _this.loadingOldMessages = false;
        }, true);
    };
    ChatBoxComponent.prototype.onBtnSendClick = function () {
        if (this.message.length != 0) {
            var messagesPath = "/threads/" + this.threadId + "/messages";
            var senderRef = this.firestore
                .doc("/users/" + this.authService.currentUser.uid)
                .ref;
            var message = {
                sender: senderRef,
                message: this.message,
                timestamp: Date.now(),
                read: false
            };
            this.message = "";
            this.firestore.collection(messagesPath)
                .add(message)
                .catch(function (err) {
                console.log(err);
            });
        }
    };
    ChatBoxComponent.prototype.onKeyPress = function (evt) {
        var _this = this;
        // Enter is pressed
        if (evt.keyCode == 13) {
            // Trigger message sending
            this.onBtnSendClick();
        }
        this.firedatabase.database
            .ref("/users/" + this.authService.currentUser.uid)
            .update({ typing: true })
            .then(function () {
            setTimeout(function () {
                _this.firedatabase.database
                    .ref("/users/" + _this.authService.currentUser.uid)
                    .update({ typing: false });
            }, 1000);
        });
        this.firedatabase.database
            .ref("/users/" + this.authService.currentUser.uid)
            .onDisconnect()
            .update({ typing: false });
    };
    ChatBoxComponent.prototype.loadMessages = function (threadId, messagesSize, callback, once) {
        var _this = this;
        if (once === void 0) { once = false; }
        // Load the messages
        var messagesPath = "/threads/" + threadId + "/messages";
        var querySnap = this.firestore.collection(messagesPath)
            .ref
            .orderBy('timestamp', 'desc')
            .limit(messagesSize);
        if (!once) {
            this.messagesListener = querySnap
                .onSnapshot(function (snap) {
                var messages = [];
                snap.docs.forEach(function (message) {
                    messages.push(message.data());
                    if (message.data().sender.id != _this.authService.currentUser.uid) {
                        _this.firestore.doc(messagesPath + "/" + message.id)
                            .update({ read: true });
                    }
                });
                callback(messages.reverse());
            });
        }
        else {
            querySnap
                .get()
                .then(function (snap) {
                var messages = [];
                snap.docs.forEach(function (message) {
                    messages.push(message.data());
                });
                callback(messages.reverse());
            });
        }
    };
    ChatBoxComponent.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            var scrollHeight = _this.messageBox.nativeElement.scrollHeight;
            $(_this.messageBox.nativeElement).animate({
                scrollTop: scrollHeight
            }, 1500);
        }, 500);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('messageBox'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ChatBoxComponent.prototype, "messageBox", void 0);
    ChatBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'lc-chat-box',
            template: __webpack_require__("../../../../../src/app/components/threads/chat-box/chat-box.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/threads/chat-box/chat-box.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__["a" /* AuthService */]])
    ], ChatBoxComponent);
    return ChatBoxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/threads/chat-bubble/chat-bubble.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bubble\" [ngClass]=\"{ reply: isReply }\" [attr.data-tooltip]=\" time\" data-inverted=\"\" data-position=\"bottom center\">\n    {{ message }}\n    <i *ngIf=\"!isReply\" [ngClass]=\"{ green: isRead }\" class=\"fa read fa-check pull-right\"></i>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/threads/chat-bubble/chat-bubble.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bubble {\n  color: #212121;\n  background: rgba(236, 240, 241, 0.84);\n  padding: 8px 20px;\n  border-radius: 5px 15px 15px 15px;\n  font-weight: 400;\n  text-transform: none;\n  text-align: left;\n  font-size: 16px;\n  letter-spacing: .5px;\n  margin: 0 0 2px 0;\n  max-width: 65%;\n  float: right;\n  clear: both;\n  line-height: 1.5em;\n  word-break: break-word; }\n  .bubble .fa.read {\n    font-size: 10px;\n    position: absolute;\n    right: 5px;\n    bottom: 5px; }\n\n.bubble.reply {\n  background: rgba(41, 128, 185, 0.8);\n  color: #fff;\n  border-radius: 15px 15px 5px 5px;\n  float: left;\n  clear: both;\n  cursor: pointer;\n  text-decoration: none;\n  word-break: normal; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/threads/chat-bubble/chat-bubble.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBubbleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_and_time__ = __webpack_require__("../../../../date-and-time/date-and-time.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_and_time___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_and_time__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatBubbleComponent = (function () {
    function ChatBubbleComponent() {
    }
    ChatBubbleComponent.prototype.ngOnInit = function () {
        this.time = __WEBPACK_IMPORTED_MODULE_1_date_and_time__["format"](new Date(this.timestamp), 'HH:mm');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ChatBubbleComponent.prototype, "isReply", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], ChatBubbleComponent.prototype, "timestamp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ChatBubbleComponent.prototype, "message", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ChatBubbleComponent.prototype, "isRead", void 0);
    ChatBubbleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'lc-chat-bubble',
            template: __webpack_require__("../../../../../src/app/components/threads/chat-bubble/chat-bubble.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/threads/chat-bubble/chat-bubble.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatBubbleComponent);
    return ChatBubbleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/threads/thread-list/thread-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui cards\">\n    <a (click)=\"onThreadClick(thread.user)\" routerLinkActive=\"selected-card\" [routerLink]=\"['/threads', thread.thread.id]\" *ngFor=\"let thread of threads\" class=\"ui fluid card\">\n        <div class=\"content\">\n            <i [ngClass]=\"{ red: !thread.user.online, green: thread.user.online }\" class=\"pull-right fa fa fa-circle\"></i>\n            <img src=\"{{ thread.user.photoURL }}\" alt=\"Your DP\" class=\"ui mini left floated circular image\">\n            <div class=\"header\">{{ thread.user.displayName }}</div>\n            <div class=\"meta\" *ngIf=\"thread.newMessagesCount > 0\">\n                <div class=\"statistic\">\n                    <div class=\"value\">\n                        <i class=\"fa fa-comments-o\"></i> {{ thread.newMessagesCount }} {{ thread.lastMessage }}\n                    </div>\n                </div>\n            </div>\n        </div>       \n    </a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/threads/thread-list/thread-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cards {\n  margin: 0px !important;\n  padding: 0px !important; }\n  .cards .card {\n    margin: 0px !important;\n    margin-right: 1px !important;\n    border-radius: 0px; }\n\n.selected-card {\n  background: #ecf0f1 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/threads/thread-list/thread-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreadListComponent; });
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

var ThreadListComponent = (function () {
    function ThreadListComponent() {
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ThreadListComponent.prototype.ngOnInit = function () {
    };
    ThreadListComponent.prototype.onThreadClick = function (user) {
        this.select.emit(user);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ThreadListComponent.prototype, "select", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], ThreadListComponent.prototype, "threads", void 0);
    ThreadListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'lc-thread-list',
            template: __webpack_require__("../../../../../src/app/components/threads/thread-list/thread-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/threads/thread-list/thread-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ThreadListComponent);
    return ThreadListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/threads/threads.component.html":
/***/ (function(module, exports) {

module.exports = "<lc-navbar></lc-navbar>\n<div class=\"ui grid\">\n    <div *ngIf=\"loadingThreads\" class=\"ui active inverted dimmer\">\n        <div class=\"ui text  massive loader\">Loading...</div>\n    </div>\n    <div class=\"row\">\n        <div class=\"six wide column\">\n            <div class=\"wrapper\">\n                <div class=\"user-content\">\n                    <div class=\"ui small fluid green card\">\n                        <div class=\"content\">\n                            <img src=\"{{ (currentUser | async)?.photoURL }}\" alt=\"Your DP\" class=\"ui mini left floated circular image\">\n                            <div class=\"header\">{{ (currentUser | async)?.displayName }}</div>\n                            <div class=\"meta\">{{ status }}</div>\n                        </div>\n                    </div>\n                    <div class=\"ui secondary segment\">\n                    </div>\n                </div>\n                <div class=\"threads\">\n                    <lc-thread-list (select)=\"onThreadClick($event)\" [threads]=\"threads\"></lc-thread-list>\n                </div>\n            </div>\n        </div>\n        <div class=\"ten wide column\">\n            <div *ngIf=\"threadUser\" class=\"ui small fluid yellow card\">\n                <div class=\"content\">\n                    <img src=\"{{ threadUser.photoURL }}\" alt=\"{{ threadUser.displayName }}'s DP'\" class=\"ui mini left floated circular image\">\n                    <div class=\"header\">{{ threadUser.displayName }}</div>\n                    <div *ngIf=\"!threadUser.typing\" class=\"meta\">{{ threadUser.online ? 'Online': threadUser.lastSeenInWords }}</div>\n                    <div *ngIf=\"threadUser.typing\" class=\"typing meta\">typing...</div>                    \n                </div>\n            </div>\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/threads/threads.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  border-radius: 0px !important;\n  margin-bottom: 2px !important; }\n\ninput {\n  border-radius: 0px !important; }\n\n.user-content {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto; }\n\n.threads {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  overflow-y: auto; }\n\n.wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 92vh;\n  border: 1px solid #ecf0f1; }\n\n.column {\n  padding: 0 !important; }\n\n.segment {\n  margin: 0px !important;\n  border-radius: 0px !important; }\n\n.typing {\n  color: #2ecc71 !important;\n  font-weight: bold !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/threads/threads.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreadsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_timeago_js__ = __webpack_require__("../../../../timeago.js/dist/timeago.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_timeago_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_timeago_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ThreadsComponent = (function () {
    function ThreadsComponent(firestore, firedatabase, authService) {
        this.firestore = firestore;
        this.firedatabase = firedatabase;
        this.authService = authService;
        this.loadingThreads = false;
    }
    ThreadsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set the user is online
        this.authService.setUserOnline(true);
        this.threads = [];
        this.loadingThreads = true;
        this.currentUser = this.authService.user;
        // Get the current user
        this.authService.user.subscribe(function (user) {
            // Get the user threads
            _this.firestore.doc("users/" + user.uid)
                .valueChanges()
                .subscribe(function (userDoc) {
                if (!userDoc) {
                    return;
                }
                _this.status = userDoc.status;
                var threads = userDoc.threads;
                _this.loadingThreads = false;
                // Check if user has any threads
                if (threads) {
                    threads.forEach(function (thread, index) {
                        _this.firestore.doc(thread.user.path)
                            .valueChanges()
                            .subscribe(function (userDoc) {
                            // Assign the uid
                            userDoc.uid = thread.user.id;
                            // Assign it to the threadlist
                            _this.threads[index] = {
                                thread: thread.thread,
                                user: userDoc,
                                newMessagesCount: 0,
                                lastMessage: ''
                            };
                            // Look for new messages
                            _this.firestore.collection("/threads/" + thread.thread.id + "/messages")
                                .ref
                                .where('sender', '==', thread.user)
                                .where('read', '==', false)
                                .onSnapshot(function (snap) {
                                _this.threads[index].newMessagesCount = snap.docs.length;
                                if (snap.docs.length > 0) {
                                    _this.threads[index].lastMessage = snap.docs[snap.docs.length - 1].data().message;
                                }
                            });
                            // Set each user online status
                            _this.onlineStatus(userDoc, function (status) {
                                // Return if the user record is not yet created in firebase
                                if (!status) {
                                    return;
                                }
                                _this.threads[index].user.online = status.online;
                                if (!status.online) {
                                    _this.threads[index].user.lastSeen = status.lastSeen;
                                    if (status.lastSeen > 0) {
                                        _this.threads[index].user.lastSeenInWords = 'Last seen ' + __WEBPACK_IMPORTED_MODULE_3_timeago_js___default()().format(status.lastSeen);
                                    }
                                    else {
                                        _this.threads[index].user.lastSeenInWords = '';
                                    }
                                }
                            });
                        });
                    });
                }
            });
        });
    };
    ThreadsComponent.prototype.onlineStatus = function (user, callback) {
        this.firedatabase.database
            .ref("/users/" + user.uid)
            .on('value', function (snap) {
            callback(snap.val());
        });
    };
    ThreadsComponent.prototype.onThreadClick = function (user) {
        var _this = this;
        if (this.typingListener) {
            this.typingListener();
        }
        this.threadUser = user;
        this.typingListener = this.firedatabase.database
            .ref("/users/" + user.uid)
            .on('value', function (snap) {
            _this.threadUser.typing = snap.val().typing;
        });
    };
    ThreadsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'lc-threads',
            template: __webpack_require__("../../../../../src/app/components/threads/threads.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/threads/threads.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__["a" /* AuthService */]])
    ], ThreadsComponent);
    return ThreadsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui small fluid green card\">\n  <div class=\"content\">\n      <img src=\"{{ user.photoURL }}\" alt=\"{{ user.displayName }}'s DP\" class=\"ui mini left floated circular image\">\n      <div class=\"header\">{{ user.displayName }}</div>\n      <div class=\"meta\">{{ user.status }}</div>\n  </div>\n  <div (click)=\"onBtnAddClick(user)\" [ngClass]=\"{ loading: addingUser }\" class=\"ui bottom attached button\">\n      <i class=\"fa fa-plus\"></i>\n      Add Thread\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = (function () {
    function UserComponent(authService, firestore) {
        this.authService = authService;
        this.firestore = firestore;
        this.onAddClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.addingUser = false;
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.onBtnAddClick = function (user) {
        var _this = this;
        // Create a new threadId
        var newThreadId = this.firestore.createId();
        this.addingUser = true;
        // Get the current user document
        this.firestore.doc("/users/" + this.authService.currentUser.uid)
            .ref.get()
            .then(function (snap) {
            var currentUser = snap.data();
            // Add the thread to user
            var threads = user.threads || [];
            var newThreadRef = _this.firestore.doc("/threads/" + newThreadId).ref;
            var currentUserRef = _this.firestore.doc("/users/" + _this.authService.currentUser.uid).ref;
            // Update the threads
            threads.push({ thread: newThreadRef, user: currentUserRef });
            _this.firestore.doc("/users/" + user.uid)
                .update({
                threads: threads
            });
            // Add the thread to the current user
            threads = currentUser.threads || [];
            var userRef = _this.firestore.doc("/users/" + user.uid).ref;
            // Update the threads
            threads.push({ thread: newThreadRef, user: userRef });
            _this.firestore.doc("/users/" + _this.authService.currentUser.uid)
                .update({
                threads: threads
            });
        });
        this.addingUser = false;
        this.onAddClick.emit(newThreadId);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* User */])
    ], UserComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], UserComponent.prototype, "onAddClick", void 0);
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'lc-user',
            template: __webpack_require__("../../../../../src/app/components/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.authService.isLoggedIn();
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/routes/app.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTE; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_route__ = __webpack_require__("../../../../../src/app/routes/auth.route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__threads_route__ = __webpack_require__("../../../../../src/app/routes/threads.route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_people_people_component__ = __webpack_require__("../../../../../src/app/components/people/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_auth_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth/auth.guard.ts");





var APP_ROUTE = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'auth', children: __WEBPACK_IMPORTED_MODULE_0__auth_route__["a" /* AUTH_ROUTE */] },
    { path: 'threads', children: __WEBPACK_IMPORTED_MODULE_1__threads_route__["a" /* THREADS_ROUTE */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'people', component: __WEBPACK_IMPORTED_MODULE_3__components_people_people_component__["a" /* PeopleComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_auth_auth_guard__["a" /* AuthGuard */]] }
];


/***/ }),

/***/ "../../../../../src/app/routes/auth.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_ROUTE; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");

var AUTH_ROUTE = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__components_login_login_component__["a" /* LoginComponent */] }
];


/***/ }),

/***/ "../../../../../src/app/routes/threads.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return THREADS_ROUTE; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_threads_threads_component__ = __webpack_require__("../../../../../src/app/components/threads/threads.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_threads_chat_box_chat_box_component__ = __webpack_require__("../../../../../src/app/components/threads/chat-box/chat-box.component.ts");


var THREADS_ROUTE = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__components_threads_threads_component__["a" /* ThreadsComponent */], children: [
            { path: ':thread_id', component: __WEBPACK_IMPORTED_MODULE_1__components_threads_chat_box_chat_box_component__["a" /* ChatBoxComponent */] }
        ] }
];


/***/ }),

/***/ "../../../../../src/app/services/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(firebaseAuth, firedatabase, router) {
        var _this = this;
        this.firebaseAuth = firebaseAuth;
        this.firedatabase = firedatabase;
        this.router = router;
        this.user = this.firebaseAuth.authState;
        // Listen for changes in authentication
        this.firebaseAuth.auth.onAuthStateChanged(function (user) {
            if (!user) {
                // Goto login page if logged out
                _this.router.navigate(['/auth/login']);
            }
            else {
                // Goto home page if logged in
                _this.router.navigate(['/threads']);
            }
        });
    }
    AuthService_1 = AuthService;
    AuthService.prototype.login = function (provider) {
        if (provider == AuthService_1.providers.FACEBOOK) {
            // Login with facebook
            return this.firebaseAuth.auth.signInWithRedirect(new __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"].FacebookAuthProvider());
        }
        else if (provider == AuthService_1.providers.GOOGLE) {
            // Login with google
            return this.firebaseAuth.auth.signInWithRedirect(new __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"].GoogleAuthProvider());
        }
        else if (provider == AuthService_1.providers.GITHUB) {
            // Login with google
            return this.firebaseAuth.auth.signInWithRedirect(new __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"].GithubAuthProvider());
        }
    };
    AuthService.prototype.logout = function () {
        this.setUserOnline(false);
        return this.firebaseAuth.auth.signOut();
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.user.map(function (user) { return user ? true : false; });
    };
    AuthService.prototype.setUserOnline = function (status) {
        if (status) {
            // Set the user is online
            this.firedatabase.database
                .ref("/users/" + this.currentUser.uid)
                .set({ online: true });
            // Checkpoint to make it offline when the user disconnects
            this.firedatabase.database
                .ref("/users/" + this.currentUser.uid)
                .onDisconnect()
                .set({
                online: false,
                lastSeen: Date.now()
            });
        }
        else {
            // Set the user is offline
            this.firedatabase.database
                .ref("/users/" + this.currentUser.uid)
                .set({
                online: false,
                lastSeen: Date.now()
            });
        }
    };
    Object.defineProperty(AuthService.prototype, "currentUser", {
        get: function () {
            return this.firebaseAuth.auth.currentUser;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.providers = {
        FACEBOOK: 0,
        GOOGLE: 1,
        GITHUB: 2
    };
    AuthService = AuthService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
    var AuthService_1;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    firebaseConfig: {
        apiKey: "AIzaSyC2OGWI54mTV91WjY2dmaftyVXEvDG5v3M",
        authDomain: "letschat-bbbfd.firebaseapp.com",
        databaseURL: "https://letschat-bbbfd.firebaseio.com",
        projectId: "letschat-bbbfd",
        storageBucket: "letschat-bbbfd.appspot.com",
        messagingSenderId: "989002507525"
    }
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../date-and-time/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ar": "../../../../date-and-time/locale/ar.js",
	"./ar.js": "../../../../date-and-time/locale/ar.js",
	"./az": "../../../../date-and-time/locale/az.js",
	"./az.js": "../../../../date-and-time/locale/az.js",
	"./bn": "../../../../date-and-time/locale/bn.js",
	"./bn.js": "../../../../date-and-time/locale/bn.js",
	"./cs": "../../../../date-and-time/locale/cs.js",
	"./cs.js": "../../../../date-and-time/locale/cs.js",
	"./de": "../../../../date-and-time/locale/de.js",
	"./de.js": "../../../../date-and-time/locale/de.js",
	"./el": "../../../../date-and-time/locale/el.js",
	"./el.js": "../../../../date-and-time/locale/el.js",
	"./es": "../../../../date-and-time/locale/es.js",
	"./es.js": "../../../../date-and-time/locale/es.js",
	"./fa": "../../../../date-and-time/locale/fa.js",
	"./fa.js": "../../../../date-and-time/locale/fa.js",
	"./fr": "../../../../date-and-time/locale/fr.js",
	"./fr.js": "../../../../date-and-time/locale/fr.js",
	"./hi": "../../../../date-and-time/locale/hi.js",
	"./hi.js": "../../../../date-and-time/locale/hi.js",
	"./hu": "../../../../date-and-time/locale/hu.js",
	"./hu.js": "../../../../date-and-time/locale/hu.js",
	"./id": "../../../../date-and-time/locale/id.js",
	"./id.js": "../../../../date-and-time/locale/id.js",
	"./it": "../../../../date-and-time/locale/it.js",
	"./it.js": "../../../../date-and-time/locale/it.js",
	"./ja": "../../../../date-and-time/locale/ja.js",
	"./ja.js": "../../../../date-and-time/locale/ja.js",
	"./jv": "../../../../date-and-time/locale/jv.js",
	"./jv.js": "../../../../date-and-time/locale/jv.js",
	"./ko": "../../../../date-and-time/locale/ko.js",
	"./ko.js": "../../../../date-and-time/locale/ko.js",
	"./my": "../../../../date-and-time/locale/my.js",
	"./my.js": "../../../../date-and-time/locale/my.js",
	"./nl": "../../../../date-and-time/locale/nl.js",
	"./nl.js": "../../../../date-and-time/locale/nl.js",
	"./pa-in": "../../../../date-and-time/locale/pa-in.js",
	"./pa-in.js": "../../../../date-and-time/locale/pa-in.js",
	"./pl": "../../../../date-and-time/locale/pl.js",
	"./pl.js": "../../../../date-and-time/locale/pl.js",
	"./pt": "../../../../date-and-time/locale/pt.js",
	"./pt.js": "../../../../date-and-time/locale/pt.js",
	"./ro": "../../../../date-and-time/locale/ro.js",
	"./ro.js": "../../../../date-and-time/locale/ro.js",
	"./ru": "../../../../date-and-time/locale/ru.js",
	"./ru.js": "../../../../date-and-time/locale/ru.js",
	"./sr": "../../../../date-and-time/locale/sr.js",
	"./sr.js": "../../../../date-and-time/locale/sr.js",
	"./th": "../../../../date-and-time/locale/th.js",
	"./th.js": "../../../../date-and-time/locale/th.js",
	"./tr": "../../../../date-and-time/locale/tr.js",
	"./tr.js": "../../../../date-and-time/locale/tr.js",
	"./uk": "../../../../date-and-time/locale/uk.js",
	"./uk.js": "../../../../date-and-time/locale/uk.js",
	"./uz": "../../../../date-and-time/locale/uz.js",
	"./uz.js": "../../../../date-and-time/locale/uz.js",
	"./vi": "../../../../date-and-time/locale/vi.js",
	"./vi.js": "../../../../date-and-time/locale/vi.js",
	"./zh-cn": "../../../../date-and-time/locale/zh-cn.js",
	"./zh-cn.js": "../../../../date-and-time/locale/zh-cn.js",
	"./zh-tw": "../../../../date-and-time/locale/zh-tw.js",
	"./zh-tw.js": "../../../../date-and-time/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../date-and-time/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map