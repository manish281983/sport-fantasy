
import {Component, Input, OnInit, ChangeDetectionStrategy,} from '@angular/core';
import {environment} from 'app/environment';
import {APISrvc} from '../../../../core/services/api.service';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {StorageSrvc} from 'app/core/services/storage.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

type PaneType = 'left' | 'right';


@Component({
    selector: 'scorecard-overs',
    templateUrl: './scorecard-overs.template.html',
    styleUrls: ['./scorecard-overs.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [
        trigger('slide', [
          state('left', style({ transform: 'translateX(0)' })),
          state('right', style({ transform: 'translateX(-50%)' })),
          transition('* => *', animate(300))
        ])
      ]
})
export class ScorecardOvers  {

 @Input() scorecardData: any;
activePane= 'left';
 constructor(private apiSrvc: APISrvc, private router: Router, private activatedRoute: ActivatedRoute,private storageSrvc: StorageSrvc) {

 }


    ngOnInit() {

    }


    getBallClass(ball){
        if(ball==='W')
            return 'red';
        if(ball==='1')
            return 'blue';
        if((ball==='6') || (ball==='4'))
            return 'green';
        if((ball==='Wd') || (ball==='N')|| (ball==='L'))
            return 'gold';

    }

    togglePane(){
        this.activePane=(this.activePane==='right')? 'left':'right';
    }

}
