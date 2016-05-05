System.register(["angular2/core", 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var HttpComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            //import {Http} from "angular2/http";
            HttpComponent = (function () {
                function HttpComponent(http) {
                    var _this = this;
                    //:Array<number>
                    this.doctors = [];
                    this.response = null;
                    http.get('http://jsonplaceholder.typicode.com/users/')
                        .flatMap(function (data) { return data.json(); })
                        .filter(function (person) { return person.id > 5; })
                        .map(function (person) { return "Dr. " + person.name; })
                        .subscribe(function (data) {
                        _this.doctors.push(data);
                    });
                    //  this.response="hey"; //
                }
                HttpComponent = __decorate([
                    core_1.Component({
                        selector: 'http',
                        providers: [http_1.HTTP_PROVIDERS],
                        template: "\n    <div class=\"row\">\n        <div class=\"col-md-8 col-md-offset-2\">\n            <b>Angular 2 HTTP requests using RxJs Observables!</b>\n            <span *ngFor=\"#doctor of doctors\" class=\"alert-danger\"><h1> {{doctor}}</h1></span>\n        </div>\n    </div>\n"
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HttpComponent);
                return HttpComponent;
            }());
            exports_1("HttpComponent", HttpComponent);
        }
    }
});

//# sourceMappingURL=http.component.js.map
