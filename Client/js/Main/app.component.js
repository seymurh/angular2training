System.register(['@angular/core', "@angular/common"], function(exports_1, context_1) {
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
    var core_1, common_1, common_2;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
                common_2 = common_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(fb) {
                    this.name = "binging";
                    this.artist = fb.group({
                        Name: [""],
                        Surname: [""],
                        Amount: [""]
                    });
                    this.name = "setted binding from constructor";
                    this.artists = [
                        { Name: "Angelina Joolie" },
                        { Name: "Bred Bitt" },
                        { Name: "Silvester Stalone" }
                    ];
                }
                AppComponent.prototype.AddArtist = function (artist) {
                    console.log(artist);
                    if (!this.openAddArtistForm) {
                        this.openAddArtistForm = true;
                    }
                    else if (artist != null) {
                        this.artists.push(artist);
                        this.openAddArtistForm = false;
                    }
                };
                AppComponent.prototype.deleteArtist = function (artist) {
                    for (var i = 0; i < this.artists.length; i++) {
                        if (this.artists[i] === artist) {
                            this.artists.splice(i, 1);
                        }
                    }
                };
                AppComponent.prototype.updateArtist = function (artist) {
                    if (!this.openAddArtistForm) {
                        this.openAddArtistForm = true;
                        this.artist.controls["Name"].updateValue(artist.Name);
                        this.artist.controls["Surname"].updateValue(artist.Surname);
                        this.artist.controls["Amount"].updateValue(artist.Amount);
                        console.log(this.artist);
                    }
                    else {
                        this.openAddArtistForm = false;
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'Views/Home/Index.html',
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_2.FormBuilder])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=app.component.js.map
