System.register(['@angular/core', '@angular/router-deprecated', './Main/app.component', './Main/main.component', './Main/observ.component', './Main/http.component', './Main/search.component.com', './Main/cold.observable.component', './Main/FactoryInject', "./Main/ParentComponent"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_deprecated_1, app_component_1, main_component_1, observ_component_1, http_component_1, search_component_com_1, cold_observable_component_1, FactoryInject_1, ParentComponent_1;
    var RoutingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (main_component_1_1) {
                main_component_1 = main_component_1_1;
            },
            function (observ_component_1_1) {
                observ_component_1 = observ_component_1_1;
            },
            function (http_component_1_1) {
                http_component_1 = http_component_1_1;
            },
            function (search_component_com_1_1) {
                search_component_com_1 = search_component_com_1_1;
            },
            function (cold_observable_component_1_1) {
                cold_observable_component_1 = cold_observable_component_1_1;
            },
            function (FactoryInject_1_1) {
                FactoryInject_1 = FactoryInject_1_1;
            },
            function (ParentComponent_1_1) {
                ParentComponent_1 = ParentComponent_1_1;
            }],
        execute: function() {
            RoutingComponent = (function () {
                function RoutingComponent() {
                }
                RoutingComponent = __decorate([
                    router_deprecated_1.RouteConfig([
                        { path: '/AppComponent', as: "AppComponent", component: app_component_1.AppComponent, useAsDefault: true },
                        { path: '/SearchComponent', name: 'SearchComponent', component: search_component_com_1.SearchComponent, useAsDefault: false },
                        { path: '/main', as: "MainComponent", component: main_component_1.MainComponent, useAsDefault: false },
                        { path: '/observe', as: "ObservComponent", component: observ_component_1.ObservComponent, useAsDefault: false },
                        { path: '/http', as: "HttpComponent", component: http_component_1.HttpComponent, useAsDefault: false },
                        { path: '/cold', as: "ColdObservableComponent", component: cold_observable_component_1.ColdObservableComponent, useAsDefault: false },
                        { path: '/factory', as: 'FactoryInjectComponent', component: FactoryInject_1.FactoryInjectComponent, useAsDefault: false },
                        { path: '/parent', as: 'ParentComponent', component: ParentComponent_1.ParentComponent, useAsDefault: false }
                    ]),
                    core_1.Component({
                        selector: 'routing',
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        template: "<div>\n\tBasic Routing\n\t<ul>\n\t  <li><a [routerLink]=\"['./AppComponent']\">AppComponent</a></li>\n\t  <li><a [routerLink]=\"['./MainComponent']\">MainComponent</a></li>\n\t  <li><a [routerLink]=\"['./ObservComponent']\">ObservComponent</a></li>\n\t  <li><a [routerLink]=\"['./HttpComponent']\">HttpComponent</a></li>\n\t  <li><a [routerLink]=\"['./SearchComponent']\">SearchComponent</a></li>\n\t  <li><a [routerLink]=\"['./ColdObservableComponent']\">ColdObservableComponent</a></li>\n      <li><a [routerLink]=\"['./FactoryInjectComponent']\">Factory Inject</a></li>\n      <li><a [routerLink]=\"['./ParentComponent']\">Parent Component Provider</a></li>\n\t</ul>\n\t<div style=\"border: 1px solid black\">\n\t  <router-outlet></router-outlet>\n\t</div>\n\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], RoutingComponent);
                return RoutingComponent;
            }());
            exports_1("RoutingComponent", RoutingComponent);
        }
    }
});

//# sourceMappingURL=routing.js.map
