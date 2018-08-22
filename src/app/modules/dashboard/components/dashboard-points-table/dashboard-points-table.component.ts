
import {Component, OnInit} from '@angular/core';
import {MatTabChangeEvent} from '@angular/material';
import {APISrvc} from '../../../../core/services/api.service';
import {environment} from 'app/environment';

@Component({
    selector: 'dashboard-points-table',
    templateUrl: './dashboard-points-table.template.html',
    styleUrls: ['./dashboard-points-table.scss']
})
export class DashboardPointsTable  implements OnInit {

constructor(private apiSrvc: APISrvc) {}

    optionList= [];

     getPointsTable(){
          this.apiSrvc.getData(environment.baseURL + '/points-table', {})
          .subscribe(
            data => {
                this.optionList= data;
            },
            err => {
                console.log(err);
            });
        }
        ngOnInit() {
            this.getPointsTable();
        }

    private _selectedIndex = 1;


    get selectedIndex() {
        return this._selectedIndex;
    }

    set selectedIndex(val: number) {
        if (val) {
            this._selectedIndex = val;
        } else {
            this._selectedIndex = 0;
        }
    }




}

