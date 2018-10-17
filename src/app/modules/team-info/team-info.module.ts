import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamInfoComponent } from './team-info.component';
import {TeamInfoRoutingModule} from './team-info-routing.module';
import {UIComponentModule} from '../../core/ui-components/ui-components.module';
import {ScheduleModule} from '../schedule/schedule.module';
import {ResultModule} from '../result/result.module';

@NgModule({
  imports: [
    CommonModule,
    TeamInfoRoutingModule,
    UIComponentModule,
    ScheduleModule,
    ResultModule
  ],
  declarations: [
    TeamInfoComponent
  ]
})
export class TeamInfoModule {


}
