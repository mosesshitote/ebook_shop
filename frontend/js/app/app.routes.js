shop.config(function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
	.state({
	    name: 'shop',
	    url: '/',
	    views: {
		'': {
		    templateUrl: 'templates/app.html'
		},
		'nav': {
		    templateUrl: 'templates/nav.html',
		    controller: 'NavController',
		},
		'side-nav': {
		    templateUrl: 'templates/side-nav.html',
		    controller: 'SideNavController'
		}
	    }
	})
    ;
});
