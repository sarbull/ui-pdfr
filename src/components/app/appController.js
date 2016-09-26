(function(){
  'use strict';

  angular
    .module('ui-pdfr.controllers')
    .controller('appController', ['$scope', 'jsPDFFactory', function($scope, jsPDFFactory) {

      $scope.html     = '<h1>Hello world</h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p><table><tr><th>Number</th><th>Age</th><th>Name</th></tr><tr><td>1</td><td>35</td><td>Mihai</td></tr><tr><td>2</td><td>21</td><td>Andrei</td></tr><tr><td>3</td><td>24</td><td>John</td></tr></table>';
      $scope.fileName = 'hello-world.pdf';

      $scope.generatePdf = function() {
        var jsPdf = new jsPDFFactory();

        jsPdf.fromHTML($scope.html);
        jsPdf.save($scope.fileName);
      };

    }]);

})();
