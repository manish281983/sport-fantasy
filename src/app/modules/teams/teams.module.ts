import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams.component';
import {TeamsRoutingModule} from './teams-routing.module';
import {MatTabsModule, MatListModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TeamsRoutingModule,
    MatTabsModule,
    MatListModule

  ],
  declarations: [
    TeamsComponent
  ]
})
export class TeamsModule {


}
