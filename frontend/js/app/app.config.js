shop.run(function ($http, $cookies) {
    if ($cookies.getObject('token')) {
	$http.defaults.headers.common.Authorization = 'Token ' + $cookies.getObject('token');
    }
});
