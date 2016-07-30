import angular from 'angular';

import TestComponent from './test.component';

const config = ($stateProvider) => {
    $stateProvider
        .state('app.test', {
            url: '/test',
            template: '<test></test>'
        });
};

config.$inject = ['$stateProvider'];

const test = angular
    .module('main.app.test', [])
    .component('test', TestComponent)
    .config(config)
    .name;

export default test;
