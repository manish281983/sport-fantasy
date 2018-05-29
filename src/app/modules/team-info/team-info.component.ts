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
  constructor(private apiSrvc: APISrvc, route: ActivatedRoute) {
        this.getTeamDetail(route.snapshot.params['id']);
  }


  getTeamDetail(teamId){
      this.apiSrvc.getData(environment.baseURL + '/team-info/'+ teamId, {})
      .subscribe(
        data => {
          this.teamInfo= data;
        },
        err => {
            console.log(err);
        });
    }

  ngOnInit() {

  }

}
