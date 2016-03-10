// 3rd party modules
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

//import bootstrap from 'bootstrap';
import angular from 'angular';
import angularUiBootstrap from 'angular-ui-bootstrap';

import app from './app/app.module';
import common from './app/common/common.module';

angular.module('main', [
    angularUiBootstrap, app, common
]);

angular.element(document).ready(() => {
    angular.bootstrap(document, ['main']);
});
