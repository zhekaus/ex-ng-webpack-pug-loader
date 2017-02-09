import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    // templateUrl: './home.component.pug',
    // The working way for going with pug-loader
    template: require('./home.component.pug')(), // The working way for going with pug-loader

    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor() {
    }
    ngOnInit() {
    }
}
