
import {Component, Input} from '@angular/core';

@Component({
    selector: 'team-squad',
    templateUrl: './team-squad.template.html',
    styleUrls: ['./team-squad.scss']
})
export class TeamSquad {
      @Input() players: any;

    constructor() {
    }



}

