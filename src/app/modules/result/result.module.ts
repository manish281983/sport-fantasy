import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result.component';
import {ResultRoutingModule} from './result-routing.module';
import {UIComponentModule} from '../../core/ui-components/ui-components.module';
import {TeamResult} from './components/team-result/team-result.component';
import {ResultDetail} from './components/result-detail/result-detail.component';
import { MatTabsModule } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    ResultRoutingModule,
    UIComponentModule,
    MatTabsModule,
    MatExpansionModule
  ],
  exports: [
     TeamResult,
     ResultDetail
    ],
  declarations: [
    ResultComponent,
    TeamResult,
    ResultDetail
  ]
})
export class ResultModule {
}
