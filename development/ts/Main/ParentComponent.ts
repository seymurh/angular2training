/**
 * Created by seymour.h on 05/11/2016.
 */
import {Component,provide,Injectable,Inject} from '@angular/core';
import {ChildComponent} from './ChildComponent';
import {IdProvider} from '../services/IdProvider';


@Component({
    selector:'parent',
    template:`
        <div class="alert-info">
         Parent Id {{Id}}
        </div>
        <child></child>

    `,
    providers:[IdProvider],
    directives:[ChildComponent]
})
export class ParentComponent{
    Id:number=0;
    constructor(@Inject('Id') id){
        this.Id=id;
    }
}