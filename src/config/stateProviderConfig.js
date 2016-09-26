(function(){
  'use strict';

  angular.module('ui-pdfr')
    .config(['$stateProvider', function($stateProvider) {
      $stateProvider
        .state('root', {
          url: '',
          templateUrl: 'components/app/app.tpl.html'
        });
    }]);

})();
