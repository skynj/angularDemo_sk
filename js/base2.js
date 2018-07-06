var uiRouter2=angular.module('uiRouter2',['ui.router']);
uiRouter2.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider
		.state('home',{
			url:'/home',
			templateUrl:'home.html'
		})
		.state('home.list',{
			url:'/list',
			templateUrl:'home-list.html',
			controller: ['$scope',function($scope) {
                $scope.topics = ['Butterscotch', 'Black Current', 'Mango'];
            }]
		})
		.state('home.paragraph',{
			url:'/paragraph',
			template:'<h3>I could sure use a scoop of ice-cream.</h3>'
		})
		.state('about',{
			url:'/about',
			templateUrl:'about.html'
		});
	$urlRouterProvider.otherwise('/home');
}]);