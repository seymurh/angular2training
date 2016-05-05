/**
 * Created by seymour.h on 04/20/2016.
 */
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './Main/app.component';
import {MainComponent} from './Main/main.component';
import {ObservComponent} from './Main/observ.component';
import {HttpComponent} from './Main/http.component';
import {SearchComponent} from './Main/search.component.com';
import {ColdObservableComponent} from './Main/cold.observable.component';
//import {Http, HTTP_PROVIDERS} from 'angular2/http';

bootstrap(AppComponent);
//bootstrap(MainComponent);
//bootstrap(ObservComponent);
//bootstrap(HttpComponent);
//bootstrap(SearchComponent);
bootstrap(ColdObservableComponent);