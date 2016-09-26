(function(){
  'use strict';

  angular.module('ui-pdfr', ['ui.router', 'ui-pdfr.templateCache']);

  angular.module('ui-pdfr.ngTypeahead', [ ]);

  angular.element(document).ready(function() {
    angular.element(document.body).prepend('<div ui-view></div>');

    angular.bootstrap(document, ['ui-pdfr']);
  });

})();
