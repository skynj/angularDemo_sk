var uiRouter1=angular.module('uiRouter1', ['ui.router']);
uiRouter1.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('facebook', {
			url: '/facebook',
			templateUrl: 'facebook.html'
		})
		.state('twitter', {
			url: '/twitter',
			templateUrl: 'twitter.html'
		})
		.state('sina', {
			url: '/sina',
			templateUrl: 'sina.html'
		})
		.state('blogger', {
			url: '/blogger',
			templateUrl: 'blogger.html'
		})
        .state('blogger.sinaBlog', {
            url:'/sinaBlog',
            templateUrl:'blogger-sinaBlog.html',
            controller: ['$scope', function($scope){
                $scope.topics = ['login', 'register', 'help'];
            }]
        })
        .state('blogger.tencentBlog', {
            url:'/tencentBlog',
            template:'<i class="glyphicon glyphicon-tags"></i>'
        });
	$urlRouterProvider.otherwise('/facebook');
}]);