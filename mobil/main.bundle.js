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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__componentes_home_page_home_page_component__ = __webpack_require__("../../../../../src/app/componentes/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componentes_login_page_login_page_component__ = __webpack_require__("../../../../../src/app/componentes/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__componentes_register_page_register_page_component__ = __webpack_require__("../../../../../src/app/componentes/register-page/register-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__componentes_privado_page_privado_page_component__ = __webpack_require__("../../../../../src/app/componentes/privado-page/privado-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__componentes_not_found_page_not_found_page_component__ = __webpack_require__("../../../../../src/app/componentes/not-found-page/not-found-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__componentes_croquis_croquis_component__ = __webpack_require__("../../../../../src/app/componentes/croquis/croquis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__componentes_home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__componentes_login_page_login_page_component__["a" /* LoginPageComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__componentes_register_page_register_page_component__["a" /* RegisterPageComponent */] },
    { path: 'privado', component: __WEBPACK_IMPORTED_MODULE_5__componentes_privado_page_privado_page_component__["a" /* PrivadoPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'croquis', component: __WEBPACK_IMPORTED_MODULE_7__componentes_croquis_croquis_component__["a" /* CroquisComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__componentes_not_found_page_not_found_page_component__["a" /* NotFoundPageComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n    <flash-messages></flash-messages>\n    <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__componentes_home_page_home_page_component__ = __webpack_require__("../../../../../src/app/componentes/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__componentes_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/componentes/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__componentes_register_page_register_page_component__ = __webpack_require__("../../../../../src/app/componentes/register-page/register-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__componentes_login_page_login_page_component__ = __webpack_require__("../../../../../src/app/componentes/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__componentes_privado_page_privado_page_component__ = __webpack_require__("../../../../../src/app/componentes/privado-page/privado-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__componentes_not_found_page_not_found_page_component__ = __webpack_require__("../../../../../src/app/componentes/not-found-page/not-found-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__servicios_auth_service__ = __webpack_require__("../../../../../src/app/servicios/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__componentes_croquis_croquis_component__ = __webpack_require__("../../../../../src/app/componentes/croquis/croquis.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__componentes_home_page_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_6__componentes_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__componentes_register_page_register_page_component__["a" /* RegisterPageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__componentes_login_page_login_page_component__["a" /* LoginPageComponent */],
                __WEBPACK_IMPORTED_MODULE_9__componentes_privado_page_privado_page_component__["a" /* PrivadoPageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__componentes_not_found_page_not_found_page_component__["a" /* NotFoundPageComponent */],
                __WEBPACK_IMPORTED_MODULE_17__componentes_croquis_croquis_component__["a" /* CroquisComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_14__environments_environment__["a" /* environment */].firebaseconfig),
                __WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__servicios_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages__["FlashMessagesService"]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/componentes/croquis/croquis.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n        <tbody>\n          <tr>\n            <th scope=\"row\"></th>\n            <td>\n                    <div class=\"btn-group-vertical\">\n        <button type=\"button\" class=\"btn btn-dark\">A: CENTRO DE INFORMACION.</button>\n        <button type=\"button\" class=\"btn btn-dark\">B: AULAS DE LETRAS Y CIENCIAS BASICAS.</button>\n        <button type=\"button\" class=\"btn btn-dark\">C: LABORATORIO DE QUIMICA Y FISICA.</button>\n        <button type=\"button\" class=\"btn btn-dark\">D: LABORATORIO DE METODOS.</button>\n        <button type=\"button\" class=\"btn btn-dark\">E: SALA AUDIOVISUAL Y ESTACION DE RADIO.</button>\n        <button type=\"button\" class=\"btn btn-dark\">F: LABORATORIO DE ELECTRONICA E INCUBADORA DE PROYECTOS.</button>\n        <button type=\"button\" class=\"btn btn-dark\">G: UNIDAD ACADÉMICA DEPARTAMENTAL.</button>\n        </div>\n            </td>\n            <td>\n                    <div class=\"btn-group-vertical\">\n                            <button type=\"button\" class=\"btn btn-dark\">H: AULAS DE CIVIL.</button>\n                            <button type=\"button\" class=\"btn btn-dark\">I: LABORATORIO DE INGENIERIA CIVIL.</button>\n                            <button type=\"button\" class=\"btn btn-dark\">J: LABORATORIO DE COMPUTO.</button>\n                            <button type=\"button\" class=\"btn btn-dark\">k: GIMNASIO AUDITORIO.</button>\n                            <button type=\"button\" class=\"btn btn-dark\">L: EDIFICIO DE RECURSOS MATERIALES</button>\n                            <button type=\"button\" class=\"btn btn-dark\">M: CAFETERIA.</button>\n                            </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n<div class=\"jumbotron\">\n<div style=\"width: 102%; height: 102%\">\n    <img src=\"assets/img/Recurso 2.svg\">    \n</div>\n</div>\n<div class=\"btn-group\">\n        <button type=\"button\" class=\"btn btn-default dropdown-toggle\"\n                data-toggle=\"dropdown\">\n          Botón Desplegable\n          <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu\">\n            <div class=\"btn-group-vertical\">\n                <button type=\"button\" class=\"btn btn-dark\">A: CENTRO DE INFORMACION.</button>\n                <button type=\"button\" class=\"btn btn-dark\">B: AULAS DE LETRAS Y CIENCIAS BASICAS.</button>\n                <button type=\"button\" class=\"btn btn-dark\">C: LABORATORIO DE QUIMICA Y FISICA.</button>\n                <button type=\"button\" class=\"btn btn-dark\">D: LABORATORIO DE METODOS.</button>\n                <button type=\"button\" class=\"btn btn-dark\">E: SALA AUDIOVISUAL Y ESTACION DE RADIO.</button>\n                <button type=\"button\" class=\"btn btn-dark\">F: LABORATORIO DE ELECTRONICA E INCUBADORA DE PROYECTOS.</button>\n                <button type=\"button\" class=\"btn btn-dark\">G: UNIDAD ACADÉMICA DEPARTAMENTAL.</button>\n            </div>\n        </ul>\n      </div>"

/***/ }),

/***/ "../../../../../src/app/componentes/croquis/croquis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CroquisComponent; });
/* unused harmony export AppComponent */
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

var CroquisComponent = /** @class */ (function () {
    function CroquisComponent() {
    }
    CroquisComponent.prototype.ngOnInit = function () {
    };
    CroquisComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-croquis',
            template: __webpack_require__("../../../../../src/app/componentes/croquis/croquis.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], CroquisComponent);
    return CroquisComponent;
}());

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.zoom = 1.8;
        this.translate = { x: -50, y: -20 };
    }
    Object.defineProperty(AppComponent.prototype, "svgTransform", {
        get: function () {
            // @link https://www.safaribooksonline.com/library/view/svg-essentials/0596002238/ch05s06.html
            var centerX = 50;
            var centerY = 0;
            var offX = -centerX * (this.zoom - 1);
            var offY = -centerY * (this.zoom - 1);
            var trsl = "translate(" + offX + ", " + offY + ")";
            return trsl + " translate(" + this.translate.x + ", " + this.translate.y + ") scale(" + this.zoom + ", " + this.zoom + ")";
        },
        enumerable: true,
        configurable: true
    });
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/componentes/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<style>video {\n  width: 100%;\n  height: auto;\n}</style>\n<div class=\"jumbotron mt-3\">\n  <video width=\"640\" height=\"480\" src=\"assets/video/oferta.webm\" controls controlsList=\"nodownload\" autoplay></video>\n    <hr class=\"my-4\">\n    <h1 class=\"display-4\">I.T.T</h1>\n    <p class=\"lead\">INSTITUTO TECNOLOGICO DE TLAXIACO</p>\n    <p class=\"lead\">\"CIENCIA Y TECNOLOGIA PROGRESO DIA CON DIA\"</p> \n  <p>GENERANDO INGENIEROS PARA EL MUNDO LABORAL.</p>\n  <p class=\"lead\">\n    <a class=\"btn btn-primary btn-lg\" routerLink=\"/privado\" role=\"button\">Learn more</a>\n  </p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/home-page/home-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
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

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__("../../../../../src/app/componentes/home-page/home-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/home-page/home-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/componentes/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 mx-auto mt-5\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h1 class=\"text-center\">LOGIN</h1>\n        <form (submit)=\"onSubmitLogin()\">\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" name=\"email\" id=\"email\" [(ngModel)]=\"email\" class=\"form-control\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Contraseña</label>\n            <input type=\"password\" name=\"password\" id=\"password\" [(ngModel)]=\"password\" class=\"form-control\">\n          </div>\n          <input type=\"submit\" value=\"ENVIAR\" class=\"btn btn-primary btn-block btn-lg\">\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-6 mx-auto mt-2\">\n    <div class=\"card\">\n      <div class=\"card-body d-flex justify-content-around\">\n        <button class=\"btn btn-lg btn-facebook\" (click)=\"onClickFacebookLogin()\" ><i class=\"fa fa-facebook\"></i> Facebook</button>\n        <button class=\"btn btn-lg btn-google\" (click)=\"onClickGoogleLogin()\" ><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i> Google</button>\n        <button class=\"btn btn-lg btn-twitter\" (click)=\"onClickTwitterLogin()\" ><i class=\"fa fa-twitter\"></i> Twitter</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/login-page/login-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-facebook, .btn-google, .btn-twitter {\n  width: 32%; }\n\n.btn-facebook {\n  background: #3b5998;\n  color: #fff; }\n\n.btn-google {\n  background: #dd4b39;\n  color: #fff; }\n\n.btn-twitter {\n  background: #55acee;\n  color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_auth_service__ = __webpack_require__("../../../../../src/app/servicios/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(authService, router, flashMensaje) {
        this.authService = authService;
        this.router = router;
        this.flashMensaje = flashMensaje;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent.prototype.onSubmitLogin = function () {
        var _this = this;
        this.authService.loginEmail(this.email, this.password)
            .then(function (res) {
            _this.flashMensaje.show('Usuario logado correctamente.', { cssClass: 'alert-success', timeout: 4000 });
            _this.router.navigate(['/privado']);
        }).catch(function (err) {
            _this.flashMensaje.show(err.message, { cssClass: 'alert-danger', timeout: 4000 });
            _this.router.navigate(['/login']);
        });
    };
    LoginPageComponent.prototype.onClickGoogleLogin = function () {
        var _this = this;
        this.authService.loginGoogle()
            .then(function (res) {
            _this.router.navigate(['/privado']);
        }).catch(function (err) { return console.log(err.message); });
    };
    LoginPageComponent.prototype.onClickFacebookLogin = function () {
        var _this = this;
        this.authService.loginFacebook()
            .then(function (res) {
            _this.router.navigate(['/privado']);
        }).catch(function (err) { return console.log(err.message); });
    };
    LoginPageComponent.prototype.onClickTwitterLogin = function () {
        var _this = this;
        this.authService.loginTwitter()
            .then(function (res) {
            _this.router.navigate(['/privado']);
        }).catch(function (err) { return console.log(err.message); });
    };
    LoginPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__("../../../../../src/app/componentes/login-page/login-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/login-page/login-page.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/componentes/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" routerLink=\"/\">Info<span class=\"text-danger\">Tec</span></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor02\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/privado\">Edificios<span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/croquis\">Croquis<span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n  </div>\n  <div>\n    <ul class=\"navbar-nav mx-auto\">\n      <li class=\"nav-item\" *ngIf=\"!isLogin\">\n        <a class=\"nav-link\" href=\"#\" routerLink=\"/login\">Login</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!isLogin\">\n        <a class=\"nav-link\" href=\"#\" routerLink=\"/register\">Registrarse</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"isLogin\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"onClickLogout()\" >Salir</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\">{{nombreUsuario}}</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"isLogin\">\n        <img src=\"{{fotoUsuario}}\" class=\"rounded-circle\">\n        <span class=\"badge pill badge-secondary\">{{emailUsuario}}</span>\n      </li>\n    </ul>\n\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/componentes/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img.rounded-circle {\n  width: 45px;\n  height: 45px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_auth_service__ = __webpack_require__("../../../../../src/app/servicios/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.isLogin = true;
                _this.nombreUsuario = auth.displayName;
                _this.emailUsuario = auth.email;
                _this.fotoUsuario = auth.photoURL;
            }
            else {
                _this.isLogin = false;
            }
        });
    };
    NavbarComponent.prototype.onClickLogout = function () {
        this.authService.logout();
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/componentes/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_auth_service__["a" /* AuthService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/componentes/not-found-page/not-found-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-3\">\n  <div class=\"col-md-6 mx-auto text-center\">\n    <div class=\"card\">\n      <h1>Oops!</h1>\n      <h2>404 Página no encontrada</h2>\n      <div class=\"card-body\">\n        <a href=\"/\" class=\"btn btn-primary btn-lg\"><i class=\"fa fa-home\"></i> Ir a la home página</a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/not-found-page/not-found-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/not-found-page/not-found-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundPageComponent; });
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

var NotFoundPageComponent = /** @class */ (function () {
    function NotFoundPageComponent() {
    }
    NotFoundPageComponent.prototype.ngOnInit = function () {
    };
    NotFoundPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found-page',
            template: __webpack_require__("../../../../../src/app/componentes/not-found-page/not-found-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/not-found-page/not-found-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/componentes/privado-page/privado-page.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Clave del edificio</th>\n      <th scope=\"col\">Nombre del edificio</th>\n      <th scope=\"col\">Tramites</th>\n      <th scope=\"col\">Fotos del edificio</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class=\"table-active\">\n    <tr class=\"table-dark\">\n      <th scope=\"row\">A</th>\n      <td> CENTRO DE INFORMACION</td>\n      <td>CONSULTA DE LIBROS,PRESTAMO Y AREAS DE ESTUDIO</td>\n      <td><button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#A\">\n        Foto\n      </button></td>\n    </tr>\n    <tr class=\"table-dark\">\n      <th scope=\"row\">B</th>\n      <td> AULAS DE LETRAS Y CIENCIAS BASICAS</td>\n      <td>AULAS DE CLASES DE LICENCIATURA EN ADMINISTRACION E INGENIERIA EN GESTION EMPRESARIAL</td>\n      <td><button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#B\">\n        Foto\n      </button></td>\n    </tr>\n    <tr class=\"table-dark\">\n        <th scope=\"row\">C</th>\n        <td> LABORATORIO DE QUIMICA Y FISICA.</td>\n        <td>LABORATORIOS PARA PRACTICAS. Y AULAS PARA IMPARTIR CLASES.</td>\n        <td><button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#C\">\n          Foto\n        </button></td>\n      </tr>\n      <tr class=\"table-dark\">\n          <th scope=\"row\">D</th>\n          <td> LABORATORIO DE METODOS.</td>\n          <td>AULAS DE CLASES DE INGENIERIA INDUSTRIAL. Y SE REALIZAN PRACTICAS.</td>\n          <td><button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#D\">\n            Foto\n          </button></td>\n        </tr>\n        <tr class=\"table-dark\">\n            <th scope=\"row\">E</th>\n            <td>  SALA AUDIOVISUAL Y ESTACION DE RADIO.</td>\n            <td>EXPOSICION DE PONENCIAS,ESTACION DE RADIO Y TITULACIONES PROFECIONALES.</td>\n            <td><button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#E\">\n              Foto\n            </button></td>\n          </tr>\n          <tr class=\"table-dark\">\n              <th scope=\"row\">F</th>\n              <td>  LABORATORIO DE ELECTRONICA.</td>\n              <td>PRACTICAS Y IMPRESORAS 3D. </td>\n              <td><button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#F\">\n                Foto\n              </button></td>\n            </tr>\n            <tr class=\"table-dark\">\n                <th scope=\"row\">G</th>\n                <td> UNIDAD ACADÉMICA DEPARTAMENTAL.</td>\n                <td>AULAS DE CLASES,AREA DE FINANCIEROS,CAJA DE PAGO DE SERVICIOS,DIRECCION Y SUBDIRECCIONES DE LA INSTITUCION </td>\n                <td><button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#G\">\n                  Foto\n                </button></td>\n              </tr>\n              <tr class=\"table-dark\">\n                  <th scope=\"row\">H</th>\n                  <td> AULAS DE CIVIL.</td>\n                  <td>AULAS DE CLASES DE LICENCIATURA EN ADMINISTRACION E INGENIERIA EN GESTION EMPRESARIAL</td>\n                  <td><button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#H\">\n                    Foto\n                  </button></td>\n                </tr>\n                <tr class=\"table-dark\">\n                    <th scope=\"row\">I</th>\n                    <td> AULAS DE LETRAS Y CIENCIAS BASICAS</td>\n                    <td>AULAS DE CLASES DE LICENCIATURA EN ADMINISTRACION E INGENIERIA EN GESTION EMPRESARIAL</td>\n                    <td><button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#I\">\n                      Foto\n                    </button></td>\n                  </tr>\n                  <tr class=\"table-dark\">\n                      <th scope=\"row\">J</th>\n                      <td> LABORATORIO DE COMPUTO.</td>\n                      <td>ACS,LDC,RDS,DEPARTAMENTO DE INGENIERIAS Y DEPARTAMENTO VINCULACION</td>\n                      <td><button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#J\">\n                        Foto\n                      </button></td>\n                    </tr>\n                    <tr class=\"table-dark\">\n                        <th scope=\"row\">K</th>\n                        <td> GIMNASIO AUDITORIO</td>\n                        <td>CANCHA DE BASQUETBOL Y ESPACIO DE EVENTOS</td>\n                        <td><button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#K\">\n                          Foto\n                        </button></td>\n                      </tr>\n                      <tr class=\"table-dark\">\n                          <th scope=\"row\">L</th>\n                          <td> EDIFICIO DE RECURSOS MATERIALES.</td>\n                          <td>AULAS DE CLASES DE LICENCIATURA EN ADMINISTRACION E INGENIERIA EN GESTION EMPRESARIAL</td>\n                          <td><button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#L\">\n                            Foto\n                          </button></td>\n                        </tr>\n                        <tr class=\"table-dark\">\n                            <th scope=\"row\">M</th>\n                            <td> CAFETERIA</td>\n                            <td>AULAS DE CLASES DE LICENCIATURA EN ADMINISTRACION E INGENIERIA EN GESTION EMPRESARIAL</td>\n                            <td><button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#M\">\n                              Foto\n                            </button></td>\n                          </tr>\n  </tbody>\n</table> \n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"A\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ALabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"ALabel\">CENTRO DE INFORMACION</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <img style=\"height: 100%; width: 100%; display: block;\" src=\"assets/img/A.jpg\">\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Modal -->\n<div class=\"modal fade\" id=\"B\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"BLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"BLabel\">EDIFICIO DE LETRAS</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <img style=\"height: 100%; width: 100%; display: block;\" src=\"assets/img/B.jpg\">\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Modal -->\n<div class=\"modal fade\" id=\"C\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"CLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"CLabel\">LABORATORIO DE QUIMICA Y FISICA.</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <img style=\"height: 100%; width: 100%; display: block;\" src=\"assets/img/C.jpg\">\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Modal -->\n<div class=\"modal fade\" id=\"D\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"DLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"DLabel\">LABORATORIO DE METODOS.</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <img style=\"height: 100%; width: 100%; display: block;\" src=\"assets/img/D.jpg\">\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Modal -->\n<div class=\"modal fade\" id=\"E\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ELabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"ELabel\">SALA AUDIOVISUAL Y ESTACION DE RADIO.</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <img style=\"height: 100%; width: 100%; display: block;\" src=\"assets/img/E.jpg\">\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Modal -->\n<div class=\"modal fade\" id=\"F\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"FLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"FLabel\">LABORATORIO DE ELECTRONICA.</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <img style=\"height: 100%; width: 100%; display: block;\" src=\"assets/img/F.jpg\">\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Modal -->\n<div class=\"modal fade\" id=\"G\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"GLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"GLabel\">UNIDAD ACADÉMICA DEPARTAMENTAL.</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <img style=\"height: 100%; width: 100%; display: block;\" src=\"assets/img/G.jpg\">\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n    <!-- Modal -->\n<div class=\"modal fade\" id=\"H\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"HLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"HLabel\">AULAS DE INGENIERIA CIVIL</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <img style=\"height: 100%; width: 100%; display: block;\" src=\"assets/img/H.jpg\">\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n    <!-- Modal -->\n<div class=\"modal fade\" id=\"I\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ILabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"ILabel\">LABORATORIO DE INGENIERIA CIVIL</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <img style=\"height: 100%; width: 100%; display: block;\" src=\"assets/img/I.jpg\">\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n    <!-- Modal -->\n<div class=\"modal fade\" id=\"J\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"JLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"JLabel\">LABORATORIO DE COMPUTO</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <img style=\"height: 100%; width: 100%; display: block;\" src=\"assets/img/J.jpg\">\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n    <!-- Modal -->\n<div class=\"modal fade\" id=\"K\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"KLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"KLabel\">GIMNASIO AUDITORIO</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <img style=\"height: 100%; width: 100%; display: block;\" src=\"assets/img/K.jpg\">\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n    <!-- Modal -->\n<div class=\"modal fade\" id=\"L\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"LLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"GLabel\">MATERIALES</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <img style=\"height: 100%; width: 100%; display: block;\" src=\"assets/img/L.jpg\">\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n    <!-- Modal -->\n<div class=\"modal fade\" id=\"M\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"MLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"MLabel\">CAFETERIA</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <img style=\"height: 100%; width: 100%; display: block;\" src=\"assets/img/M.jpg\">\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/componentes/privado-page/privado-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/privado-page/privado-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivadoPageComponent; });
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

var PrivadoPageComponent = /** @class */ (function () {
    function PrivadoPageComponent() {
    }
    PrivadoPageComponent.prototype.ngOnInit = function () {
    };
    PrivadoPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-privado-page',
            template: __webpack_require__("../../../../../src/app/componentes/privado-page/privado-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/privado-page/privado-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivadoPageComponent);
    return PrivadoPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/componentes/register-page/register-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6 mx-auto mt-5\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h1 class=\"text-center\">REGISTRO</h1>\n          <form (submit)=\"onSubmitAddUser()\">\n            <div class=\"form-group\">\n              <label for=\"email\">Email</label>\n              <input type=\"email\" name=\"email\" id=\"email\" [(ngModel)]=\"email\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"password\">Contraseña</label>\n              <input type=\"password\" name=\"password\" id=\"password\" [(ngModel)]=\"password\" class=\"form-control\">\n            </div>\n            <input type=\"submit\" value=\"ENVIAR\" class=\"btn btn-primary btn-block btn-lg\">\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/register-page/register-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/register-page/register-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_auth_service__ = __webpack_require__("../../../../../src/app/servicios/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPageComponent = /** @class */ (function () {
    function RegisterPageComponent(authService, router, flashMensaje) {
        this.authService = authService;
        this.router = router;
        this.flashMensaje = flashMensaje;
    }
    RegisterPageComponent.prototype.ngOnInit = function () {
    };
    RegisterPageComponent.prototype.onSubmitAddUser = function () {
        var _this = this;
        this.authService.registerUser(this.email, this.password)
            .then(function (res) {
            _this.flashMensaje.show('Usuario creado correctamente.', { cssClass: 'alert-success', timeout: 4000 });
            _this.router.navigate(['/privado']);
        }).catch(function (err) {
            _this.flashMensaje.show(err.message, { cssClass: 'alert-danger', timeout: 4000 });
        });
    };
    RegisterPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register-page',
            template: __webpack_require__("../../../../../src/app/componentes/register-page/register-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/register-page/register-page.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], RegisterPageComponent);
    return RegisterPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__servicios_auth_service__ = __webpack_require__("../../../../../src/app/servicios/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, afAuth, authService) {
        this.router = router;
        this.afAuth = afAuth;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.afAuth.authState
            .take(1)
            .map(function (authState) { return !!authState; })
            .do(function (authenticated) {
            if (!authenticated) {
                _this.router.navigate(['/login']);
            }
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_6__servicios_auth_service__["a" /* AuthService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/servicios/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
    }
    AuthService.prototype.loginTwitter = function () {
        return this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].TwitterAuthProvider());
    };
    AuthService.prototype.loginFacebook = function () {
        return this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].FacebookAuthProvider());
    };
    AuthService.prototype.loginGoogle = function () {
        return this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.registerUser = function (email, pass) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.loginEmail = function (email, pass) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, pass)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.getAuth = function () {
        return this.afAuth.authState.map(function (auth) { return auth; });
    };
    AuthService.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
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
    production: false,
    firebaseconfig: {
        apiKey: "AIzaSyAHyaqoKRpSfA_kNM1cqSR_y4aYVJdECNY",
        authDomain: "login1-40ab2.firebaseapp.com",
        databaseURL: "https://login1-40ab2.firebaseio.com",
        projectId: "login1-40ab2",
        storageBucket: "login1-40ab2.appspot.com",
        messagingSenderId: "151650153212",
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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