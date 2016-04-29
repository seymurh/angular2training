/**
 * Created by seymour.h on 04/28/2016.
 */
import {Component,EventEmitter,Input,Output} from 'angular2/core';
import {Input} from "angular2/core";
import {Output} from "gulp-typescript/release/output";
import {count} from "rxjs/operator/count";

@Component({
selector:'counter2way',
    template:`
    <p>{{count}}</p>
    <button type="button" class="btn btn-success" (click)="increment()">increment</button>
    `
})
export class Counter2WayComponent{

    @Input()  count:number=0;
    @Output() countChange:EventEmitter<number>=new EventEmitter<number>();

    constructor(){

    }
    increment(){
        count++;
        this.countChange.emit(this.count);
    }
}