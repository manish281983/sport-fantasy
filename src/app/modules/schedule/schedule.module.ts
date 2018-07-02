import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';
import {ScheduleRoutingModule} from './schedule-routing.module';
import {UIComponentModule} from '../../core/ui-components/ui-components.module';
import {TeamSchedule} from './components/team-schedule/team-schedule.component';

@NgModule({
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    UIComponentModule
  ],
  exports: [
    TeamSchedule
    ],
  declarations: [
    ScheduleComponent,
    TeamSchedule
  ]
})
export class ScheduleModule {
}
