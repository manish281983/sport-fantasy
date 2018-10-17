import { Component, OnInit } from '@angular/core';
import {APISrvc} from '../../core/services/api.service';
import {environment} from 'app/environment';
import {Router, ActivatedRoute} from '@angular/router';
import {StorageSrvc} from 'app/core/services/storage.service';


@Component({
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.scss']
})
export class PlayerProfileComponent implements OnInit {

    players: any;
    playerInfo={
        name: null,
        role: null
    };
   constructor(private apiSrvc: APISrvc, private router: Router, private activatedRoute: ActivatedRoute, private storageSrvc: StorageSrvc) {
             }

    ngOnInit() {
           this.getPlayerDetail(this.activatedRoute.snapshot.params['id']);

  }


  getPlayerDetail(playerId){
      this.apiSrvc.getData(environment.baseURL + '/player-info/'+ playerId, {})
      .subscribe(
        data => {
         this.players= [];
         this.playerInfo= data;
          this.players.push(data);

        },
        err => {
            console.log(err);
        });
    }


}
