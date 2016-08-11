import angular      from 'angular';
import uiRouter     from 'angular-ui-router';
import ngAnimate    from 'angular-animate';

import AppComponent        from './app.component';
import NavigationComponent from './components/navigation/navigation';
import OverviewComponent   from './pages/overview/overview';
import TodoService         from './services/todo.service';

angular.module('app', [
        uiRouter,
        NavigationComponent.name,
        OverviewComponent.name
    ])
    .config(($locationProvider, $stateProvider, $urlRouterProvider) => {
    "ngInject";

$stateProvider
    .state('app', {
        url: '/app',
        abstract: true,
        template: '<app></app>'
    })
    .state('app.overview', {
        url: '/overview',
        template: '<overview></overview>'
    })
    $urlRouterProvider.otherwise('/app/overview');
})

.component('app', AppComponent)
.factory('TodoService', TodoService);
