import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result.component';
import {ResultRoutingModule} from './result-routing.module';
import {UIComponentModule} from '../../core/ui-components/ui-components.module';

@NgModule({
  imports: [
    CommonModule,
    ResultRoutingModule,
    UIComponentModule
  ],
  exports: [
    ],
  declarations: [
    ResultComponent
  ]
})
export class ResultModule {
}
