
import {Component, OnInit} from '@angular/core';
import {MatTabChangeEvent} from '@angular/material';
import {APISrvc} from '../../../../core/services/api.service';
import {environment} from 'app/environment';
import {Router, ActivatedRoute} from '@angular/router';
import {StorageSrvc} from 'app/core/services/storage.service';

@Component({
    selector: 'dashboard-points-table',
    templateUrl: './dashboard-points-table.template.html',
    styleUrls: ['./dashboard-points-table.scss']
})
export class DashboardPointsTable  implements OnInit {

constructor(private apiSrvc: APISrvc,private router: Router, private activatedRoute: ActivatedRoute, private storageSrvc: StorageSrvc) {}

    optionList= [];

     getPointsTable(){

          this.apiSrvc.getData(environment.baseURL + '/points-table', {})
          .subscribe(
            data => {
                this.optionList= data;
                if(this.storageSrvc.getData('userDetails')){
                for(let i=0;i< this.optionList.length;i++){
                    if(this.optionList[i].id===JSON.parse(this.storageSrvc.getData('userDetails')).pool.id){
                        console.log(this.optionList[i]);
                        console.log(i);
                        this._selectedIndex = i;
                        break;
                    }

                }
                }
            },
            err => {
                console.log(err);
            });
        }
        ngOnInit() {
            this.getPointsTable();
        }

    private _selectedIndex = 0;


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

    gotToPage(){
        this.router.navigate(['/points'], {relativeTo: this.activatedRoute});
    }


}

