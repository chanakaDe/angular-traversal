webpackJsonp([0,3],{

/***/ 1001:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resolver__ = __webpack_require__(273);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return BACKEND_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BasicHttpResolver; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



// the actual value will be provided by the module
var BACKEND_BASE_URL = '';
var BasicHttpResolver = (function (_super) {
    __extends(BasicHttpResolver, _super);
    function BasicHttpResolver(http, backend) {
        _super.call(this);
        this.http = http;
        this.backend = backend;
    }
    BasicHttpResolver.prototype.resolve = function (path) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.backend + path, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BasicHttpResolver.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */] },
    ];
    /** @nocollapse */
    BasicHttpResolver.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */], },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */], args: [BACKEND_BASE_URL,] },] },
    ];
    return BasicHttpResolver;
}(__WEBPACK_IMPORTED_MODULE_2__resolver__["a" /* Resolver */]));


/***/ },

/***/ 1002:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__module__ = __webpack_require__(1003);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__traverser__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__traverser_directive__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__traverser_link__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resolver__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_resolver__ = __webpack_require__(1001);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__marker__ = __webpack_require__(451);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__module__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__traverser__["a"]; });
/* unused harmony reexport TraverserOutlet */
/* unused harmony reexport TraverserLink */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__resolver__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__http_resolver__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__http_resolver__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__marker__["a"]; });









/***/ },

/***/ 1003:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__traverser_directive__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__traverser_link__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__traverser__ = __webpack_require__(170);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TraversalModule; });






var TraversalModule = (function () {
    function TraversalModule() {
    }
    TraversalModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */], args: [{
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_3__traverser_directive__["a" /* TraverserOutlet */],
                        __WEBPACK_IMPORTED_MODULE_4__traverser_link__["a" /* TraverserLink */],
                    ],
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
                    ],
                    providers: [
                        __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* Location */],
                        { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* PathLocationStrategy */] },
                        __WEBPACK_IMPORTED_MODULE_5__traverser__["a" /* Traverser */],
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_3__traverser_directive__["a" /* TraverserOutlet */],
                        __WEBPACK_IMPORTED_MODULE_4__traverser_link__["a" /* TraverserLink */],
                    ]
                },] },
    ];
    /** @nocollapse */
    TraversalModule.ctorParameters = [];
    return TraversalModule;
}());


/***/ },

/***/ 1006:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(455);


/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resolver__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__marker__ = __webpack_require__(451);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Traverser; });





var Traverser = (function () {
    function Traverser(location, resolver, marker) {
        this.location = location;
        this.resolver = resolver;
        this.marker = marker;
        this.views = {};
        this.target = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["BehaviorSubject"]({
            context: {},
            path: '',
            view: 'view',
            component: null,
        });
    }
    Traverser.prototype.traverse = function (path, navigate) {
        var _this = this;
        if (navigate === void 0) { navigate = true; }
        var contextPath = path;
        var view = 'view';
        if (path.indexOf('@@') > -1) {
            contextPath = path.split('/@@')[0];
            view = path.split('/@@')[1];
        }
        if (navigate) {
            this.location.go(path);
        }
        if (this.views[view]) {
            this.resolver.resolve(contextPath).subscribe(function (context) {
                var marker = _this.marker.mark(context);
                var component = _this.views[view][marker];
                if (!component) {
                    component = _this.views[view]['*'];
                }
                if (component) {
                    _this.target.next({
                        context: context,
                        path: path,
                        view: view,
                        component: component,
                    });
                }
            });
        }
    };
    Traverser.prototype.addView = function (name, target, component) {
        if (!this.views[name]) {
            this.views[name] = {};
        }
        this.views[name][target] = component;
    };
    Traverser.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */] },
    ];
    /** @nocollapse */
    Traverser.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* Location */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__resolver__["a" /* Resolver */], },
        { type: __WEBPACK_IMPORTED_MODULE_4__marker__["a" /* Marker */], },
    ];
    return Traverser;
}());


/***/ },

/***/ 273:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Resolver; });

var Resolver = (function () {
    function Resolver() {
    }
    Resolver.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */] },
    ];
    /** @nocollapse */
    Resolver.ctorParameters = [];
    return Resolver;
}());


/***/ },

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dist__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_file_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__file_info_file_info_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__folder_folder_component__ = __webpack_require__(357);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(traverser) {
        this.repository = 'makinacorpus/angular-traversal';
        traverser.addView('view', 'file', __WEBPACK_IMPORTED_MODULE_2__file_file_component__["a" /* FileComponent */]);
        traverser.addView('info', 'file', __WEBPACK_IMPORTED_MODULE_3__file_info_file_info_component__["a" /* FileInfoComponent */]);
        traverser.addView('view', 'dir', __WEBPACK_IMPORTED_MODULE_4__folder_folder_component__["a" /* FolderComponent */]);
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(719),
            styles: [__webpack_require__(715)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dist__["a" /* Traverser */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__dist__["a" /* Traverser */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/home/ebr/dev/osprojects/plone_client/angular-traversal/tests/src/app.component.js.map

/***/ },

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dist__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FileInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileInfoComponent = (function () {
    function FileInfoComponent(traverser) {
        this.traverser = traverser;
    }
    FileInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.traverser.target.subscribe(function (target) {
            _this.context = target.context;
        });
    };
    FileInfoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-file-info',
            template: __webpack_require__(720),
            styles: [__webpack_require__(716)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dist__["a" /* Traverser */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__dist__["a" /* Traverser */]) === 'function' && _a) || Object])
    ], FileInfoComponent);
    return FileInfoComponent;
    var _a;
}());
//# sourceMappingURL=/home/ebr/dev/osprojects/plone_client/angular-traversal/tests/src/file-info.component.js.map

/***/ },

/***/ 356:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dist__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileComponent = (function () {
    function FileComponent(traverser) {
        this.traverser = traverser;
    }
    FileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.traverser.target.subscribe(function (target) {
            var context = target.context;
            _this.name = context.name;
            _this.code = atob(context.content);
            _this.path = target.path.split('?')[0];
        });
    };
    FileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-file',
            template: __webpack_require__(721),
            styles: [__webpack_require__(717)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dist__["a" /* Traverser */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__dist__["a" /* Traverser */]) === 'function' && _a) || Object])
    ], FileComponent);
    return FileComponent;
    var _a;
}());
//# sourceMappingURL=/home/ebr/dev/osprojects/plone_client/angular-traversal/tests/src/file.component.js.map

/***/ },

/***/ 357:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dist__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FolderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FolderComponent = (function () {
    function FolderComponent(traverser) {
        this.traverser = traverser;
    }
    FolderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.traverser.target.subscribe(function (target) {
            _this.context = target.context;
        });
    };
    FolderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-folder',
            template: __webpack_require__(722),
            styles: [__webpack_require__(718)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dist__["a" /* Traverser */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__dist__["a" /* Traverser */]) === 'function' && _a) || Object])
    ], FolderComponent);
    return FolderComponent;
    var _a;
}());
//# sourceMappingURL=/home/ebr/dev/osprojects/plone_client/angular-traversal/tests/src/folder.component.js.map

/***/ },

/***/ 451:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Marker; });

var Marker = (function () {
    function Marker() {
    }
    Marker.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */] },
    ];
    /** @nocollapse */
    Marker.ctorParameters = [];
    return Marker;
}());


/***/ },

/***/ 452:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__traverser__ = __webpack_require__(170);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TraverserOutlet; });



var TraverserOutlet = (function () {
    function TraverserOutlet(traverser, location, container, resolver) {
        this.traverser = traverser;
        this.location = location;
        this.container = container;
        this.resolver = resolver;
    }
    TraverserOutlet.prototype.ngOnInit = function () {
        var _this = this;
        this.traverser.target.subscribe(function (target) { return _this.render(target); });
        this.traverser.traverse(this.location.path());
        this.location.subscribe(function (location) {
            _this.traverser.traverse(location.url, false);
        });
    };
    TraverserOutlet.prototype.ngOnDestroy = function () {
        if (this.viewInstance) {
            this.viewInstance.destroy();
        }
    };
    TraverserOutlet.prototype.render = function (target) {
        if (this.viewInstance) {
            this.viewInstance.destroy();
        }
        if (target.component) {
            var componentFactory = this.resolver.resolveComponentFactory(target.component);
            this.viewInstance = this.container.createComponent(componentFactory);
        }
    };
    TraverserOutlet.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Directive */], args: [{
                    selector: 'traverser-outlet',
                },] },
    ];
    /** @nocollapse */
    TraverserOutlet.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_2__traverser__["a" /* Traverser */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* Location */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ViewContainerRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ComponentFactoryResolver */], },
    ];
    return TraverserOutlet;
}());


/***/ },

/***/ 453:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__traverser__ = __webpack_require__(170);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TraverserLink; });


var TraverserLink = (function () {
    function TraverserLink(traverser) {
        this.traverser = traverser;
    }
    TraverserLink.prototype.onClick = function () {
        this.traverser.traverse(this.traverseTo);
    };
    TraverserLink.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Directive */], args: [{
                    selector: '*[traverseTo]',
                    host: {
                        '(click)': 'onClick()'
                    }
                },] },
    ];
    /** @nocollapse */
    TraverserLink.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_1__traverser__["a" /* Traverser */], },
    ];
    TraverserLink.propDecorators = {
        'traverseTo': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */] },],
    };
    return TraverserLink;
}());


/***/ },

/***/ 454:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 454;


/***/ },

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(553);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_27" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/home/ebr/dev/osprojects/plone_client/angular-traversal/tests/src/main.js.map

/***/ },

/***/ 552:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_mdl__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dist__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__marker__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__file_file_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__folder_folder_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__file_info_file_info_component__ = __webpack_require__(355);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__file_file_component__["a" /* FileComponent */],
                __WEBPACK_IMPORTED_MODULE_9__folder_folder_component__["a" /* FolderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__file_info_file_info_component__["a" /* FileInfoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["d" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_mdl__["MdlModule"],
                __WEBPACK_IMPORTED_MODULE_5__dist__["c" /* TraversalModule */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__file_file_component__["a" /* FileComponent */],
                __WEBPACK_IMPORTED_MODULE_9__folder_folder_component__["a" /* FolderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__file_info_file_info_component__["a" /* FileInfoComponent */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_5__dist__["d" /* Resolver */], useClass: __WEBPACK_IMPORTED_MODULE_5__dist__["e" /* BasicHttpResolver */] },
                { provide: __WEBPACK_IMPORTED_MODULE_5__dist__["f" /* BACKEND_BASE_URL */], useValue: 'https://api.github.com/repos' },
                { provide: __WEBPACK_IMPORTED_MODULE_5__dist__["b" /* Marker */], useClass: __WEBPACK_IMPORTED_MODULE_6__marker__["a" /* TypeMarker */] },
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/ebr/dev/osprojects/plone_client/angular-traversal/tests/src/app.module.js.map

/***/ },

/***/ 553:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(552);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/home/ebr/dev/osprojects/plone_client/angular-traversal/tests/src/index.js.map

/***/ },

/***/ 554:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dist__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TypeMarker; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TypeMarker = (function (_super) {
    __extends(TypeMarker, _super);
    function TypeMarker() {
        _super.apply(this, arguments);
    }
    TypeMarker.prototype.mark = function (context) {
        // if the GitHub API returns an array, the context is a directroy, else
        // we just return the type property
        if (context instanceof Array) {
            return 'dir';
        }
        else {
            return context.type;
        }
    };
    TypeMarker = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], TypeMarker);
    return TypeMarker;
}(__WEBPACK_IMPORTED_MODULE_1__dist__["b" /* Marker */]));
//# sourceMappingURL=/home/ebr/dev/osprojects/plone_client/angular-traversal/tests/src/marker.js.map

/***/ },

/***/ 555:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/ebr/dev/osprojects/plone_client/angular-traversal/tests/src/environment.js.map

/***/ },

/***/ 556:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1005);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/ebr/dev/osprojects/plone_client/angular-traversal/tests/src/polyfills.js.map

/***/ },

/***/ 57:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib__ = __webpack_require__(1002);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__lib__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__lib__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__lib__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__lib__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__lib__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__lib__["f"]; });



/***/ },

/***/ 715:
/***/ function(module, exports) {

module.exports = "mdl-layout-content {\n    padding: 1rem;\n}"

/***/ },

/***/ 716:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 717:
/***/ function(module, exports) {

module.exports = "pre {\n    padding: 1rem;\n}"

/***/ },

/***/ 718:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 719:
/***/ function(module, exports) {

module.exports = "<mdl-layout mdl-layout-fixed-header>\n    <mdl-layout-header>\n        Github package: <input type=\"text\" [(ngModel)]=\"repository\" />\n        <mdl-button [traverseTo]=\"'/' + repository +'/contents/'\">Go</mdl-button>\n    </mdl-layout-header>\n    <mdl-layout-content>\n        <traverser-outlet></traverser-outlet>\n    </mdl-layout-content>\n</mdl-layout>"

/***/ },

/***/ 720:
/***/ function(module, exports) {

module.exports = "<p>Size: {{ context.size }}</p>\n<p>SHA: {{ context.sha }}</p>\n"

/***/ },

/***/ 721:
/***/ function(module, exports) {

module.exports = "<h2>{{ name }}</h2>\n<mdl-button [traverseTo]=\"path + '/@@info'\">Get info</mdl-button>\n<pre mdl-shadow=\"4\">{{ code }}</pre>"

/***/ },

/***/ 722:
/***/ function(module, exports) {

module.exports = "<mdl-list>\n    <mdl-list-item *ngFor=\"let entry of context\">\n        <a [traverseTo]=\"entry.url.slice(28)\">\n            <mdl-icon *ngIf=\"entry.type=='dir'\">folder</mdl-icon>\n            <mdl-icon *ngIf=\"entry.type=='file'\">description</mdl-icon>\n            {{ entry.name }}\n        </a>\n    </mdl-list-item>\n</mdl-list>\n"

/***/ }

},[1006]);
//# sourceMappingURL=main.bundle.map