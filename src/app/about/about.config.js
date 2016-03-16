import template from './about.tpl.html';

export function routing($stateProvider) {

    $stateProvider
        .state('app.about', {
            url: '/about',
            template: '<about-component></about-component>'
        });
}
