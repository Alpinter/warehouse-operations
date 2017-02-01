(function() {
    "use strict";
    
    angular
        .module("warehouse-operations.documents")
        .factory("Items", Items);
    
    Items.$inject = ["$http"];
    function Items($http) {
        var url = "http://localhost:3000/api/documents/";
        return {
            getItems: getItems,
            saveItem: saveItem
        }
        
       function getItems(id) {
            var url_request = url + id + "/items";
            return $http.get(url_request).then(function(response) {
                return response.data;
            })
        }
        
        function saveItem(id, item) {
            var url_request = url + id + "/items";
            return $http.post(url_request, item).then(function(response) {
                return response.data;
            })
        }
    }
})();
