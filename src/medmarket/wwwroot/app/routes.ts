import { Route, Router } from 'angular2/router';
import { Home } from './components/home';

export var Routes = {
    home: new Route({ path: '/', name: 'Home', component: Home })
};

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);