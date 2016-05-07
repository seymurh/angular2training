/**
 * Created by seymour.h on 05/05/2016.
 */
import {Component} from '@angular/core';
import {Control,ControlGroup,FormBuilder} from '@angular/common';
import {SearchService} from '../services/Search';
import {HTTP_BINDINGS,HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_DIRECTIVES,RouteConfig} from '@angular/router-deprecated';
import 'rxjs/Rx';

@Component({
    selector: 'search',
    template: `
    <form [ngFormModel]="coolForm" >
        <div class="form-group">
            <label class="control-label">Axtar</label>
            <input class="form-control" ngControl="search" placeholder="Search Spotify artist" />
        </div>
    </form>
    <div class="col-md-offset-2 col-md-4" *ngFor="#artist of result">
      <span class="alert-success">
         {{artist.name}}
      </span>
    </div>
    `,
    providers:[SearchService,HTTP_PROVIDERS]
})
export class SearchComponent {
    searchField:Control;
    coolForm:ControlGroup;

    constructor(private searchService:SearchService, private fb:FormBuilder) {
        this.searchField = new Control();
        this.coolForm = fb.group({search: this.searchField});

        this.searchField.valueChanges.debounceTime(400)
            .flatMap(term=>this.searchService.Search(term))
            .subscribe((result)=> {
                this.result = result.artists.items;
            });

    }

}
