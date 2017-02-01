(function() {
    "use strict";
    
    angular
        .module("warehouse-operations.documents")
        .factory("Articles", Articles);
    
    Articles.$inject = ["$http"];
    function Articles($http) {
        var url = "http://localhost:3000/api/articles";
        
        return {
            getArticles: getArticles
        }
        
        function getArticles() {
            return $http.get(url).then(function(response) {
                return response.data;
            })
        }
    }
})();