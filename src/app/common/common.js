import angular from 'angular';

import userInfo from './user-info/user-info';
import navBar from './nav/nav';
import footer from './footer/footer';

const common = angular
    .module('main.app.common', [])
    .component('userInfo', userInfo)
    .component('navBar', navBar)
    .component('siteFooter', footer)
    .name;

export default common;
