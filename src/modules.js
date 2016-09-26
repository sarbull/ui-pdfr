(function(){
  'use strict';

  angular.module('ui-pdfr', [
    'ui.router',
    'ui-pdfr.templateCache',
    'ui-pdfr.controllers',
    'ui-pdfr.jspdf'
  ]);

  angular.module('ui-pdfr.jspdf', [ ]);
  angular.module('ui-pdfr.controllers', ['ui-pdfr.jspdf']);

  angular.element(document).ready(function() {
    angular.element(document.body).prepend('<div ui-view></div>');

    angular.bootstrap(document, ['ui-pdfr']);
  });

})();
