import angular from 'angular';

import TestComponent from './test.component';

const test = angular
    .module('main.app.test', [])
    .component('test', TestComponent)
    .config(($stateProvider) => {
        $stateProvider
            .state('app.test', {
                url: '/test',
                template: '<test></test>'
            });
    })
    .name;

export default test;
