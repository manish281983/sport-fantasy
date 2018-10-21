import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result.component';
import {ResultRoutingModule} from './result-routing.module';
import {UIComponentModule} from '../../core/ui-components/ui-components.module';
import {TeamResult} from './components/team-result/team-result.component';
import {ResultDetail} from './components/result-detail/result-detail.component';
import {ResultSummary} from './components/result-summary/result-summary.component';
import {ScorecardLive} from './components/scorecard-live/scorecard-live.component';
import {ScorecardOvers} from './components/scorecard-overs/scorecard-overs.component';
import { MatTabsModule } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    ResultRoutingModule,
    UIComponentModule,
    MatTabsModule,
    MatExpansionModule,
    MatRadioModule,
    FormsModule,
    MatButtonModule
  ],
  exports: [
     TeamResult,
     ResultDetail
    ],
  declarations: [
    ResultComponent,
    TeamResult,
    ResultDetail,
    ResultSummary,
    ScorecardLive,
    ScorecardOvers
  ]
})
export class ResultModule {
}
