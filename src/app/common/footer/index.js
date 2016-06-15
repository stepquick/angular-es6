import FooterComponent from './footer.component';

const footer = angular
	.module('main.app.common.footer', [])
	.component('siteFooter', FooterComponent)
	.name;

export default footer;
