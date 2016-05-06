/**
 * Created by seymour.h on 04/29/2016.
 */
import {Component} from '@angular/core';
import {CORE_DIRECTIVES,FORM_DIRECTIVES} from "@angular/common";
import {Observable} from 'rxjs/Observable';
//import {settings} from "cluster";

@Component({
    selector: 'observ',
    templateUrl: 'Views/Home/observ.html',
    directives:[CORE_DIRECTIVES,FORM_DIRECTIVES]
})
export class ObservComponent {
    private data:Observable<Array<number>>;
    private values:Array<number> = [1,2];
    private anyErrors:boolean = false;
    private finished:boolean = false;

    constructor() {
        this.data = new Observable(observer=> {
            setTimeout(()=> {
                observer.next(15);
            }, 1000);
            setTimeout(()=> {
                observer.next(18);
            }, 2000);
            setTimeout(()=> {
                observer.complete();
            }, 3000);
            console.log("started observable sequence");
        });


    }

    begin() {
        let subsciption = this.data.subscribe(
            v=>this.values.push(v),
            er=>this.anyErrors = er,
            ()=>this.finished = true);
    }
}
