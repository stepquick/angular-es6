// 3rd party modules
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

import angular from 'angular';
import angularUiBootstrap from 'angular-ui-bootstrap';

//routes
import app from './app/app.module';

import components from './app/components/components';
import common from './app/common/common';
import services from './app/services/services.module';

angular.module('main', [
    angularUiBootstrap, app, components, common, services
]);

angular.element(document).ready(() => {
    angular.bootstrap(document, ['main']);
});
