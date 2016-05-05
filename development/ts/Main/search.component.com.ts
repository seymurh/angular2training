/**
 * Created by seymour.h on 05/05/2016.
 */
import {Component} from 'angular2/core';
import {Control,ControlGroup,FormBuilder} from 'angular2/common';
import {SearchService} from '../services/Search';
import {HTTP_BINDINGS} from 'angular2/http';
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
    providers:[SearchService,HTTP_BINDINGS]
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
