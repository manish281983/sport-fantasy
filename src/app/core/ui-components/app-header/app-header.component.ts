
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import {StorageSrvc} from 'app/core/services/storage.service';

import {Component, OnInit, Input} from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
@Component({
    selector: 'app-header',
    templateUrl: './app-header.template.html',
    styleUrls: ['./app-header.scss']
})
export class AppHeaderComponent implements OnInit {
    pageTitle: string;
    @Input() topPosition: boolean;
    constructor(private router: Router,
                private activatedRoute: ActivatedRoute, private storageSrvc: StorageSrvc) {
    }

    ngOnInit() {

            let obj= {
                name: 'Manish Rawat',
                pool: {
                    id: 1,
                    name: 'Div 1'
                },
                team: {
                    id: 1,
                    name: 'Navratans'
                },
                matches: 11,
                runs: 200,
                wickets: 10,
                role: 'All Rounder'

            };
            this.storageSrvc.setData('userDetails', JSON.stringify(obj));
          //  this.storageSrvc.removeData('userDetails');

        if ((!this.storageSrvc.getData('sessionExpire')) || (this.storageSrvc.getData('sessionExpire') === 'expired')) {
            this.storageSrvc.setData('sessionExpire', 'active');
        }
        this.router.events.filter((event) => event instanceof NavigationEnd)
            .map(() => this.activatedRoute)
            .map((route) => {
                while (route.firstChild) route = route.firstChild;
                return route;
            })
            .mergeMap((route) => route.data)
            .subscribe((event) =>{
                this.pageTitle = event['title'];
            });
    }

    isCurrentState(state) {
        return this.pageTitle && this.pageTitle === state;
    }

    gotToPage(page){

          this.router.navigate([page], {relativeTo: this.activatedRoute});
    }

    goBack() {
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
    }

    isBackVisible() {
        /* TODO : Find right way to hide back button when other views are ready */
        return this.pageTitle !== 'My Events';
    }
}
