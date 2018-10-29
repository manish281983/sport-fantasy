
import {Component, Input, OnInit, EventEmitter} from '@angular/core';
import {environment} from 'app/environment';
import {APISrvc} from '../../../../core/services/api.service';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'result-summary',
    templateUrl: './result-summary.template.html',
    styleUrls: ['./result-summary.scss']
})
export class ResultSummary  {

 @Input() scorecardData: any;

 constructor(private apiSrvc: APISrvc, private router: Router, private activatedRoute: ActivatedRoute) {
  }


    ngOnInit() {
    }




}
