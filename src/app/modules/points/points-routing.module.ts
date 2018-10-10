
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PointsComponent} from './points.component';

export const pointsRoutes: Routes = [
    {
            path: 'points',
            component: PointsComponent,
            data: {title: 'My Points'}
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(pointsRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class PointsRoutingModule {
}

