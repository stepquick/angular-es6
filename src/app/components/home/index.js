import angular from 'angular';

import HomeComponent from './home.component';
import template from './home.tpl.html';

const config = ($stateProvider) => {
	$stateProvider
		.state('app.home', {
			url: '/',
			template: '<home name="$ctrl.name"></home>'
		});
}

config.$inject = ['$stateProvider'];

const home =  angular
	.module('main.app.home', [])
	.component('home', HomeComponent)
	.config(config)
	.name;

export default home;
