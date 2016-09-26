(function(){
  'use strict';

  angular.module('ui-pdfr', ['ui-pdfr.templateCache']);

  angular.module('ui-pdfr.ngTypeahead', [ ]);

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['ui-pdfr']);
  });

})();
