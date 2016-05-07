System.register(['@angular/platform-browser-dynamic', '@angular/router-deprecated', './routing'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, router_deprecated_1, routing_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (routing_1_1) {
                routing_1 = routing_1_1;
            }],
        execute: function() {
            //bootstrap(AppComponent);
            //bootstrap(MainComponent);
            //bootstrap(ObservComponent);
            //bootstrap(HttpComponent);
            //bootstrap(SearchComponent);
            //bootstrap(ColdObservableComponent);//
            platform_browser_dynamic_1.bootstrap(routing_1.RoutingComponent, [router_deprecated_1.ROUTER_PROVIDERS]);
        }
    }
});
///
//Router.config([
//    { 'path': '/', 'component': AppComponent },
//    { 'path': '/main/:id', 'component': MainComponent },
//    { 'path': '/Search', 'component': SearchComponent }
//]); 

//# sourceMappingURL=boot.js.map
