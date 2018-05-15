
import {Component, Input} from '@angular/core';
import {APISrvc} from '../../../../core/services/api.service';
import {environment} from 'app/environment';


@Component({
    selector: 'team-detail',
    templateUrl: './team-detail.template.html',
    styleUrls: ['./team-detail.scss']
})
export class TeamDetailComponent {
     @Input() selectedTeam= {
        id: 0
     };
    teamInfo= {
        captain: '',
        viceCaptain: ''
    };
    constructor(private apiSrvc: APISrvc) {
            this.getTeamDetail();
    }


getTeamDetail(){
    this.apiSrvc.getData(environment.baseURL + '/team/'+this.selectedTeam.id, {})
    .subscribe(
      data => {
        this.teamInfo= data;
      },
      err => {
          console.log(err);
      });
  }



}

