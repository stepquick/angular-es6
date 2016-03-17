import angular from 'angular';

import UserService from './user.service';

export default angular
    .module('main.app.services', [])
    .service('userService', UserService)
    .name;
