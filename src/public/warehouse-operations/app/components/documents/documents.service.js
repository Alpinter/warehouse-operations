(function() {
    "use strict";
    
    angular
        .module("warehouse-operations.documents")
        .factory("Documents", Documents);
    
    Documents.$inject = ["$resource"];
    function Documents($resource) {
        var url = "http://localhost:3000/api/documents/:id";
        return $resource(url, {id: "@_id"}, {update: {method: "PUT"}});
    }
})();