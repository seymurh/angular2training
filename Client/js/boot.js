System.register(['angular2/platform/browser', './Main/app.component', './Main/main.component', './Main/observ.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, main_component_1, observ_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (main_component_1_1) {
                main_component_1 = main_component_1_1;
            },
            function (observ_component_1_1) {
                observ_component_1 = observ_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent);
            browser_1.bootstrap(main_component_1.MainComponent);
            browser_1.bootstrap(observ_component_1.ObservComponent);
        }
    }
});

//# sourceMappingURL=boot.js.map
