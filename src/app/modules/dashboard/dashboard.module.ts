import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {TournamentBracket} from './components/tournament-bracket/tournament-bracket.component';
import {DashboardUser} from './components/dashboard-user/dashboard-user.component';
import {DreamTeamInfo} from './components/dream-team-info/dream-team-info.component';
import {UpcomingMatchInfo} from './components/upcoming-match-info/upcoming-match-info.component';
import {FixturesInfo} from './components/fixtures-info/fixtures-info.component';
import {RankingInfo} from './components/ranking-info/ranking-info.component';
import {PastResultInfo} from './components/past-result-info/past-result-info.component';
import {ScheduleModule} from '../schedule/schedule.module';
import {DashboardPointsTable} from './components/dashboard-points-table/dashboard-points-table.component';
import { MatTabsModule } from '@angular/material';
import {CarouselModule} from "angular2-carousel";

@NgModule({
  imports: [
    CommonModule,
    ScheduleModule,
    DashboardRoutingModule,
    MatTabsModule,
    CarouselModule
  ],
  declarations: [
      DashboardComponent,
      TournamentBracket,
      DashboardUser,
      DreamTeamInfo,
      UpcomingMatchInfo,
      FixturesInfo,
      RankingInfo,
      DashboardPointsTable,
      PastResultInfo
  ]
})
export class DashboardModule {


}
