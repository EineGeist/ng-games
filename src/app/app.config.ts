import { ILocationProvider } from 'angular';
import { StateProvider, UrlService } from 'angular-ui-router';

export const appConfig = [
  '$locationProvider',
  '$stateProvider',
  '$urlServiceProvider',
  function (
    $locationProvider: ILocationProvider,
    $stateProvider: StateProvider,
    $urlServiceProvider: UrlService
  ) {
    $locationProvider.html5Mode(true);

    [
      {
        name: 'games',
        url: '/games/:page',
        component: '',
      },
    ].forEach($stateProvider.state);

    $urlServiceProvider.rules.otherwise('/games/1');
  },
];
