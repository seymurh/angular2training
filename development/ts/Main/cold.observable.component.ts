/**
 * Created by seymour.h on 05/05/2016.
 */
import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'cold',
    template: `
    <div class="col-md-offset-2 col-md-8">
        <span class="badge" *ngFor="#value of values">{{value}}</span>
        <button class="btn btn-success" (click)="start()">Start</button>
         <button class="btn btn-primary" (click)="start2()">Start 2</button>
          <button class="btn btn-danger" (click)="clear()">Clear</button>
    </div>
    `
})
export class ColdObservableComponent {
    values:Array<string> = [];
    const
    obsv = new Observable(ob=> {

        setTimeout(()=>ob.next(1), 1000);
        setTimeout(()=>ob.next(2), 2000);
        setTimeout(()=>ob.next(3), 3000);
        setTimeout(()=>ob.next(4), 4000);

    });

    constructor() {


    }

    start() {
        console.log("start1");
        setTimeout(()=>this.obsv.subscribe(v=>this.values.push(v)), 0); //
    }

    start2() {
        console.log("start2");
        setTimeout(()=>this.obsv.subscribe(v=>this.values.push(v)), 4500);
    }
    clear(){
      setTimeout(()=>this.values=[],0);
    }

}