import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';
import {ScheduleRoutingModule} from './schedule-routing.module';
import {TournamentBracket} from './components/tournament-bracket/tournament-bracket.component';


@NgModule({
  imports: [
    CommonModule,
    ScheduleRoutingModule

  ],
  exports: [
       TournamentBracket
    ],
  declarations: [
    ScheduleComponent,
    TournamentBracket
  ]
})
export class ScheduleModule {
}
