//declare our angular app
var testApp = angular.module('testApp', ['elasticsearch']);

// use esFactory() to create a configured client instance. Turn that instance
// into a service so that it can be required by other parts of the application
testApp.service('client', function (esFactory) {
	return esFactory({
		host: 'http://localhost:9200',
        apiVersion: '2.3',
		log: 'trace'
	});
});

// declare our controller, which contains our business logic and requires
// the esFactor service 
testApp.controller('testController', function ($scope, client, esFactory) {
	client.search({
		q: 'pasta'
	})
	.then(function (resp) {
		$scope.clusterState = resp;
		$scope.error = null;
	})
	.catch(function (err) {
		$scope.clusterState = null;
		$scope.error = err;
		
		// if the err is a NoConnections error, then the client was not able to
		// connect to elasticsearch. In that case, create a more detailed error
		// message
		if (err instanceof esFactory.errors.NoConnections) {
			$scope.error = new Error('Unable to connect to elasticsearch. ' +
			'Make sure that it is running and listening at http://localhost:9200');
		}
	});
});