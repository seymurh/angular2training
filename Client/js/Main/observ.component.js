System.register(['angular2/core', "angular2/common", 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, common_1, Observable_1;
    var ObservComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            ObservComponent = (function () {
                function ObservComponent() {
                    this.values = [1, 2];
                    this.anyErrors = false;
                    this.finished = false;
                    this.data = new Observable_1.Observable(function (observer) {
                        setTimeout(function () {
                            observer.next(15);
                        }, 1000);
                        setTimeout(function () {
                            observer.next(18);
                        }, 2000);
                        setTimeout(function () {
                            observer.complete();
                        }, 3000);
                        console.log("started observable sequence");
                    });
                }
                ObservComponent.prototype.begin = function () {
                    var _this = this;
                    var subsciption = this.data.subscribe(function (v) { return _this.values.push(v); }, function (er) { return _this.anyErrors = er; }, function () { return _this.finished = true; });
                };
                ObservComponent = __decorate([
                    core_1.Component({
                        selector: 'observ',
                        templateUrl: 'Views/Home/observ.html',
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ObservComponent);
                return ObservComponent;
            }());
            exports_1("ObservComponent", ObservComponent);
        }
    }
});

//# sourceMappingURL=observ.component.js.map
