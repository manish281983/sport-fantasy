
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ScheduleComponent} from './schedule.component';

export const scheduleRoutes: Routes = [
    {
        path: 'schedule',
        component: ScheduleComponent,
        data: {title: 'Schedule'}
    },
    {
        path: 'result',
        component: ScheduleComponent,
        data: {title: 'Result'}
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(scheduleRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ScheduleRoutingModule {
}

