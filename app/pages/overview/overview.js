import angular                  from 'angular';
import overviewComponent        from './overview.component';
import OverviewMsgComponent     from '../overview-msg/overview-msg'

let overviewModule = angular.module('overview', [OverviewMsgComponent.name])
    .component('overview', overviewComponent);

export default overviewModule;
