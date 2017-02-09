import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {ROUTES} from "./app.routes";
import {HomeComponent} from "./home/home.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES)
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],

    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
