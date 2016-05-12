System.register(['@angular/core', './ChildComponent', '../services/IdProvider'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, ChildComponent_1, IdProvider_1;
    var ParentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ChildComponent_1_1) {
                ChildComponent_1 = ChildComponent_1_1;
            },
            function (IdProvider_1_1) {
                IdProvider_1 = IdProvider_1_1;
            }],
        execute: function() {
            ParentComponent = (function () {
                function ParentComponent(id) {
                    this.Id = 0;
                    this.Id = id;
                }
                ParentComponent = __decorate([
                    core_1.Component({
                        selector: 'parent',
                        template: "\n        <div class=\"alert-info\">\n         Parent Id {{Id}}\n        </div>\n        <child></child>\n\n    ",
                        providers: [IdProvider_1.IdProvider],
                        directives: [ChildComponent_1.ChildComponent]
                    }),
                    __param(0, core_1.Inject('Id')), 
                    __metadata('design:paramtypes', [Object])
                ], ParentComponent);
                return ParentComponent;
            }());
            exports_1("ParentComponent", ParentComponent);
        }
    }
});

//# sourceMappingURL=ParentComponent.js.map