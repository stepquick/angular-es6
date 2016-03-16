// 3rd party modules
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

//import bootstrap from 'bootstrap';
import angular from 'angular';
import angularUiBootstrap from 'angular-ui-bootstrap';

import app from './app/app.module';
import home from './app/home/home.module';
import about from './app/about/about.module';
import components from './app/components/components.module';

angular.module('main', [
    angularUiBootstrap, app, home, about, components
]);

angular.element(document).ready(() => {
    angular.bootstrap(document, ['main']);
});
