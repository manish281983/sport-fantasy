import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointsComponent } from './points.component';
import {PointsRoutingModule} from './points-routing.module';
import { MatTabsModule } from '@angular/material';
import {UIComponentModule} from '../../core/ui-components/ui-components.module';

@NgModule({
  imports: [
    CommonModule,
    PointsRoutingModule,
    MatTabsModule,
    UIComponentModule

  ],
  exports: [
      ],
    declarations: [
      PointsComponent
    ]
})
export class PointsModule {


}
