import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result.component';
import {ResultRoutingModule} from './result-routing.module';
import {UIComponentModule} from '../../core/ui-components/ui-components.module';
import {TeamResult} from './components/team-result/team-result.component';

@NgModule({
  imports: [
    CommonModule,
    ResultRoutingModule,
    UIComponentModule
  ],
  exports: [
     TeamResult
    ],
  declarations: [
    ResultComponent,
    TeamResult
  ]
})
export class ResultModule {
}
