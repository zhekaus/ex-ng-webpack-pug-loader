import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-root',
    // templateUrl: './app.component.pug',
    template: require('./app.component.pug')(),
    // templateUrl: './app.component.html',
    styleUrls: ['./app.component.styl'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    title = 'app works!';
}
