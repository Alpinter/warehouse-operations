(function() {
    "use strict";
    
    angular
        .module("warehouse-operations.documents")
        .controller("DocumentController", DocumentController);
    
    DocumentController.$inject = ["document", "$state", "articles", "items", "Items"];
    function DocumentController(document, $state, articles, items, Items) {
        var dc = this;
        dc.document = document;
        dc.articles = articles.results;
        dc.items = items.results;
        
        dc.record = function(documentId) {
            dc.document.dateOfRecording = new Date();
            dc.document.status = "recorded";
            dc.document.$update(redirect);
        }
        
        dc.saveItem = function() {
            Items.saveItem(dc.document._id, dc.item).then(function(data) {
                dc.item = {};
                dc.items.push(data);
                dc.itemName();
            })
        }
        
        dc.itemName = function() {
            for(var i=0; i<dc.items.length; i++) {
                for(var j=0; j<dc.articles.length; j++) {
                    if(dc.items[i].article == dc.articles[j].code) {
                        dc.items[i].name = dc.articles[j].name;
                    }
                }
            }
        }
        dc.itemName();
        
        var redirect = function() {
            $state.go("main.documents");
        }
    }
})();