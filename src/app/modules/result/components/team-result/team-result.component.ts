
import {Component, Input, OnInit} from '@angular/core';
import {environment} from 'app/environment';
import {APISrvc} from '../../../../core/services/api.service';

@Component({
    selector: 'team-result',
    templateUrl: './team-result.template.html',
    styleUrls: ['./team-result.scss']
})
export class TeamResult implements OnInit {
@Input() teamName: any;

matchSchedule=[];
 constructor(private apiSrvc: APISrvc) {
  }

 ngOnInit() {
   this.getMatchSchedule();
 }


getMatchSchedule(){
   this.apiSrvc.getData(environment.baseURL + '/match-schedule', {})
   .subscribe(
     data => {
         for(let schedule of data){
           if(((this.teamName==='')||(this.teamName===schedule.team1.name)|| (this.teamName===schedule.team2.name))&&(schedule.result.description!==null)){
               this.matchSchedule.push(schedule);
           }
       }
       console.log(this.matchSchedule);

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
}
