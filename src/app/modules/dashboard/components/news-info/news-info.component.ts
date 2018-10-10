import {Component, Input, OnInit} from '@angular/core';
import {environment} from 'app/environment';
import {APISrvc} from '../../../../core/services/api.service';
import {Router, ActivatedRoute} from '@angular/router';
import {StorageSrvc} from 'app/core/services/storage.service';


@Component({
    selector: 'news-info',
    templateUrl: './news-info.template.html',
    styleUrls: ['./news-info.scss']
})
export class NewsInfo {
    newsArr= [];
      constructor(private apiSrvc: APISrvc, private router: Router, private activatedRoute: ActivatedRoute,  private storageSrvc: StorageSrvc) {
       }

     ngOnInit() {
        this.getNewsDetail();
      }


     getNewsDetail(){
         this.apiSrvc.getData(environment.baseURL + '/news', {})
         .subscribe(
           data => {
            for(let i=0;i< data.length;i++){
                this.newsArr.push(data[i]);
                if(i===2)
                    return;
            }
           },
           err => {
               console.log(err);
           });
       }
        gotToPage(){
           this.router.navigate(['/news'], {relativeTo: this.activatedRoute});
       }

    }

