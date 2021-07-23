sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("logaligroup.invoices.controller.MainView", {
			onInit: function () {
				const oJSONModel = new JSONModel();
				const oView = this.getView();
				oJSONModel.loadData("./model/SelectionScreenMenu.json");
				oView.setModel(oJSONModel, "selectionScreen");
			},

			onFilter: function (oEvent) {
			},
			onClearFilter: function () {
				const oModelSelScreen = this.getView().getModel("selectionScreen")
				oModelSelScreen.setProperty("/ShipName", "");
				oModelSelScreen.setProperty("/CountryKey", "");
			}
		});
	});
