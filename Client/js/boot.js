System.register(['angular2/platform/browser', './Main/app.component', './Main/http.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, http_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (http_component_1_1) {
                http_component_1 = http_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent);
            //bootstrap(MainComponent);
            //bootstrap(ObservComponent);
            browser_1.bootstrap(http_component_1.HttpComponent);
        }
    }
});

//# sourceMappingURL=boot.js.map
