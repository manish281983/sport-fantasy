
import {NgModule, ModuleWithProviders} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import { VirtualScrollModule } from 'angular2-virtual-scroll';
import {RouterStateParamsService} from 'ng-router-state-params';
import {AppRoutingModule} from './app.routes.module';
import {UIComponentModule} from './ui-components/ui-components.module';
import {PipeModule} from './pipe/pipe.module';
import {AppComponent} from './app.component';
import {APISrvc} from './services/api.service';
import {ResolutionSrvc} from './services/resolution.service';
import {StorageSrvc} from './services/storage.service';
import {DashboardModule} from '../modules/dashboard/dashboard.module';
import {TeamsModule} from '../modules/teams/teams.module';
import {VenuesModule} from '../modules/venues/venues.module';
import {BracketsModule} from '../modules/brackets/brackets.module';
import {ScheduleModule} from '../modules/schedule/schedule.module';
import {TeamInfoModule} from '../modules/team-info/team-info.module';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        VirtualScrollModule,
        AppRoutingModule,
        PipeModule,
        UIComponentModule,
        DashboardModule,
        TeamsModule,
        TeamInfoModule,
        ScheduleModule,
        VenuesModule,
        BracketsModule

    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        RouterStateParamsService,
        APISrvc,
        ResolutionSrvc,
        StorageSrvc
    ]
})

export class AppModule {
}
