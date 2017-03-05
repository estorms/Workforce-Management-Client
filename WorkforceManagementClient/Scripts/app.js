"use strict";


var app = angular.module("WorkforceManagement", ["ngRoute"])
.constant('API_URL', 'http://localhost:5000');


app.config(function ($routeProvider) {
    $routeProvider.
       when("/", {
           templateUrl: "Partials/Employees.html",
           controller: "EmployeeCtrl"
       }).
        //  when("/Tasks", {
        //      templateUrl: "Scripts/Partials/UserTasks.html",
        //      controller: "UserTaskCtrl"
        //  }).

        //when('/Tasks/:userTaskId', {
        //    templateUrl: "Scripts/Partials/TaskDetail.html",
        //    controller: "TaskSingleCtrl"
        //}).
        //  when("/Tasks/New", {
        //      templateUrl: "Scripts/Partials/NewTask.html",
        //      controller: "AddTaskCtrl"
        //  }).
        otherwise("/");
});
















