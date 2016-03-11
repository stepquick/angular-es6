import template from './home.tpl.html';

export function routing($stateProvider) {

    $stateProvider
        .state('app.home', {
            url: '/',
            template
        });
}
