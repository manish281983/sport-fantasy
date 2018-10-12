
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StatsComponent} from './stats.component';

export const statsRoutes: Routes = [
    {
            path: 'stats',
            component: StatsComponent,
            data: {title: 'My Stats'}
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(statsRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class StatsRoutingModule {
}

