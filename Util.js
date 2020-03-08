function getScriptUrl() {
    return ScriptApp.getService().getUrl();
}

function include(fileName) {
    return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}

function includeNav(page) {
    return render("common/nav", { page: page }).getContent();
}

function render(file, argsObject) {
    const template = HtmlService.createTemplateFromFile(file);
    Object.keys(argsObject).forEach(key => {
        template[key] = argsObject[key];
    });
    return template.evaluate();
}