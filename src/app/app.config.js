export function routing($urlRouterProvider, $stateProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('app', {
            abstract: true,
            template: '<app-component></app-component>'
        });

    $locationProvider.html5Mode(true);

}
