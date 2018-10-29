import { Component, OnInit } from '@angular/core';
import {StorageSrvc} from 'app/core/services/storage.service';


@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 displayLeaderboard= false;
isMobile= false;
  constructor(private storageSrvc: StorageSrvc) {
   }

  ngOnInit() {

    if( navigator.userAgent.match(/Android/i)
     || navigator.userAgent.match(/webOS/i)
     || navigator.userAgent.match(/iPhone/i)
     || navigator.userAgent.match(/iPad/i)
     || navigator.userAgent.match(/iPod/i)
     || navigator.userAgent.match(/BlackBerry/i)
     || navigator.userAgent.match(/Windows Phone/i)
     ){
        this.isMobile= true;
      }



        if(this.storageSrvc.getData('userDetails')){
            this.displayLeaderboard= true;

        }

  }



}
