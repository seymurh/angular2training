/**
 * Created by seymour.h on 05/10/2016.
 */
import {Component,Inject,Injectable,provide} from '@angular/core';

const randomFactory=()=>Math.random();
const randomDefinition={useFactory:randomFactory};

@Component({
    selector:'factory',
    template:`
        <div class="alert-info">
         {{random}}
         </div>
    `,
    providers:[provide('Random',randomDefinition)]
})
export class FactoryInjectComponent{
    random:number;
    constructor(@Inject('Random') r:number){
        this.random=r;
    }
}