import { Component, OnInit } from '@angular/core';
import {APISrvc} from '../../core/services/api.service';
import {environment} from 'app/environment';
import {MatTabChangeEvent} from '@angular/material';

@Component({
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss']
})
export class PointsComponent implements OnInit {

constructor(private apiSrvc: APISrvc) {}

   optionList= [];

    getPointsTable(){
         this.apiSrvc.getData(environment.baseURL + '/points-table', {})
         .subscribe(
           data => {
               this.optionList= data;
           },
           err => {
               console.log(err);
           });
       }
       ngOnInit() {
           this.getPointsTable();
       }

   private _selectedIndex = 1;


   get selectedIndex() {
       return this._selectedIndex;
   }

   set selectedIndex(val: number) {
       if (val) {
           this._selectedIndex = val;
       } else {
           this._selectedIndex = 0;
       }
   }




}

