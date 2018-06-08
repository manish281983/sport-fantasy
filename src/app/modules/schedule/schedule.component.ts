import { Component, OnInit } from '@angular/core';
import {APISrvc} from '../../core/services/api.service';
import {environment} from 'app/environment';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
matchSchedule=[];
currentPage: string;
  constructor(private apiSrvc: APISrvc, private activatedRoute: ActivatedRoute) {

        this.currentPage=activatedRoute.snapshot.url.join('');
   }

  ngOnInit() {

    this.getMatchSchedule();

  }


getMatchSchedule(){
    this.apiSrvc.getData(environment.baseURL + '/match-schedule', {})
    .subscribe(
      data => {
        this.matchSchedule= data;
      },
      err => {
          console.log(err);
      });
  }

  matchResult(result, team, looseTeam){
    if(result){
        return (looseTeam===team);
    }
    return false;
  }


    hideMatch(schedule){
        return (this.currentPage==='schedule')? schedule.result.description: !schedule.result.description;
    }
}
