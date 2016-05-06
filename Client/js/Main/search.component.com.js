System.register(['@angular/core', '@angular/common', '../services/Search', '@angular/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, common_1, Search_1, http_1;
    var SearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (Search_1_1) {
                Search_1 = Search_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            SearchComponent = (function () {
                function SearchComponent(searchService, fb) {
                    var _this = this;
                    this.searchService = searchService;
                    this.fb = fb;
                    this.searchField = new common_1.Control();
                    this.coolForm = fb.group({ search: this.searchField });
                    this.searchField.valueChanges.debounceTime(400)
                        .flatMap(function (term) { return _this.searchService.Search(term); })
                        .subscribe(function (result) {
                        _this.result = result.artists.items;
                    });
                }
                SearchComponent = __decorate([
                    core_1.Component({
                        selector: 'search',
                        template: "\n    <form [ngFormModel]=\"coolForm\" >\n        <div class=\"form-group\">\n            <label class=\"control-label\">Axtar</label>\n            <input class=\"form-control\" ngControl=\"search\" placeholder=\"Search Spotify artist\" />\n        </div>\n    </form>\n    <div class=\"col-md-offset-2 col-md-4\" *ngFor=\"#artist of result\">\n      <span class=\"alert-success\">\n         {{artist.name}}\n      </span>\n    </div>\n    ",
                        providers: [Search_1.SearchService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [Search_1.SearchService, common_1.FormBuilder])
                ], SearchComponent);
                return SearchComponent;
            }());
            exports_1("SearchComponent", SearchComponent);
        }
    }
});

//# sourceMappingURL=search.component.com.js.map
