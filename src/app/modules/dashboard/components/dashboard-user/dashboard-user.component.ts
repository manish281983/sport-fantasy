
import {Component, Input, OnInit} from '@angular/core';
import {StorageSrvc} from 'app/core/services/storage.service';
@Component({
    selector: 'dashboard-user',
    templateUrl: './dashboard-user.template.html',
    styleUrls: ['./dashboard-user.scss']
})
export class DashboardUser {
    userDetails: any;
    constructor(private storageSrvc: StorageSrvc) {
    }

    ngOnInit() {
        if(this.storageSrvc.getData('userDetails')){
            this.userDetails = JSON.parse(this.storageSrvc.getData('userDetails'));
        }
    }

}

