
import {Component, Input, OnInit} from '@angular/core';
import {environment} from 'app/environment';
import {APISrvc} from '../../../../core/services/api.service';

@Component({
    selector: 'upcoming-match-info',
    templateUrl: './upcoming-match-info.template.html',
    styleUrls: ['./upcoming-match-info.scss']
})
export class UpcomingMatchInfo  implements OnInit  {
     matchSchedule=[];
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
            let i=0;
            for(let schedule of data){
                i++;
                  this.matchSchedule.push(schedule);

                if(i===4){
                   break;
                }
            }
             console.log(this.matchSchedule);

        },
        err => {
            console.log(err);
        });
    }



}

