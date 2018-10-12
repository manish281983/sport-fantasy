import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './stats.component';
import {StatsRoutingModule} from './stats-routing.module';
import { MatTabsModule } from '@angular/material';
import {UIComponentModule} from '../../core/ui-components/ui-components.module';

@NgModule({
  imports: [
    CommonModule,
    StatsRoutingModule,
    MatTabsModule,
    UIComponentModule

  ],
  exports: [
      ],
    declarations: [
      StatsComponent
    ]
})
export class StatsModule {


}
