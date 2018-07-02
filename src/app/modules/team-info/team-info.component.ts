import { Component, OnInit } from '@angular/core';
import {APISrvc} from '../../core/services/api.service';
import {environment} from 'app/environment';
import {ActivatedRoute} from '@angular/router';


@Component({
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.scss']
})
export class TeamInfoComponent implements OnInit {
 teamInfo= {
        captain: '',
        viceCaptain: ''
    };

   selectedOption='Squads';
  constructor(private apiSrvc: APISrvc,private route: ActivatedRoute) {

  }
    ngOnInit() {
         this.getTeamDetail(this.route.snapshot.params['id']);
  }

  getTeamDetail(teamId){
      this.apiSrvc.getData(environment.baseURL + '/team-info/'+ teamId, {})
      .subscribe(
        data => {
          this.teamInfo= data;
          console.log(this.teamInfo);
        },
        err => {
            console.log(err);
        });
    }
    selectInfoOption(option){
        this.selectedOption= option;
    }

}
