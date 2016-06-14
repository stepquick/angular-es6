import angular from 'angular';

import home from './home/home';
import about from './about/about';
import test from './test/test';

const components = angular
	.module('main.app.components', [home, about, test])
	.name;

export default components;
