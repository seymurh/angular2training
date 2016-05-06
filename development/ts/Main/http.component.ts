/**
 * Created by seymour.h on 05/03/2016.
 */
import {Component} from "@angular/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {Http,HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/Rx';
//import {Http} from "@angular/http";


@Component({
    selector:'http',
    providers:[HTTP_PROVIDERS],
    template: `
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <b>Angular 2 HTTP requests using RxJs Observables!</b>
            <span *ngFor="#doctor of doctors" class="alert-danger"><h1> {{doctor}}</h1></span>
        </div>
    </div>
`
})
export class HttpComponent{
    //:Array<number>
    doctors=[];
    response:any=null;

    constructor(http:Http){
        http.get('http://jsonplaceholder.typicode.com/users/')
            .flatMap((data) => data.json())
            .filter((person) => person.id > 5)
            .map((person) => "Dr. " + person.name)
            .subscribe((data) => {
                this.doctors.push(data);
            });
      //  this.response="hey"; //
    }

}
