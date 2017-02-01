(function() {
    "use strict";
    
    angular
        .module("warehouse-operations.checklist")
        .directive("checklist", checklist);
    
    function checklist() {
        return {
            restrict: "A",
            templateUrl: "app/components/shared/checklist/checklist.html",
            scope: {
                checklist: "="
            }
        }
    }
})();