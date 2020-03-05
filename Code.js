
const dataSheet = SpreadsheetApp.openById("1TnRoyQvTDG6VY1H1coAgZ6MxR-cTsdPIqz5XdUOG2to").getSheetByName("Data");

function doGet(e) {
  return HtmlService.createTemplateFromFile("main").evaluate();
}

function userClicked(userInfo) {
  dataSheet.appendRow([userInfo.firstName, userInfo.lastName, userInfo.application, new Date()]);
}

function include(fileName) {
  return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}