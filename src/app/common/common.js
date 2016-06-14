import angular from 'angular';

import user from './user-info/user-info';
import nav from './nav/nav';
import footer from './footer/footer';

const common = angular
    .module('main.app.common', [])
    .component('userInfo', user)
    .component('navBar', nav)
    .component('siteFooter', footer)
    .name;

export default common;
