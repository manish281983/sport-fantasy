
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {MatFormFieldModule} from '@angular/material/form-field';

import {StorageSrvc} from 'app/core/services/storage.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Component, OnInit, Input, Inject} from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
export interface DialogData {
  password: string;
  name: string;
}

@Component({
    selector: 'app-header',
    templateUrl: './app-header.template.html',
    styleUrls: ['./app-header.scss']
})
export class AppHeaderComponent implements OnInit {
    pageTitle: string;
    @Input() topPosition: boolean;
    userDetails= {
        name: null
    };
    constructor(private router: Router,
                private activatedRoute: ActivatedRoute, private storageSrvc: StorageSrvc, public dialog: MatDialog) {
    }

    ngOnInit() {
        if(this.storageSrvc.getData('userDetails')){
            this.userDetails= JSON.parse(this.storageSrvc.getData('userDetails'));
        }
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

    password: string;
    name: string;

     openDialog(): void {
        const dialogRef = this.dialog.open(LoginDialog, {
          width: '350px',
          data: {name: this.name, password: this.password}
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.password = result;
        });
      }

      logoutUser(){
        this.storageSrvc.removeData('userDetails');
         window.location.reload();

      }
}
@Component({
  selector: 'login-dialog',
  templateUrl: 'login-dialog.html',
})
export class LoginDialog {


  constructor(
    public dialogRef: MatDialogRef<LoginDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private router: Router,private storageSrvc: StorageSrvc,
                                                                      private activatedRoute: ActivatedRoute) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  loginAction(data): void{

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

        this.dialogRef.close();
        window.location.reload();

  }

}
