sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter"
], function (Controller, Filter, FilterOperator, Sorter) {
    "use strict";

    return Controller.extend("sapips.training.odata.controller.Main", {
        onInit: function () {
            // get the table by ID
            let oTable = this.byId("productTable");

            // get the item binding
            let oBinding = oTable.getBinding("items");

            if (oBinding) {
                // sort by product name
                let oSorter = new Sorter("ProductName", false);

                // exclude discontinued
                let oFilter = new Filter("Discontinued", FilterOperator.EQ, false);

                // sorting and filtering
                oBinding.sort(oSorter);
                oBinding.filter([oFilter]);
            }
        }
    });
});
