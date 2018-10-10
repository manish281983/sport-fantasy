
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsComponent} from './news.component';

export const newsRoutes: Routes = [
    {
            path: 'news',
            component: NewsComponent,
            data: {title: 'My News'}
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(newsRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class NewsRoutingModule {
}

