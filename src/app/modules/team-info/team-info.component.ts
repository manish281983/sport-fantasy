import { Component, OnInit } from '@angular/core';
import {APISrvc} from '../../core/services/api.service';
import {environment} from 'app/environment';
import {Router, ActivatedRoute} from '@angular/router';
import {StorageSrvc} from 'app/core/services/storage.service';


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
   constructor(private apiSrvc: APISrvc, private router: Router, private activatedRoute: ActivatedRoute, private storageSrvc: StorageSrvc) {
           }

    ngOnInit() {
         this.getTeamDetail(this.activatedRoute.snapshot.params['id']);
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
