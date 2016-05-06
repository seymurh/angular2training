/**
 * Created by seymour.h on 05/05/2016.
 */
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class SearchService {

    constructor(private http:Http) {

    }

    Search(term:string) {
        if (term.length !== 0 || !!term.trim()) {
            return this.http.get('https://api.spotify.com/v1/search?q=' + term + '&type=artist')
                .map((response)=>response.json());
        }else {
            return {artists:{items:[{name:"empty string"}]}};
        }

    }
}