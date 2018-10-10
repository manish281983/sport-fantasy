import { Component, OnInit } from '@angular/core';
import {APISrvc} from '../../core/services/api.service';
import {environment} from 'app/environment';


@Component({
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
 newsArr= [];
  constructor(private apiSrvc: APISrvc) {
        this.getNewsDetail();
  }


  getNewsDetail(){
      this.apiSrvc.getData(environment.baseURL + '/news', {})
      .subscribe(
        data => {
          this.newsArr= data;
        },
        err => {
            console.log(err);
        });
    }

  ngOnInit() {

  }

}
