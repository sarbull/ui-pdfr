

(function(){
  'use strict';

  angular
    .module('ui-pdfr.jspdf')
    .factory('jsPDFFactory', [function() {
      return window.jsPDF;
    }]);

})();
