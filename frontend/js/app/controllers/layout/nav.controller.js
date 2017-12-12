shop.controller('NavController', function($scope, $state, Authentication) {
    $scope.user = Authentication.getUser();
});
