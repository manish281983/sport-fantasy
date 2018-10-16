import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamInfoComponent } from './team-info.component';
import {TeamInfoRoutingModule} from './team-info-routing.module';
import {TeamSquad} from './components/team-squad/team-squad.component';
import {UIComponentModule} from '../../core/ui-components/ui-components.module';
import {ScheduleModule} from '../schedule/schedule.module';
import {ResultModule} from '../result/result.module';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  imports: [
    CommonModule,
    TeamInfoRoutingModule,
    UIComponentModule,
    ScheduleModule,
    ResultModule,
    MatChipsModule
  ],
  declarations: [
    TeamInfoComponent,
    TeamSquad
  ]
})
export class TeamInfoModule {


}
