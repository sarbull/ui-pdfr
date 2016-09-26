(function(){
  'use strict';

  angular
    .module('ui-pdfr.controllers')
    .controller('appController', ['$scope', 'jsPDFFactory', function($scope, jsPDFFactory) {

      $scope.html     = '<h1>Hello world</h1>';
      $scope.fileName = 'hello-world.pdf';

      $scope.generatePdf = function() {
        var jsPdf = new jsPDFFactory();

        jsPdf.fromHTML($scope.html);
        jsPdf.save($scope.fileName);
      };

    }]);

})();
