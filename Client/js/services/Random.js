System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var randomFactory, randomDefinition;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by seymour.h on 05/10/2016.
             */
            randomFactory = function () { return Math.random(); };
            exports_1("randomDefinition", randomDefinition = { useFactory: randomFactory });
        }
    }
});

//# sourceMappingURL=Random.js.map
