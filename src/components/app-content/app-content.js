'use strict';

import angular from 'angular';


import AppContentComponent from './app-content.component';

import Timeline from './../timeline/timeline';

import WeeklyScheduler from './../weekly-scheduler/weekly-scheduler';


export default angular.module('AppView', [Timeline.name, WeeklyScheduler.name])
    .component(AppContentComponent.name, new AppContentComponent);