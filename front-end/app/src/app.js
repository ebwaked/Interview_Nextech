// Load libraries
import angular from 'angular';
//import { http } from 'angular/http';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import AppController from 'src/AppController';
import Users from 'src/users/Users';
//import HttpClientModule from 'angular/common/http';

export default angular.module('nextech-interview-app', ['ngMaterial', Users.name])
    .config(($mdIconProvider, $mdThemingProvider) => {

        $mdIconProvider
            .icon("menu", "./assets/svg/menu.svg", 24)

        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('green');
    })
    .controller('AppController', AppController);