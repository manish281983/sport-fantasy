
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeamInfoComponent} from './team-info.component';

export const teamInfoRoutes: Routes = [
    {
            path: 'team-info/:id',
            component: TeamInfoComponent,
            data: {title: 'team-info'}
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(teamInfoRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class TeamInfoRoutingModule {
}

