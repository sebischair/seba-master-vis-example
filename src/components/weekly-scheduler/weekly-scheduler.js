'use strict';

import angular from 'angular';

import weeklyScheduler from './ng-weekly-scheduler';

import WeeklySchedulerComponent from './weekly-scheduler.component';


export default angular.module('WeeklyScheduler', [weeklyScheduler.name])
    .component(WeeklySchedulerComponent.name, new WeeklySchedulerComponent);