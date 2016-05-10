/**
 * Created by seymour.h on 05/10/2016.
 */
import {Component} from '@angular/core';

@Component({
    selector:'factory',
    template:`
        <div class="alert-info">
         {{random}}
         </div>
    `
})
export class FactoryInjectComponent{
    random:number;
    constructor(r:number){
        this.random=r;
    }
}