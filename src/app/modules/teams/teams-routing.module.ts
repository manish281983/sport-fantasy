
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeamsComponent} from './teams.component';
import {TeamDetailComponent} from './components/team-detail/team-detail.component';

export const teamsRoutes: Routes = [
    {
            path: 'teams',
            component: TeamsComponent,
            data: {title: 'Teams'},
            children: [
                {
                    path: 'details/:id',
                    component: TeamDetailComponent,
                    data: {title: 'Team Details'},
                }
            ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(teamsRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class TeamsRoutingModule {
}

