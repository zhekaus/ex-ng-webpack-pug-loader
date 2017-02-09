import './polyfills.ts';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {environment} from './environments/environment';
import {AppModule} from './app/app.module';
// require('style-loader!css-loader!./assets/styles/global-styles.css');

// import './assets/styles/global-styles.css';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
