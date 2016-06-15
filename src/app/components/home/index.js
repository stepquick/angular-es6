import angular from 'angular';

import HomeComponent from './home.component';
import template from './home.tpl.html';

const home =  angular
	.module('main.app.home', [])
	.component('home', HomeComponent)
	.config(($stateProvider) => {
		$stateProvider
			.state('app.home', {
				url: '/',
				template: '<home name="$ctrl.name"></home>'
			});
	})
	.name;

export default home;
