export function routing($stateProvider) {

    $stateProvider
        .state('app.home', {
            url: '/',
            template: '<home-component name="$ctrl.name"></home-component>'
        });
}
