import angular from 'angular';

import user from './user-info';
import nav from './nav';
import footer from './footer';

const common = angular
    .module('main.app.common', [footer, nav])
    .component('userInfo', user)
    .name;

export default common;
