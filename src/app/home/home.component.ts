import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as Highcharts from 'highcharts/highstock';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    Highcharts: typeof Highcharts = Highcharts;
    chartOptions: Highcharts.Options = {
        legend: {
            enabled: false
        },
        yAxis: [{
            visible: true,
            title: {
                text: 'USD'
            }
        }        ],
        tooltip: {
            shared: true,
            outside: true,
            enabled: false,
            valueDecimals: 2
        },
        series: [{
            data: [],
            type: 'line'
        }]
    };
    bankEntries = [
        {
            date: new Date(),
            target: "BestBite",
            description: "BestBite, shopping",
            amount: -680,
            balance: 564,
            category: "electronics"
        },
        {
            date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
            target: "Target",
            description: "Target, shopping",
            amount: -10,
            balance: 1244,
            category: "shopping"
        },
        {
            date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
            target: "John",
            description: "Utilities payment",
            amount: -300,
            balance: 1254,
            category: "utilities"
        },
        {
            date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10),
            target: "AMC",
            description: "cinema",
            amount: -20,
            balance: 1554,
            category: "entertainment"
        },
        {
            date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 11),
            target: "",
            description: "Salary",
            amount: 1000,
            balance: 1574,
            category: "income"
        }
    ]

    constructor(private router: Router) {
        const series2: Highcharts.SeriesOptionsType = {
            name: "Balance",
            // @ts-ignore
            data: this.bankEntries.sort((a, b) => a.date.getTime() - b.date.getTime())
                .map(e => [e.date.getTime(), e.balance]),
            visible: true,
            tooltip: {
                valueSuffix: ' USD'
            }
        };
        this.chartOptions.series.push(series2);
    }

    ngOnInit(): void {
    }

    onSort($event: any) {

    }
}
