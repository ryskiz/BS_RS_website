angular.module("app", ['angular-scroll-animate', 'ngAnimate'])
.controller('exampleController', function($scope){
    $scope.examples = [
    {
    	name: "Ryan",
	 	description: "programming dude"},
	{
		name: "Brea",
	 	description: "programming dudette"}
    ];

    $scope.animateElementIn = function($el) {
    $el.removeClass('hidden');
    $el.addClass('animated fadeInUp'); // this example leverages animate.css classes
  };

  $scope.animateElementOut = function($el) {
    $el.addClass('hidden');
    $el.removeClass('animated fadeInUp'); // this example leverages animate.css classes
  };
});