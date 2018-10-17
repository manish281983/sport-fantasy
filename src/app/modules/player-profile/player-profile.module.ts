import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerProfileComponent } from './player-profile.component';
import {PlayerProfileRoutingModule} from './player-profile-routing.module';
import {UIComponentModule} from '../../core/ui-components/ui-components.module';
import {MatTabsModule, MatListModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    PlayerProfileRoutingModule,
    MatTabsModule,
    MatListModule,
    UIComponentModule
  ],
  exports: [
      ],
    declarations: [
      PlayerProfileComponent
    ]
})
export class PlayerProfileModule {


}
