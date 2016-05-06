System.register(['@angular/platform-browser-dynamic', './Main/app.component', './Main/main.component', './Main/observ.component', './Main/http.component', './Main/search.component.com', './Main/cold.observable.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_component_1, main_component_1, observ_component_1, http_component_1, search_component_com_1, cold_observable_component_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (main_component_1_1) {
                main_component_1 = main_component_1_1;
            },
            function (observ_component_1_1) {
                observ_component_1 = observ_component_1_1;
            },
            function (http_component_1_1) {
                http_component_1 = http_component_1_1;
            },
            function (search_component_com_1_1) {
                search_component_com_1 = search_component_com_1_1;
            },
            function (cold_observable_component_1_1) {
                cold_observable_component_1 = cold_observable_component_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent);
            platform_browser_dynamic_1.bootstrap(main_component_1.MainComponent);
            platform_browser_dynamic_1.bootstrap(observ_component_1.ObservComponent);
            platform_browser_dynamic_1.bootstrap(http_component_1.HttpComponent);
            platform_browser_dynamic_1.bootstrap(search_component_com_1.SearchComponent);
            platform_browser_dynamic_1.bootstrap(cold_observable_component_1.ColdObservableComponent); //
        }
    }
});

//# sourceMappingURL=boot.js.map
