System.register(['angular2/platform/browser', './Main/app.component', './Main/cold.observable.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, cold_observable_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (cold_observable_component_1_1) {
                cold_observable_component_1 = cold_observable_component_1_1;
            }],
        execute: function() {
            //import {Http, HTTP_PROVIDERS} from 'angular2/http';
            browser_1.bootstrap(app_component_1.AppComponent);
            //bootstrap(MainComponent);
            //bootstrap(ObservComponent);
            //bootstrap(HttpComponent);
            //bootstrap(SearchComponent);
            browser_1.bootstrap(cold_observable_component_1.ColdObservableComponent);
        }
    }
});

//# sourceMappingURL=boot.js.map
