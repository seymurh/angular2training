/**
 * Created by seymour.h on 05/11/2016.
 */
import {Component,Inject} from '@angular/core';
import {IdProvider} from '../services/IdProvider';

@Component({
   selector:"child",
    template:`
        <div class="alert-success">
         Child Id {{ Id}}
        </div>
    `,

    providers:[IdProvider]
})
export class ChildComponent{

    Id:number;
    constructor(@Inject('Id') id){
        this.Id=id;
    }
}