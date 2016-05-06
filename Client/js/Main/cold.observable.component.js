System.register(['@angular/core', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, Observable_1;
    var ColdObservableComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            ColdObservableComponent = (function () {
                function ColdObservableComponent() {
                    this.values = [];
                    this.obsv = new Observable_1.Observable(function (ob) {
                        setTimeout(function () { return ob.next(1); }, 1000);
                        setTimeout(function () { return ob.next(2); }, 2000);
                        setTimeout(function () { return ob.next(3); }, 3000);
                        setTimeout(function () { return ob.next(4); }, 4000);
                    });
                }
                ColdObservableComponent.prototype.start = function () {
                    var _this = this;
                    console.log("start1");
                    setTimeout(function () { return _this.obsv.subscribe(function (v) { return _this.values.push(v); }); }, 0); //
                };
                ColdObservableComponent.prototype.start2 = function () {
                    var _this = this;
                    console.log("start2");
                    setTimeout(function () { return _this.obsv.subscribe(function (v) { return _this.values.push(v); }); }, 4500);
                };
                ColdObservableComponent.prototype.clear = function () {
                    var _this = this;
                    setTimeout(function () { return _this.values = []; }, 0);
                };
                ColdObservableComponent = __decorate([
                    core_1.Component({
                        selector: 'cold',
                        template: "\n    <div class=\"col-md-offset-2 col-md-8\">\n        <span class=\"badge\" *ngFor=\"#value of values\">{{value}}</span>\n        <button class=\"btn btn-success\" (click)=\"start()\">Start</button>\n         <button class=\"btn btn-primary\" (click)=\"start2()\">Start 2</button>\n          <button class=\"btn btn-danger\" (click)=\"clear()\">Clear</button>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ColdObservableComponent);
                return ColdObservableComponent;
            }());
            exports_1("ColdObservableComponent", ColdObservableComponent);
        }
    }
});

//# sourceMappingURL=cold.observable.component.js.map
