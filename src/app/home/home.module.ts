import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';

import {HomeComponent} from './home.component';
import {SharedModule} from '../shared/shared.module';
import {HighchartsChartModule} from "highcharts-angular";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, SharedModule, HomeRoutingModule, HighchartsChartModule,
        NgbModule]
})
export class HomeModule {
}
