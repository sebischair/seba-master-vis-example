'use strict';

import template from './weekly-scheduler.template.html';

import moment from 'moment';

class WeeklySchedulerComponent {
    constructor(){
        this.controller = WeeklySchedulerComponentController;
        this.template = template;

    }

    static get name() {
        return 'myWeeklyScheduler';
    }


}

class WeeklySchedulerComponentController{
    constructor(){

        this.items = [
            {
                label: 'Item 1',
                editable: false,
                schedules: [
                    {start: moment('2015-12-27').toDate(), end: moment('2016-08-01').toDate()}
                ]
            },
            {
            label: 'Item 2',
            schedules: [
                {start: moment('2016-05-03').toDate(), end: moment('2017-02-01').toDate()},
                {start: moment('2015-11-20').toDate(), end: moment('2016-02-01').toDate()}
            ]
            },
            {
            label: 'Item 3',
            schedules: [
                {start: moment('2017-08-09').toDate(), end: moment('2017-08-21').toDate()},
                {start: moment('2017-09-12').toDate(), end: moment('2017-10-12').toDate()}
            ]
        }];

        this.options = {/*monoSchedule: true*/}



    }

    doSomething(itemIndex, scheduleIndex, scheduleValue) {
        console.log('The model has changed!', itemIndex, scheduleIndex, scheduleValue);
    };

}


export default WeeklySchedulerComponent;