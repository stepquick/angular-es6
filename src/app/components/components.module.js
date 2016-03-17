import angular from 'angular';

import userInfo from './user-info/user-info';
import navBar from './navbar/navbar';
import footer from './footer/footer';

export default angular
    .module('main.app.components', [])
    .component('userInfo', userInfo)
    .component('navBar', navBar)
    .component('siteFooter', footer)
    .name;
