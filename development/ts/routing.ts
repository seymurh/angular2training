/**
 * Created by seymour.h on 05/07/2016.
 */
import {Component} from '@angular/core'
import {Route,RouteConfig,Router,ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {AppComponent} from './Main/app.component';
import {MainComponent} from './Main/main.component';
import {ObservComponent} from './Main/observ.component';
import {HttpComponent} from './Main/http.component';
import {SearchComponent} from './Main/search.component.com';
import {ColdObservableComponent} from './Main/cold.observable.component';

@RouteConfig([
    { path: '/AppComponent',as:"AppComponent", component: AppComponent, useAsDefault: true },
    { path: '/SearchComponent',name:'SearchComponent',  component: SearchComponent, useAsDefault: false  },
    { path: '/main',as:"MainComponent", component: MainComponent, useAsDefault: false  },
    { path: '/observe',as:"ObservComponent", component: ObservComponent, useAsDefault: false  },
    { path: '/http',as:"HttpComponent", component: HttpComponent, useAsDefault: false  },
    { path: '/cold',as:"ColdObservableComponent", component: ColdObservableComponent, useAsDefault: false  }
   // { path: '/**', redirectTo: ['Home'] }
])
@Component({
    selector:'routing',
    directives:[ROUTER_DIRECTIVES],
    template: `<div>
	Basic Routing
	<ul>
	  <li><a [routerLink]="['./AppComponent']">AppComponent</a></li>
	  <li><a [routerLink]="['./MainComponent']">MainComponent</a></li>
	  <li><a [routerLink]="['./ObservComponent']">ObservComponent</a></li>
	  <li><a [routerLink]="['./HttpComponent']">HttpComponent</a></li>
	  <li><a [routerLink]="['./SearchComponent']">SearchComponent</a></li>
	  <li><a [routerLink]="['./ColdObservableComponent']">ColdObservableComponent</a></li>

	</ul>
	<div style="border: 1px solid black">
	  <router-outlet></router-outlet>
	</div>

	`
})
export  class  RoutingComponent{

}
