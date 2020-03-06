const sheet = SpreadsheetApp.openById("1TnRoyQvTDG6VY1H1coAgZ6MxR-cTsdPIqz5XdUOG2to");
const userSheet = sheet.getSheetByName("user");
function saveUser(user) {
    userSheet.appendRow([user.firstName, user.lastName, user.application, new Date()]);
}

function getUsers() {
    const userValues = userSheet.getRange(1, 1, getNumberOfUser(), 3).getValues();
    return userValues.map(userValue => {
        return {
            firstName: userValue[0],
            lastName: userValue[1],
            application: userValue[2]
        }
    })
}

function getNumberOfUser() {
    return userSheet.getRange(1, 1).getDataRegion().getLastRow();
}