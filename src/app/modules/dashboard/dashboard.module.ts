import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {TournamentBracket} from './components/tournament-bracket/tournament-bracket.component';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
  DashboardComponent,
  TournamentBracket
  ]
})
export class DashboardModule {


}
