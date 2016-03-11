import angular from 'angular';
import uirouter from 'angular-ui-router';

import { routing } from './app.config.js';

import AppComponent from './app.component';
import template from './app.tpl.html';

export default angular
    .module('main.app', [uirouter])
    .config(routing)
    .component('appComponent', { controller: AppComponent, template })
    .name;
