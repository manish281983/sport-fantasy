
import {Component, Input} from '@angular/core';
import {environment} from 'app/environment';
import {Router, ActivatedRoute} from '@angular/router';
import {StorageSrvc} from 'app/core/services/storage.service';


@Component({
    selector: 'team-squad',
    templateUrl: './team-squad.template.html',
    styleUrls: ['./team-squad.scss']
})
export class TeamSquad {
    @Input() players: any;
    @Input() isTeamList: any;

    constructor( private router: Router, private activatedRoute: ActivatedRoute, private storageSrvc: StorageSrvc) {
    }


   gotToPlayerProfile(id){
          this.router.navigate(['/player-profile/'+id], {relativeTo: this.activatedRoute});
     }

}

