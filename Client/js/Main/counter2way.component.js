System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var Counter2WayComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Counter2WayComponent = (function () {
                function Counter2WayComponent() {
                    this.count = 0;
                    this.countChange = new core_1.EventEmitter();
                }
                Counter2WayComponent.prototype.increment = function () {
                    this.count++;
                    this.countChange.emit(this.count);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Counter2WayComponent.prototype, "count", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], Counter2WayComponent.prototype, "countChange", void 0);
                Counter2WayComponent = __decorate([
                    core_1.Component({
                        selector: 'counter2way',
                        template: "\n    <div>\n        <ul>\n            <li> Count: {{count}} </li>\n        </ul>\n      <p>\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"increment()\">increment</button>\n      </p>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Counter2WayComponent);
                return Counter2WayComponent;
            }());
            exports_1("Counter2WayComponent", Counter2WayComponent);
        }
    }
});

//# sourceMappingURL=counter2way.component.js.map
