/**
 * Created by seymour.h on 05/03/2016.
 */
import {Component} from "angular2/core";
//import {Http} from "angular2/http";


@Component({
    selector:'http',
    template: `
<b>Angular 2 HTTP requests using RxJs Observables!</b>
<div><h1>{{response}}</h1></div>
`
})
export class HttpComponent{

    response:any=null;

    constructor(){
        this.response="hey";
    }
}
