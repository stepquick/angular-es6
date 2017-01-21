import angular from 'angular';

import home from './home';
import about from './about';
import blog from './blog';

const components = angular
	.module('main.app.components', [home, about, blog])
	.name;

export default components;
