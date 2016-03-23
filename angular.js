var app = angular.module('mainApp' , ['ngRoute']);

app.config(function($routeProvider){
           $routeProvider
           .when('/',{
           template:'<h1>Welcome!</h1>'
           })
           .when('/pic1',{
            template: '<img src="http://www.slate.com/content/dam/slate/articles/health_and_science/science/2015/07/150730_SCI_Cecil_lion.jpg.CROP.promo-xlarge2.jpg" alt="Mountain View" style="width:700px;height:700px;" class = "img-thumbnail">'
           })
           .when('/pic2',{
           template: '<img src="http://www.aldoo.org/wp-content/uploads/2015/01/dog-image.jpg" alt="Mountain View" style="width:700px;height:700px;" class = "img-thumbnail">'
           })
           .when('/pic3',{
           template: '<img src="http://www.communityft.com/images/1439269819-TradeTiger.jpg" alt="Mountain View" style="width:700px;height:700px;" class = "img-thumbnail">'
           })
           .when('/pic4',{
           template: '<img src="http://www.thirteen.org/13pressroom/files/2015/07/SOUL_OF_THE_ELEPHANT_Image006.jpg" alt="Mountain View" style="width:700px;height:700px;" class = "img-thumbnail">'
           })
            .otherwise({redirectTo: '/'});
           });
