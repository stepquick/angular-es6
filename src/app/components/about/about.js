import angular from 'angular';

import AboutComponent from './about.component';
import template from './about.tpl.html';

const about = angular
    .module('main.app.about', [])
    .component('about', AboutComponent)
    .config(($stateProvider) => {
        $stateProvider
            .state('app.about', {
                url: '/about',
                template: '<about></about>'
            });
    })
    .name;

export default about;
