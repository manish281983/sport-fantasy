import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenuesComponent } from './venues.component';
import {VenuesRoutingModule} from './venues-routing.module';

@NgModule({
  imports: [
    CommonModule,
    VenuesRoutingModule

  ],
  declarations: [
    VenuesComponent
  ]
})
export class VenuesModule {


}
