import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import AppComponent from './app.component';

const config = ($urlRouterProvider, $stateProvider, $locationProvider) => {
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('app', {
			abstract: true,
			template: '<app></app>'
		});

	$locationProvider.html5Mode(true);
};

config.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider'];

const app = angular
	.module('main.app', [uiRouter])
	.component('app', AppComponent)
	.config(config)
	.name;

export default app;
