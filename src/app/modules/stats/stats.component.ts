import { Component, OnInit } from '@angular/core';
import {APISrvc} from '../../core/services/api.service';
import {environment} from 'app/environment';
import {MatTabChangeEvent} from '@angular/material';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

    scorecardData ={
        team1:{
            batting: [],
            bowling: []
        },
        team2:{
            batting: [],
            bowling: []
        },
        summary:{
            match: null,
            team1: {
                team: null
            },
            team2: {
                team: null
            }

        }
    };

    optionList= [];

 constructor(private apiSrvc: APISrvc, private router: Router, private activatedRoute: ActivatedRoute) {
  }


    ngOnInit() {
       this.getScorecard();
    }

    getScorecard(){
        this.apiSrvc.getData(environment.baseURL + '/points-table', {})
         .subscribe(
        data => {
            this.optionList= data;
        },
        err => {
        console.log(err);
        });
    }

}
