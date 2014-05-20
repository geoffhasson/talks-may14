var SeahawksApp = angular.module('SeahawksApp', []);

var Coach = "Pete Carroll";

SeahawksApp.factory('Seahawks', function () {
	var Seahawks = {};

	Seahawks.roster = [
	{
	   name: "Russell Wilson",
	   position: "Quarterback"
	},
	{
	   name: "Marshawn Lynch",
	   position: "Running Back"
	},
	{
	   name: "Percy Harvin",
	   position: "Wide Receiver"
	},
	{
	   name: "Richard Sherman",
	   position: "Cornerback"
	},
	{
	   name: "Earl Thomas",
	   position: "Free Safety"
	},
	{
	   name: "Michael Bennett",
	   position: "Defensive End"
	},
	{
	   name: "Cliff Avril",
	   position: "Defensive End"
	},
	{
	   name: "Kam Chancellor",
	   position: "Strong Safety"
	}
    ];

	return Seahawks;
})

function SeahawksCtrl($scope, Seahawks) {
	$scope.seahawks = Seahawks;
}