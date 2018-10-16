
import {Component, Input, OnInit} from '@angular/core';
import {environment} from 'app/environment';
import {APISrvc} from '../../../../core/services/api.service';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'result-detail',
    templateUrl: './result-detail.template.html',
    styleUrls: ['./result-detail.scss']
})
export class ResultDetail  {

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
            result: null,
            mom: {
                id: null,
                name: null
            },
            team1: {
                team: null
            },
            team2: {
                team: null
            }

        }
    };
 constructor(private apiSrvc: APISrvc, private router: Router, private activatedRoute: ActivatedRoute) {
  }


    ngOnInit() {
       this.getScorecard();
    }

    getScorecard(){
        this.apiSrvc.getData(environment.baseURL + '/scorecard', {})
        .subscribe(
        data => {
        this.scorecardData= data;
        //this.scorecardData.summary.result= null;
        },
        err => {
        console.log(err);
        });
    }

    getEconomy(player){
        return (player.runs/player.over).toFixed(1);
    }

}
