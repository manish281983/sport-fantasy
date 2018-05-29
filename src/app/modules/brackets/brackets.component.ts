import { Component, OnInit } from '@angular/core';
import {APISrvc} from '../../core/services/api.service';
import {environment} from 'app/environment';


@Component({
  templateUrl: './brackets.component.html',
  styleUrls: ['./brackets.component.scss']
})
export class BracketsComponent implements OnInit {
 venues= [];
  constructor(private apiSrvc: APISrvc) {
        this.getVenuesDetail();
  }


  getVenuesDetail(){
      this.apiSrvc.getData(environment.baseURL + '/venues', {})
      .subscribe(
        data => {
          this.venues= data;
        },
        err => {
            console.log(err);
        });
    }

  ngOnInit() {

  }

}
