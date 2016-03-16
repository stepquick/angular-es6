import angular from 'angular';
import uirouter from 'angular-ui-router';

import { routing } from './about.config.js';

import AboutComponent from './about.component';
import template from './about.tpl.html';

export default angular
    .module('main.app.about', [uirouter])
    .config(routing)
    .component('aboutComponent', { controller: AboutComponent, template })
    .name;
