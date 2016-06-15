import angular from 'angular';

import home from './home';
import about from './about';
import test from './test';

const components = angular
	.module('main.app.components', [home, about, test])
	.name;

export default components;
