
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BracketsComponent} from './brackets.component';

export const bracketsRoutes: Routes = [
    {
            path: 'brackets',
            component: BracketsComponent,
            data: {title: 'My Brackets'}
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(bracketsRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class BracketsRoutingModule {
}

