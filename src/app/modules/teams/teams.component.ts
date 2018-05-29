import { Component, OnInit } from '@angular/core';
import {environment} from 'app/environment';
import {APISrvc} from '../../core/services/api.service';
import {MatTabChangeEvent} from '@angular/material';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';


@Component({
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
    poolsList= [];
    teamsList= [];

  constructor(private apiSrvc: APISrvc, private router: Router, private activatedRoute: ActivatedRoute) {
   }

  ngOnInit() {
        this.getPoolInfo();
  }
tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    this.teamsList=this.poolsList[tabChangeEvent.index].teamlist;
}

  getPoolInfo(){
    this.apiSrvc.getData(environment.baseURL + '/pools', {})
    .subscribe(
      data => {
        this.poolsList= data;
      },
      err => {
          console.log(err);
      });
  }

  getTeamDetails(team){
    this.router.navigate(['/team-info/'+team.id], {relativeTo: this.activatedRoute});
  }
}
