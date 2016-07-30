import angular from 'angular';

import AboutComponent from './about.component';


const config = ($stateProvider) => {
    $stateProvider
        .state('app.about', {
            url: '/about',
            template: '<about></about>'
        });
};

config.$inject = ['$stateProvider'];

const about = angular
    .module('main.app.about', [])
    .component('about', AboutComponent)
    .config(config)
    .name;

export default about;
