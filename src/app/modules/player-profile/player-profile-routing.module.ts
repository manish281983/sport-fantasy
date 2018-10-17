
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlayerProfileComponent} from './player-profile.component';

export const playerProfileRoutes: Routes = [
    {
            path: 'player-profile/:id',
            component: PlayerProfileComponent,
            data: {title: 'player-profile'}
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(playerProfileRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class PlayerProfileRoutingModule {
}

