import { Component, OnInit } from '@angular/core';
import {StorageSrvc} from 'app/core/services/storage.service';


@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 displayLeaderboard= false;

  constructor(private storageSrvc: StorageSrvc) {
   }

  ngOnInit() {
        if(this.storageSrvc.getData('userDetails')){
            this.displayLeaderboard= true;

        }

  }



}
