/**
 * Created by seymour.h on 04/28/2016.
 */
import {Component,EventEmitter} from '@angular/core';


@Component({
selector:'counter',
    inputs:['count'],
    outputs:['result'],
    template:`
    <div>
          <p>Count: {{ count }}</p>
        <button class="btn btn-success" (click)="increment()">Increment</button>
    </div>
    `
})
export   class EventComponent{

    count:number;
    result:EventEmitter =new EventEmitter();
    increment(){
        this.count++;
        this.result.emit(this.count);
    }
    constructor(){

    }
}