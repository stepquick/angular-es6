import angular from 'angular';

import UserService from './user.service';

const services = angular
    .module('main.app.services', [])
    .service('userService', UserService)
    .name;
    
export default services;
