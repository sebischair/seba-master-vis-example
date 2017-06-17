'use strict';

import angular from 'angular';


import AppContentComponent from './app-content.component';

import Timeline from './../timeline/timeline';


export default angular.module('AppView', [Timeline.name])
    .component(AppContentComponent.name, new AppContentComponent);