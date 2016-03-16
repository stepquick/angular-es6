export function routing($stateProvider) {

    $stateProvider
        .state('app.home', {
            url: '/',
            template: '<home-component></home-component>'
        });
}
