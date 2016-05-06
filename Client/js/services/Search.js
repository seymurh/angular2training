System.register(['@angular/http', '@angular/core'], function(exports_1, context_1) {
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
    var http_1, core_1;
    var SearchService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SearchService = (function () {
                function SearchService(http) {
                    this.http = http;
                }
                SearchService.prototype.Search = function (term) {
                    if (term.length !== 0 || !!term.trim()) {
                        return this.http.get('https://api.spotify.com/v1/search?q=' + term + '&type=artist')
                            .map(function (response) { return response.json(); });
                    }
                    else {
                        return { artists: { items: [{ name: "empty string" }] } };
                    }
                };
                SearchService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SearchService);
                return SearchService;
            }());
            exports_1("SearchService", SearchService);
        }
    }
});

//# sourceMappingURL=Search.js.map
