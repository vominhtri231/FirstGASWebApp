function getScriptUrl() {
    return ScriptApp.getService().getUrl();
}

function include(fileName) {
    return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}