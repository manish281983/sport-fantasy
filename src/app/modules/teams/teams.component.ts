import { Component, OnInit } from '@angular/core';
import {environment} from 'app/environment';
import {APISrvc} from '../../core/services/api.service';
import {MatTabChangeEvent} from '@angular/material';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';


@Component({
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

    constructor(private apiSrvc: APISrvc, private router: Router, private activatedRoute: ActivatedRoute) {
}

     optionList= [];

      getPointsTable(){
           this.apiSrvc.getData(environment.baseURL + '/pool/all', {})
           .subscribe(
             data => {
                 this.optionList= data;
                 console.log(data);
             },
             err => {
                 console.log(err);
             });
         }
         ngOnInit() {
             this.getPointsTable();
         }

     private _selectedIndex = 1;


     get selectedIndex() {
         return this._selectedIndex;
     }

     set selectedIndex(val: number) {
         if (val) {
             this._selectedIndex = val;
         } else {
             this._selectedIndex = 0;
         }
     }

  getTeamDetails(team){
    this.router.navigate(['/team-info/'+team.id], {relativeTo: this.activatedRoute});
  }

  getTeamCaptain(playerList){
      let player = null;
      for( let i=0;i< playerList.length;i++){
        if(playerList[i].role==='Captain'){
            player= playerList[i];
            return player.name;
        }
      }
    return null;
  }

   getTeamViceCaptain(playerList){
        let player = null;
        for( let i=0;i< playerList.length;i++){
          if(playerList[i].role==='Vice Captain'){
              player= playerList[i];
              return player.name;
          }
        }
      return null;
    }



  }

