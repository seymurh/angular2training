/**
 * Created by seymour.h on 04/20/2016.
 */

import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from "angular2/common";
import {FormBuilder} from "angular2/common";
import {Validators} from "angular2/common";

interface  Artist{
        Name:String;
        Surname:String;
        Amount:Number;
}

@Component({
        selector:'my-app',
        templateUrl:'Views/Home/Index.html',
        directives:[FORM_DIRECTIVES]
})
export class AppComponent{
        name:String="binging";
        artists:any;
        artist:any;
       // group:FormBuilder;
        openAddArtistForm:boolean;
        constructor(fb:FormBuilder){

                this.artist=fb.group({
                        Name:[""],
                        Surname:[""],
                        Amount:[""]
                });
                this.name="setted binding from constructor";
                this.artists=[
                        {Name:"Angelina Joolie"},
                        {Name:"Bred Bitt"},
                        {Name:"Silvester Stalone"}
                ];
        }
        AddArtist(artist){
                console.log(artist);
                if (!this.openAddArtistForm){
                        this.openAddArtistForm=true;

                }else if(artist!=null){
                        this.artists.push(artist);
                        this.openAddArtistForm=false;

                      //  artist=null;
                }
        }
        deleteArtist(artist){
                for(var i=0;i<this.artists.length;i++){
                     if(this.artists[i]===artist){
                             this.artists.splice(i,1);
                     }
                }
        }

        updateArtist(artist:Artist){
                if (!this.openAddArtistForm){
                        this.openAddArtistForm=true;
                        this.artist.controls["Name"].updateValue(artist.Name);
                        this.artist.controls["Surname"].updateValue(artist.Surname);
                        this.artist.controls["Amount"].updateValue(artist.Amount);
                        console.log(this.artist);
                }else {
                        this.openAddArtistForm=false;
                }
        }
}

