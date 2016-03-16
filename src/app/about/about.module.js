import angular from 'angular';
import uirouter from 'angular-ui-router';

import { routing } from './about.config.js';

import template from './about.tpl.html';

export default angular
    .module('main.app.about', [uirouter])
    .config(routing)
    .name;
