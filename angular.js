var app = angular.module('mainApp' , ['ngRoute']);

app.config(function($routeProvider){
           $routeProvider
           .when('/',{
           template:'<h1>Welcome!</h1>'
           })
           .when('/pic1',{
            template: '<img src="pic/lion.jpg" alt="Mountain View" style="width:700px;height:700px;" class = "img-thumbnail">'
           })
           .when('/pic2',{
           template: '<img src="pic/dog.jpg" alt="Mountain View" style="width:700px;height:700px;" class = "img-thumbnail">'
           })
           .when('/pic3',{
           template: '<img src="pic/tiger.jpg" alt="Mountain View" style="width:700px;height:700px;" class = "img-thumbnail">'
           })
           .when('/pic4',{
           template: '<img src="pic/ele.jpg" alt="Mountain View" style="width:700px;height:700px;" class = "img-thumbnail">'
           })
            .otherwise({redirectTo: '/'});
           });