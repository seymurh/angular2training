/**
 * Created by seymour.h on 04/28/2016.
 */
import {Component,Input,Output,EventEmitter} from 'angular2/core';

@Component({
    selector: 'counter2way',
    template: `
    <div>
        <ul>
            <li> Count: {{count}} </li>
        </ul>
      <p>
        <button type="button" class="btn btn-success" (click)="increment()">increment</button>
      </p>
    </div>
    `
})
export  class Counter2WayComponent {

    @Input()  count:number = 0;
    @Output() countChange: EventEmitter<number> = new EventEmitter<number>();

    increment() {
        this.count++;
        this.countChange.emit(this.count);
    }
}