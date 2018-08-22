
import {Component, Input, OnInit} from '@angular/core';
import {environment} from 'app/environment';
import {APISrvc} from '../../../../core/services/api.service';

@Component({
    selector: 'team-schedule',
    templateUrl: './team-schedule.template.html',
    styleUrls: ['./team-schedule.scss']
})
export class TeamSchedule  implements OnInit {
  @Input() teamName: any;

  matchSchedule=[];
  currentPage: string;
    constructor(private apiSrvc: APISrvc) {
     }

    ngOnInit() {
      this.getMatchSchedule();
    }


  getMatchSchedule(){
    this.matchSchedule=[];
      this.apiSrvc.getData(environment.baseURL + '/match-schedule', {})
      .subscribe(
        data => {
            for(let schedule of data){
                if(((this.teamName==='')||(this.teamName===schedule.team1.name)|| (this.teamName===schedule.team2.name))&&(schedule.result.description===null)){
                    this.matchSchedule.push(schedule);
                }
            }
        },
        err => {
            console.log(err);
        });
    }
  }
