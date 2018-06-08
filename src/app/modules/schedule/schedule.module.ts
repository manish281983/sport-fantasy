import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';
import {ScheduleRoutingModule} from './schedule-routing.module';
import {UIComponentModule} from '../../core/ui-components/ui-components.module';

@NgModule({
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    UIComponentModule
  ],
  exports: [
    ],
  declarations: [
    ScheduleComponent
  ]
})
export class ScheduleModule {
}
