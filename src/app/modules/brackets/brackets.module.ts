import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BracketsComponent } from './brackets.component';
import {BracketsRoutingModule} from './brackets-routing.module';
import {TournamentBracket} from './components/tournament-bracket/tournament-bracket.component';

@NgModule({
  imports: [
    CommonModule,
    BracketsRoutingModule

  ],
  exports: [
         TournamentBracket
      ],
    declarations: [
      BracketsComponent,
      TournamentBracket
    ]
})
export class BracketsModule {


}
