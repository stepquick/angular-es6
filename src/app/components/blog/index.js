import angular from 'angular';
import { BlogService }  from './blog.service';
import BlogComponent from './blog.component';

const config = ($stateProvider) => {
    $stateProvider
        .state('app.blog', {
            url: '/blog',
            template: '<blog posts="$resolve.posts"></blog>',
            resolve: {
                posts: ['BlogService', BlogService => BlogService.all()]
            }
        });
};

config.$inject = ['$stateProvider'];

const blog = angular
    .module('main.app.blog', [])
    .component('blog', BlogComponent)
    .service('BlogService',BlogService)
    .config(config)
    .name;

export default blog;
