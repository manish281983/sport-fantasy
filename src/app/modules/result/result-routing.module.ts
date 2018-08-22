
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResultComponent} from './result.component';

export const resultRoutes: Routes = [
    {
        path: 'result',
        component: ResultComponent,
        data: {title: 'Result'}
    }
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

