function initDCR() {

    IWEventRegistry.addItemHandler("/global/ATTRIBUTES/attributes/countrycode", "onItemChange", setValueFromCountryCode);
    IWEventRegistry.addItemHandler("/global/ATTRIBUTES/attributes/sourcecode", "onItemChange", setValueFromSourceCode);
    IWEventRegistry.addItemHandler("/global/ATTRIBUTES/attributes/sponsorCode", "onItemChange", setValueFromSponsorCode);
    IWEventRegistry.addItemHandler("/global/ATTRIBUTES/attributes/campaignCode", "onItemChange", setValueFromCampaignCode);
    IWEventRegistry.addItemHandler("/global/ATTRIBUTES/attributes/redemptionModelTagName", "onItemChange", setValueFromredemptionModelTagName);


    IWEventRegistry.addItemHandler("/global/ATTRIBUTES/attributes/startdate", "onCallout", calendar);
    IWEventRegistry.addItemHandler("/global/ATTRIBUTES/attributes/expirationdate", "onCallout", calendar);
    IWEventRegistry.addItemHandler("/global/ATTRIBUTES/attributes/lastRedemptionDate", "onCallout", calendar);
    IWEventRegistry.addItemHandler("/global/RULES/rules/startdate", "onCallout", calendar);
    IWEventRegistry.addItemHandler("/global/RULES/rules/expirationdate", "onCallout", calendar);


}


function onSaveDoneSetEA() {

    var countrycode = IWDatacapture.getItem("/global/ATTRIBUTES/attributes/countrycode");
    countrycode = countrycode.getOptions()[parseInt(countrycode.getValue())].value;

    var sourcecode = IWDatacapture.getItem("/global/ATTRIBUTES/attributes/sourcecode");

    sourcecode = sourcecode.getOptions()[parseInt(sourcecode.getValue())].value;

    var languagecode = IWDatacapture.getItem("/global/ATTRIBUTES/attributes/languagecode");
    languagecode = languagecode.getOptions()[parseInt(languagecode.getValue())].value;

    var tiercode = IWDatacapture.getItem("/global/ATTRIBUTES/attributes/tiercode").getValue();

    if (tiercode !== undefined && tiercode !== null && tiercode !== "") {
        var tierCodeArray = tiercode;
        var tierName = "";
        var tierCodeOptions = "";
        if (tierCodeArray.length > 0) {
            for (var i = 0; i < tierCodeArray.length; i++) {
                tierCodeOption = IWDatacapture.getItem("/global/ATTRIBUTES/attributes/tiercode").getOptions()[tierCodeArray[i]].value;
                tierCodeOptions = tierCodeOptions + tierCodeOption;
                if (i != tierCodeArray.length - 1) {
                    tierCodeOptions = tierCodeOptions + ",";
                    tierName = tierName + "_";

                }

            }

        }

    }


    var sessionstate = IWDatacapture.getItem("/global/ATTRIBUTES/attributes/userState").getValue();
    var sessionStateArray = sessionstate;

    if (sessionStateArray != null && sessionStateArray != undefined && sessionStateArray != "") {

        var sessionName = "";
        var sessionStateOptions = "";
        if (sessionStateArray.length > 0) {
            for (var i = 0; i < sessionStateArray.length; i++) {
                sessionStateOption = IWDatacapture.getItem("/global/ATTRIBUTES/attributes/userState").getOptions()[sessionStateArray[i]].value;
                sessionStateOptions = sessionStateOptions + sessionStateOption;
                if (i != sessionStateArray.length - 1) {
                    sessionStateOptions = sessionStateOptions + ",";
                    sessionName = sessionName + "_";

                }

            }

        }

    }

    var server = window.location.hostname;
    var params = new Object();
    params.dcrPath = IWDatacapture.getDCRPath();
    params.countrycode = countrycode;
    params.sourcecode = sourcecode;
    params.languagecode = languagecode;
    params.tiercode = tierCodeOptions;
    params.sessionstate = sessionStateOptions;
    IWDatacapture.callServer("http://" + server + "/iw-bin/setExtAttribute.ipl", params, true);
    return true;

}

function endFunction() {
    return true;
}

function setValueFromCountryCode(item, defaultValue) {

    if (item.getValue() != null) {
        var selecteditem = item.getOptions()[item.getValue()].value;
        if (selecteditem != "") {

            setValueForDropdown(selecteditem, "/global/ATTRIBUTES/attributes/sourcecode", "sourceCode");
            setValueForDropdown(selecteditem, "/global/ATTRIBUTES/attributes/languagecode", "languageCode");
            setValueForDropdown(selecteditem, "/global/ATTRIBUTES/attributes/tiercode", "tierCode");
            setValueForDropdown(selecteditem, "/global/ATTRIBUTES/attributes/bucketStage", "bucketStage");
            setValueForDropdown(selecteditem, "/global/ATTRIBUTES/attributes/sponsorCode", "sponsorType");
            setValueForDropdown(selecteditem, "/global/ATTRIBUTES/attributes/lastCategoryRedeemed", "lastCategoryRedeemed");
            setValueForDropdown(selecteditem, "/global/ATTRIBUTES/attributes/campaignCode", "memberCampaignCode");
            setValueForDropdown(selecteditem, "/global/ATTRIBUTES/attributes/segment", "segment");
            setValueForDropdown(selecteditem, "/global/ATTRIBUTES/attributes/redemptionModelTagName", "redemptionModelTagName");
            setValueForDropdown(selecteditem, "/global/ATTRIBUTES/attributes/productCode", "productCode");
            setValueForDropdown(selecteditem, "/global/ATTRIBUTES/attributes/campaignCellCode", "campaignCellCode");
            setValueForDropdown(selecteditem, "/global/ATTRIBUTES/attributes/redemptionTagValue", "redemptionTagValue");

            return;
        }
    }
}

function setValueFromSourceCode(item, defaultValue) {

    if (item.getValue() != null) {
        var selecteditem = item.getOptions()[item.getValue()].value;
        if (selecteditem != "") {

            setValueForDropdown(selecteditem, "/global/ATTRIBUTES/attributes/tiercode", "tierCode");
            setValueForDropdown(selecteditem, "/global/ATTRIBUTES/attributes/bucketStage", "bucketStage");
            setValueForDropdown(selecteditem, "/global/ATTRIBUTES/attributes/sponsorCode", "sponsorType");
            setValueForDropdown(selecteditem, "/global/ATTRIBUTES/attributes/lastCategoryRedeemed", "lastCategoryRedeemed");
            setValueForDropdown(selecteditem, "/global/ATTRIBUTES/attributes/campaignCode", "memberCampaignCode");
            setValueForDropdown(selecteditem, "/global/ATTRIBUTES/attributes/segment", "segment");
            setValueForDropdown(selecteditem, "/global/ATTRIBUTES/attributes/redemptionModelTagName", "redemptionModelTagName");
            setValueForDropdown(selecteditem, "/global/ATTRIBUTES/attributes/productCode", "productCode");
            setValueForDropdown(selecteditem, "/global/ATTRIBUTES/attributes/campaignCellCode", "campaignCellCode");
            setValueForDropdown(selecteditem, "/global/ATTRIBUTES/attributes/redemptionTagValue", "redemptionTagValue");

            return;
        }
    }
}

function setValueFromSponsorCode(item, defaultValue) {

    if (item.getValue() != null) {
        var selecteditem = item.getOptions()[item.getValue()].value;
        if (selecteditem != "") {

            setValueForDropdown(selecteditem, "/global/ATTRIBUTES/attributes/productCode", "productCode");
            return;
        }
    }
}
function setValueFromCampaignCode(item, defaultValue) {

    if (item.getValue() != null) {
        var selecteditem = item.getOptions()[item.getValue()].value;
        if (selecteditem != "") {

            setValueForDropdown(selecteditem, "/global/ATTRIBUTES/attributes/campaignCellCode", "campaignCellCode");
            return;
        }
    }
}
function setValueFromredemptionModelTagName(item, defaultValue) {

    if (item.getValue() != null) {
        var selecteditem = item.getOptions()[item.getValue()].value;
        if (selecteditem != "") {

            setValueForDropdown(selecteditem, "/global/ATTRIBUTES/attributes/redemptionTagValue", "redemptionTagValue");
            return;
        }
    }
}
function setValueForDropdown(selecteditem, selectItemVpath, configAttr) {

    var config_opt_name = "config_opt_name";
    var config_opt_val = "config_opt_val";
    var config_opt_attr1 = "config_opt_attr1";
    var datasourceObj = new IWDatasource();
    var dsParams = new IWMap();
    var returnParams = new IWMap();

    dsParams.put("fieldName", config_opt_name);
    dsParams.put("fieldValue", config_opt_val);
    dsParams.put("fieldAttribute", config_opt_attr1);
    dsParams.put("requestParam", selecteditem);
    returnParams.put("selectItemVpath", selectItemVpath);
    dsParams.put("configAttr", configAttr);
    datasourceObj.executeDatasource("setDatasourceValueCallback", "ConfigRetrieval", dsParams, returnParams);
    return;
}


function setDatasourceValueCallback(resultObj, ctxParams) {
    var selectItemRef;
    if (ctxParams != undefined) {
        selectItemRef = ctxParams.get("selectItemVpath");
    }
    var datasourceObj = new IWDatasource();

    epsilon_addOptionsToSelect(resultObj, selectItemRef, "");
    top.hiddenFrameRunning = true;
    return;
}

function calendar(item) {


    function DateCallBack(date) {
        item.setValue(formatDate(date, "MM/dd/yyyy"));
        IWDatacapture.setHighlightMode(false);
    }
    var theCalendarWindow = fwShowCalendar("-callback", DateCallBack, "-initialdate", new Date().valueOf());
}

function saveHandler() {
    var newOptions = new Array();
    sourcecode = IWDatacapture.getItem("/global/ATTRIBUTES/attributes/sourcecode");
    sourcecode.setValue(0);
    sourcecode = sourcecode.getOptions()[parseInt(sourcecode.getValue())].value;
    alert(sourcecode);

}

function epsilon_addOptionsToSelect(resultObj, selectItemRef, currentSelectedValue) {

    var propertyItem = IWDatacapture.getItem(selectItemRef);
    try {
        var emptyArr = new Array()
        propertyItem.setOptions(emptyArr);
    } catch (e) {
        alert(e);
    }
    propertyItem.setOptions("");
    if (IWMap.prototype.isPrototypeOf(resultObj)) {
        var keysArr = resultObj.keys();
        for (i = 0; i < keysArr.length; i++) {
            var newOpt;
            var actualValue = keysArr[i];
            var displayName = resultObj.get(keysArr[i]);
            if (actualValue == currentSelectedValue) {
                newOpt = new Option(displayName, actualValue, false, true);
            } else {
                newOpt = new Option("displayName", "actualValue", false, false);
                newOpt = new Option(displayName, actualValue, false, false);

            }
            propertyItem.addOption(newOpt);

        }

    } else if (Array.prototype.isPrototypeOf(resultObj)) {
        var keysArr = resultObj;
        for (i = 0; i < resultObj.length; i++) {
            var value = resultObj[i];
            if (value == currentSelectedValue) {
                newOpt = new Option(value, value, false, true);
            } else {
                newOpt = new Option(value, value, false, false);

            }
            propertyItem.addOption(newOpt);
        }
    }
    propertyItem.setValue(0);
    return;
}


IWEventRegistry.addFormHandler("onFormInit", initDCR);
//IWEventRegistry.addFormHandler("onSave", saveHandler);
//IWEventRegistry.addFormHandler("onSaveValid", saveHandler);
IWEventRegistry.addFormHandler("onSaveDone", onSaveDoneSetEA);