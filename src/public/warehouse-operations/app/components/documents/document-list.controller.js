(function() {
    "use strict";
    
    angular
        .module("warehouse-operations.documents")
        .controller("DocumentListController", DocumentListController);
    
    DocumentListController.$inject = ["documents", "Documents", "$state"];
    function DocumentListController(documents, Documents, $state) {
        var dlc = this;
        dlc.documents = documents.results;
        dlc.sort = "";
        dlc.sortDirection = "desc";
        
        dlc.pagination = {
            page: 1,
            pageSize: 10,
            numberOfPages: new Array(Math.ceil(documents.count/10)),
            changePage: function(page) {
                dlc.pagination.page = page;
                getDocuments();
            }
        }
        
        dlc.changeSortCriteria = function(criteria) {
            if(dlc.sort===criteria) {
                dlc.sortDirection = dlc.sortDirection === "desc" ? "asc" : "desc";
            } else {
                dlc.sort = criteria;
                dlc.sortDirection = "desc";
            }
            getDocuments();
        }
        
        var getDocuments = function() {
            var filter = {
                page: dlc.pagination.page,
                pageSize: dlc.pagination.pageSize,
                sort: dlc.sort,
                sortDirection: dlc.sortDirection
            }
            Documents.get(filter).$promise.then(function(data) {
                dlc.documents = data.results;
            })
        }
        
        dlc.columns = {
            "Date of Creation" : true,
            "Date of Recording": true,
            "Status": true,
            "Transaction Type": true,
            "Business Partner": true,
            "Business Partner Location": true,
            "Year": true
        }
        
        dlc.documentDetails = function(documentId) {
            $state.go("main.details", {id: documentId});
        }
    }
})();