
'use strict';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import angularMaterial from 'angular-material';
import 'angular-material/angular-material.css';

import ngMdIcons from 'angular-material-icons';


import AppContent from './components/app-content/app-content';




let app = angular.module('app', [
    uiRouter,
    angularMaterial,
    ngMdIcons,
    AppContent.name
]);




angular.element(document).ready(function() {
    return angular.bootstrap(document.body, [app.name], {
        strictDi: true
    });
});

export default app;