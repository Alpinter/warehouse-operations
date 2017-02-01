(function() {
    "use strict";
    
    angular
        .module("warehouse-operations.documents")
        .config(config);
    
    config.$inject = ["$stateProvider"];
    function config($stateProvider) {
        $stateProvider
        .state("main.documents", {
            url: "/documents",
            views: {
                "content@": {
                    templateUrl: "app/components/documents/document-list.html",
                    controller: "DocumentListController",
                    controllerAs: "dlc",
                    resolve: {
                        documents: getDocuments
                    }
                }
            }
        })
        .state("main.details", {
            url: "/document/:id",
            views: {
                "content@": {
                    templateUrl: "app/components/documents/document.html",
                    controller: "DocumentController",
                    controllerAs: "dc",
                    resolve: {
                        document: getDocument,
                        articles: getArticles,
                        items: getItems
                    }
                }
            }
        })
        
        getDocuments.$inject = ["Documents"];
        function getDocuments(Documents) {
            return Documents.get({pageSize:10}).$promise;
        }
        getDocument.$inject = ["Documents", "$stateParams"];
        function getDocument(Documents, $stateParams) {
            return Documents.get({id: $stateParams.id}).$promise;
        }
        getArticles.$inject = ["Articles"];
        function getArticles(Articles) {
            return Articles.getArticles();
        }
       getItems.$inject = ["Items", "$stateParams"]
        function getItems(Items, $stateParams) {
            return Items.getItems($stateParams.id);
        }
    }
})();