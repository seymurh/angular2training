System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var IdService, IdDefinition, IdProvider;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            IdService = function () { return ("" + Math.random()); };
            IdDefinition = { useFactory: IdService };
            exports_1("IdProvider", IdProvider = core_1.provide('Id', IdDefinition));
        }
    }
});

//# sourceMappingURL=IdProvider.js.map
