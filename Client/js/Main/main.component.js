System.register(['angular2/core', './event.component', './counter2way.component', './projection.component'], function(exports_1, context_1) {
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
    var core_1, event_component_1, counter2way_component_1, projection_component_1;
    var MainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (event_component_1_1) {
                event_component_1 = event_component_1_1;
            },
            function (counter2way_component_1_1) {
                counter2way_component_1 = counter2way_component_1_1;
            },
            function (projection_component_1_1) {
                projection_component_1 = projection_component_1_1;
            }],
        execute: function() {
            MainComponent = (function () {
                function MainComponent() {
                    this.number1 = 0;
                    this.number2 = 0;
                    this.number3 = 0;
                    this.number4 = 0;
                    this.num = 0;
                    this.parentCount = 0;
                }
                MainComponent.prototype.onChange = function (val) {
                    this.parentCount = val;
                };
                MainComponent.prototype.changeNumber2 = function (val) {
                    this.number2 = val;
                };
                MainComponent = __decorate([
                    core_1.Component({
                        selector: 'main',
                        template: "\n    <div class=\"row\">\n     <div class=\"col-md-8 col-md-offset-2\">\n      <ul>\n        <li>Parent Num: {{ num }} </li>\n        <li>Number1: {{number1}}</li>\n        <li>  Number2: {{number2}}</li>\n        <li>Number3:{{number3}}</li>\n        <li>Number4:{{number4}}</li>\n        <li>Parent Count: {{ parentCount }}</li>\n      </ul>\n\t       <!--<counter [count]=\"num\"  (result)=\"onChange($event)\" >-->\n\t       <!--</counter>-->\n\t       <counter2way [(count)]=\"number1\" >\n\t       </counter2way>\n\t       <counter2way (countChange)=\"changeNumber2($event)\" [count]=\"number2\">\n\t       </counter2way>\n\t       <counter2way (countChange)=\"number3=$event\" [count]=\"number3\" >\n\t       </counter2way>\n\t       <counter [count]=\"num\" (result)=\"onChange($event)\">\n\t       </counter>\n\t  </div>\n    </div>\n\t  <project>\n        <h3 class=\"first\">header</h3>\n        <p class=\"second\">second content</p>\n        <p id=\"third\" class=\"third\">Third element</p>\n        <ul>\n            <li>1</li>\n            <li>2</li>\n            <li>3</li>\n        </ul>\n\t  </project>\n    ",
                        directives: [event_component_1.EventComponent, counter2way_component_1.Counter2WayComponent, projection_component_1.ProjectionComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainComponent);
                return MainComponent;
            }());
            exports_1("MainComponent", MainComponent);
        }
    }
});

//# sourceMappingURL=main.component.js.map
