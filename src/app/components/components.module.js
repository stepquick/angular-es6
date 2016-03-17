import angular from 'angular';

import UserInfoComponent from './user-info/user-info.component';
import NavBarComponent from './navbar/navbar.component';
import FooterComponent from './footer/footer.component';

export default angular
    .module('main.app.components', [])
    .component('userInfoComponent', UserInfoComponent)
    .component('navBarComponent', NavBarComponent)
    .component('footerComponent', FooterComponent)
    .name;
