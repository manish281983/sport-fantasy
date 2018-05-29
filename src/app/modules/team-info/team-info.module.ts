import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamInfoComponent } from './team-info.component';
import {TeamInfoRoutingModule} from './team-info-routing.module';


@NgModule({
  imports: [
    CommonModule,
    TeamInfoRoutingModule
  ],
  declarations: [
    TeamInfoComponent
  ]
})
export class TeamInfoModule {


}
