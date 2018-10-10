import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import {NewsRoutingModule} from './news-routing.module';
import {UIComponentModule} from '../../core/ui-components/ui-components.module';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule,
    UIComponentModule
  ],
  exports: [
      ],
    declarations: [
      NewsComponent
    ]
})
export class NewsModule {


}
