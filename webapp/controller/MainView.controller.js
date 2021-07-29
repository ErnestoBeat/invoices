sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel* 
     * @param {typeof sap.ui.model.Filter} Filter
     * @param {typeof sap.ui.model.FilterOperator} FilterOperator
	 */
    function (Controller, JSONModel, Filter, FilterOperator)  {
        "use strict";

        return Controller.extend("logaligroup.invoices.controller.MainView", {
            onInit: function () {
                const oJSONModel = new JSONModel();
                const oView = this.getView();
                oJSONModel.loadData("./model/SelectionScreenMenu.json");
                oView.setModel(oJSONModel, "selectionScreen");
            },

            onFilter: function (oEvent) {
                const oData = this.getView().getModel('selectionScreen').getData();
                let filters = [];
                if (oData.ShipName !== "") {
                    filters.push(new Filter("ShipName", FilterOperator.Contains, oData.ShipName));
                }
                if (oData.CountryKey !== "") {
                    filters.push(new Filter("Country", FilterOperator.EQ, oData.CountryKey));
                }
                const oBinding = this.getBindingOfList();
                oBinding.filter(filters);                
            },
            onClearFilter: function () {
                const oModelSelScreen = this.getView().getModel("selectionScreen")
                oModelSelScreen.setProperty("/ShipName", "");
                oModelSelScreen.setProperty("/CountryKey", "");
                const oBinding = this.getBindingOfList();
                oBinding.filter([]);                
            },
            getBindingOfList: function () {
                const oList = this.getView().byId("invoicesList");
                return oList.getBinding("items");
            }               
        });
    });
