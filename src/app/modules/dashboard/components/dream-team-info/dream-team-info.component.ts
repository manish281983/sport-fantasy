import {Component, Input, OnInit} from '@angular/core';
import {environment} from 'app/environment';
import {APISrvc} from '../../../../core/services/api.service';
import {Router, ActivatedRoute} from '@angular/router';
import {StorageSrvc} from 'app/core/services/storage.service';

@Component({
    selector: 'dream-team-info',
    templateUrl: './dream-team-info.template.html',
    styleUrls: ['./dream-team-info.scss']
})
export class DreamTeamInfo {
   matchSchedule=[];
   teamsList=[];
      teamName='';
          constructor(private apiSrvc: APISrvc, private router: Router, private activatedRoute: ActivatedRoute,  private storageSrvc: StorageSrvc) {
           }

          ngOnInit() {
            this.getPoolInfo();
          }




      getPoolInfo(){


          this.apiSrvc.getData(environment.baseURL + '/pools', {})
          .subscribe(
            data => {
            if(this.storageSrvc.getData('userDetails')){
                let userDetail=JSON.parse(this.storageSrvc.getData('userDetails'));
                for(let i=0;i<data.length;i++){
                    if(data[i].id===userDetail.pool.id){
                     this.teamsList= data[i].teamlist;
                     break;

                    }
                }
               } else {
                  this.teamsList= data[0].teamlist;
               }
            },
            err => {
                console.log(err);
            });
        }

      gotToPage(){
          this.router.navigate(['/teams'], {relativeTo: this.activatedRoute});
      }
  }

