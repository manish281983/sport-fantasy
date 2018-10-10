import {Component, Input, OnInit} from '@angular/core';
import {environment} from 'app/environment';
import {APISrvc} from '../../../../core/services/api.service';
import {Router, ActivatedRoute} from '@angular/router';
import {StorageSrvc} from 'app/core/services/storage.service';

@Component({
    selector: 'past-result-info',
    templateUrl: './past-result-info.template.html',
    styleUrls: ['./past-result-info.scss']
})
export class PastResultInfo {
 matchResult=[];
 teamName="";
         constructor(private apiSrvc: APISrvc, private router: Router, private activatedRoute: ActivatedRoute,  private storageSrvc: StorageSrvc) {
          }

         ngOnInit() {
           this.getMatchResult();
         }



     getMatchResult(){
         this.matchResult=[];
        if(this.storageSrvc.getData('userDetails')){
            this.teamName= JSON.parse(this.storageSrvc.getData('userDetails')).team.name;
        }
       this.apiSrvc.getData(environment.baseURL + '/match-schedule', {})
       .subscribe(
         data => {
             let count=0;
             for(let schedule of data){
                 if(((this.teamName==='')||(this.teamName===schedule.team1.name)|| (this.teamName===schedule.team2.name))&&(schedule.result.description!==null)){

                 if(count===5)
                     return;
                 this.matchResult.push(schedule);
                 count++;
                 }
             }
         },
         err => {
             console.log(err);
         });
     }

     gotToPage(){
         this.router.navigate(['/result'], {relativeTo: this.activatedRoute});
     }

      gotToResult(id){
           this.router.navigate(['/result-detail/'+id], {relativeTo: this.activatedRoute});
      }
 }
