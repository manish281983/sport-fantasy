
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResultComponent} from './result.component';
import {TeamResult} from './components/team-result/team-result.component';
import {ResultDetail} from './components/result-detail/result-detail.component';

export const resultRoutes: Routes = [
    {
        path: 'result',
        component: ResultComponent,
        data: {title: 'Result'}
    },
    {
        path: 'result-detail/:id',
        component: ResultDetail
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(resultRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ResultRoutingModule {
}

