webpackJsonp([2],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddDataPage = /** @class */ (function () {
    function AddDataPage(navCtrl, navParams, sqlite, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sqlite = sqlite;
        this.toast = toast;
        this.dados = { data: "", tipo: "", descricao: "", saldo: 0 };
    }
    AddDataPage.prototype.salvaDados = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('INSERT INTO gastos VALUES(NULL,?,?,?,?)', [_this.dados.data, _this.dados.tipo, _this.dados.descricao, _this.dados.saldo])
                .then(function (res) {
                console.log(res);
                _this.toast.show('Inclusão de dados con sucesso', '5000', 'center').subscribe(function (toast) {
                    _this.navCtrl.popToRoot();
                });
            })
                .catch(function (e) {
                console.log(e);
                _this.toast.show(e, '5000', 'center').subscribe(function (toast) {
                    console.log(toast);
                });
            });
        }).catch(function (e) {
            console.log(e);
            _this.toast.show(e, '5000', 'center').subscribe(function (toast) {
                console.log(toast);
            });
        });
    };
    AddDataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-data',template:/*ion-inline-start:"/home/jimi/ETEC/MOBILE/sqliteTeste/src/pages/add-data/add-data.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Meus Gastos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <h2>Adicionar dados</h2>\n  <form (ngSubmit)="salvaDados()">\n    <ion-item>\n      <ion-label>Data</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="dados.data" name="data" required=""></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Tipo</ion-label>\n      <ion-select [(ngModel)]="dados.tipo" name="tipo" required="">\n        <ion-option value="Receita">Receita</ion-option>\n        <ion-option value="Despesa">Despesa</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Descrição</ion-label>\n      <ion-input type="text" placeholder="Descrição" [(ngModel)]="dados.descricao" name="descricao" required="" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Valor</ion-label>\n      <ion-input type="number" placeholder="Valor" [(ngModel)]="dados.saldo" name="saldo" required="" ></ion-input>\n    </ion-item>\n    <button ion-button type="submit" block>Salvar dados</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/jimi/ETEC/MOBILE/sqliteTeste/src/pages/add-data/add-data.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__["a" /* Toast */]])
    ], AddDataPage);
    return AddDataPage;
}());

//# sourceMappingURL=add-data.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditDataPage = /** @class */ (function () {
    function EditDataPage(navCtrl, navParams, sqlite, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sqlite = sqlite;
        this.toast = toast;
        this.dados = { id: 0, data: "", tipo: "", descricao: "", saldo: 0 };
        this.getCurrentData(navParams.get("id"));
    }
    EditDataPage.prototype.getCurrentData = function (id) {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('SELECT * FROM gastos WHERE id=?', [id])
                .then(function (res) {
                if (res.rows.length > 0) {
                    _this.dados.id = res.rows.item(0).id;
                    _this.dados.data = res.rows.item(0).data;
                    _this.dados.tipo = res.rows.item(0).tipo;
                    _this.dados.descricao = res.rows.item(0).descricao;
                    _this.dados.saldo = res.rows.item(0).valor; //aqui pode estar errado valor ou saldo
                }
            })
                .catch(function (e) {
                console.log(e);
                _this.toast.show(e, '5000', 'center').subscribe(function (toast) {
                    console.log(toast);
                });
            });
        }).catch(function (e) {
            console.log(e);
            _this.toast.show(e, '5000', 'center').subscribe(function (toast) {
                console.log(toast);
            });
        });
    };
    EditDataPage.prototype.atualizaData = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('UPDATE gastos SET data=?,tipo=?,descricao=?,valor=? WHERE id=?', [_this.dados.data, _this.dados.tipo, _this.dados.descricao, _this.dados.saldo, _this.dados.id])
                .then(function (res) {
                console.log(res);
                _this.toast.show('Dados atualizados com sucesso', '5000', 'center').subscribe(function (toast) {
                    _this.navCtrl.popToRoot();
                });
            })
                .catch(function (e) {
                console.log(e);
                _this.toast.show(e, '5000', 'center').subscribe(function (toast) {
                    console.log(toast);
                });
            });
        }).catch(function (e) {
            console.log(e);
            _this.toast.show(e, '5000', 'center').subscribe(function (toast) {
                console.log(toast);
            });
        });
    };
    EditDataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-data',template:/*ion-inline-start:"/home/jimi/ETEC/MOBILE/sqliteTeste/src/pages/edit-data/edit-data.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Meus Gastos - ETEC 3º TI</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <h2>Editar dados</h2>\n  <form (ngSubmit)="atualizaData()">\n    <ion-item>\n      <ion-label>Data</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="dados.data" name="data" required=""></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Tipo</ion-label>\n      <ion-select [(ngModel)]="dados.tipo" name="tipo" required="">\n        <ion-option value="Receita">Receita</ion-option>\n        <ion-option value="Despesa">Despesa</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Descrição</ion-label>\n      <ion-input type="text" placeholder="Descrição" [(ngModel)]="dados.descricao" name="descricao" required="" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Valor</ion-label>\n      <ion-input type="number" placeholder="Valor" [(ngModel)]="dados.saldo" name="saldo" required="" ></ion-input>\n    </ion-item>\n    <ion-input type="hidden" [(ngModel)]="dados.id" name="id"></ion-input>\n    <button ion-button type="submit" block>Atualizar dados</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/jimi/ETEC/MOBILE/sqliteTeste/src/pages/edit-data/edit-data.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__["a" /* Toast */]])
    ], EditDataPage);
    return EditDataPage;
}());

//# sourceMappingURL=edit-data.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-data/add-data.module": [
		273,
		1
	],
	"../pages/edit-data/edit-data.module": [
		274,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_data_add_data__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_data_edit_data__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, sqlite) {
        this.navCtrl = navCtrl;
        this.sqlite = sqlite;
        this.gastos = [];
        this.totalRecebido = 0;
        this.totalGasto = 0;
        this.saldo = 0;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.pegaDados();
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.pegaDados();
    };
    HomePage.prototype.pegaDados = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('CREATE TABLE IF NOT EXISTS gastos(id INTEGER PRIMARY KEY, data TEXT, tipo TEXT, descricao TEXT, valor INT)', {})
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('SELECT * FROM gastos ORDER BY id DESC', {})
                .then(function (res) {
                _this.gastos = [];
                for (var i = 0; i < res.rows.length; i++) {
                    _this.gastos.push({ id: res.rows.item(i).id, data: res.rows.item(i).data, tipo: res.rows.item(i).tipo, descricao: res.rows.item(i).descricao, valor: res.rows.item(i).valor });
                }
            })
                .catch(function (e) { return console.log(e); });
            db.executeSql('SELECT SUM(valor) AS totalRecebido FROM gastos WHERE tipo="Despesa"', {})
                .then(function (res) {
                if (res.rows.length > 0) {
                    _this.totalRecebido = parseInt(res.rows.item(0).totalRecebido);
                    _this.saldo = _this.totalRecebido - _this.totalGasto;
                }
            })
                .catch(function (e) { return console.log(e); });
            db.executeSql('SELECT SUM(valor) AS totalGasto FROM gastos WHERE tipo="Receita"', {})
                .then(function (res) {
                if (res.rows.length > 0) {
                    _this.totalGasto = parseInt(res.rows.item(0).totalGasto);
                    _this.saldo = _this.totalRecebido - _this.totalGasto;
                }
            });
        }).catch(function (e) { return console.log(e); });
    };
    HomePage.prototype.addDados = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_data_add_data__["a" /* AddDataPage */]);
    };
    HomePage.prototype.editaDados = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_data_edit_data__["a" /* EditDataPage */], {
            id: id
        });
    };
    HomePage.prototype.deletaDados = function (id) {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('DELETE FROM gastos WHERE id=?', [id])
                .then(function (res) {
                console.log(res);
                _this.pegaDados();
            })
                .catch(function (e) { return console.log(e); });
        }).catch(function (e) { return console.log(e); });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/jimi/ETEC/MOBILE/sqliteTeste/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Meus Gastos - ETEC 3º TI\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addDados()">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Lista de gastos</h2>\n  <ion-list>\n    <ion-item-sliding *ngFor="let gastos of gastos; let i=index">\n      <ion-item nopadding>\n        <p>\n          <span>{{gastos.data}}</span><br>\n          Tipo: {{gastos.tipo}}<br>\n          {{gastos.descricao}}\n        </p>\n        <h3 item-end>\n          Quantidade: ${{gastos.valor}}\n        </h3>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="primary" (click)="editaDados(gastos.id)">\n          <ion-icon name="paper"></ion-icon>\n        </button>\n        <button ion-button color="danger" (click)="deletaDados(gastos.id)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-title>Saldo: ${{saldo}}</ion-title>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/jimi/ETEC/MOBILE/sqliteTeste/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_toast__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_data_add_data__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_edit_data_edit_data__ = __webpack_require__(103);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_data_add_data__["a" /* AddDataPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_edit_data_edit_data__["a" /* EditDataPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-data/add-data.module#AddDataPageModule', name: 'AddDataPage', segment: 'add-data', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-data/edit-data.module#EditDataPageModule', name: 'EditDataPage', segment: 'edit-data', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_data_add_data__["a" /* AddDataPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_edit_data_edit_data__["a" /* EditDataPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_toast__["a" /* Toast */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/jimi/ETEC/MOBILE/sqliteTeste/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/jimi/ETEC/MOBILE/sqliteTeste/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map