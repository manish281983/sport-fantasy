import { Component, OnInit } from '@angular/core';
import {APISrvc} from '../../core/services/api.service';
import {environment} from 'app/environment';


@Component({
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.scss']
})
export class VenuesComponent implements OnInit {
 venues= [];
  constructor(private apiSrvc: APISrvc) {
        this.getVenuesDetail();
  }


  getVenuesDetail(){
      this.apiSrvc.getData(environment.serverURL + '/venue/all', {})
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
