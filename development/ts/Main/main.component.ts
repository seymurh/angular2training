/**
 * Created by seymour.h on 04/28/2016.
 */
import {Component} from '@angular/core';
import {EventComponent} from './event.component';
import {Counter2WayComponent} from './counter2way.component';
import {ProjectionComponent} from './projection.component';
import {RouteConfig} from '@angular/router-deprecated'

@Component({
    selector: 'main',
    template: `
    <div class="row">
     <div class="col-md-8 col-md-offset-2">
      <ul>
        <li>Parent Num: {{ num }} </li>
        <li>Number1: {{number1}}</li>
        <li>  Number2: {{number2}}</li>
        <li>Number3:{{number3}}</li>
        <li>Number4:{{number4}}</li>
        <li>Parent Count: {{ parentCount }}</li>
      </ul>
	       <!--<counter [count]="num"  (result)="onChange($event)" >-->
	       <!--</counter>-->
	       <counter2way [(count)]="number1" >
	       </counter2way>
	       <counter2way (countChange)="changeNumber2($event)" [count]="number2">
	       </counter2way>
	       <counter2way (countChange)="number3=$event" [count]="number3" >
	       </counter2way>
	       <counter [count]="num" (result)="onChange($event)">
	       </counter>
	  </div>
    </div>
	  <project>
        <h3 class="first">header</h3>
        <p class="second">second content</p>
        <p id="third" class="third">Third element</p>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
	  </project>
    `,
    directives: [EventComponent, Counter2WayComponent,ProjectionComponent]
})
export class MainComponent {

    number1:number = 0;
    number2:number = 0;
    number3:number = 0;
    number4:number = 0;

    num:number;
    parentCount:number;

    constructor() {

        this.num = 0;
        this.parentCount = 0;
    }

    onChange(val:any) {
        this.parentCount = val;

    }

    changeNumber2(val) {
        this.number2 = val;
    }
}