
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {environment} from 'app/environment';
import {APISrvc} from '../../../../core/services/api.service';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {StorageSrvc} from 'app/core/services/storage.service';

@Component({
    selector: 'scorecard-live',
    templateUrl: './scorecard-live.template.html',
    styleUrls: ['./scorecard-live.scss']
})
export class ScorecardLive  {

 @Input() scorecardData: any;
 @Output() backAction = new EventEmitter<any>();

   selectedBatsman: string;
  batsmanArr:any;

 constructor(private apiSrvc: APISrvc, private router: Router, private activatedRoute: ActivatedRoute,private storageSrvc: StorageSrvc) {
      if(!this.storageSrvc.getData('scorecard')){
        this.storageSrvc.setData('scorecard', JSON.stringify([]));
      }else{

      }
 }


    ngOnInit() {
        this.batsmanArr=[
            {
                id: 1,
                name: 'Manish Rawat'
            },
            {
                id: 2,
                name: 'Kishore Chilla'
            }

        ];

        this.selectedBatsman ="1";

    }

cancelAction(){
     this.backAction.emit();
    }


}
