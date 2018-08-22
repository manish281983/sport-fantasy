
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeamsComponent} from './teams.component';

export const teamsRoutes: Routes = [
    {
            path: 'teams',
            component: TeamsComponent,
            data: {title: 'Teams'}
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

