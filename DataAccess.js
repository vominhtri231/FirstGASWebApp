const sheet = SpreadsheetApp.openById("1TnRoyQvTDG6VY1H1coAgZ6MxR-cTsdPIqz5XdUOG2to");

//////////////////  User data //////////////////////////////
const userSheet = sheet.getSheetByName("user");
function saveUser(user) {
    userSheet.appendRow([user.firstName, user.lastName, user.application, new Date()]);
}

function getUsers() {
    const userValues = userSheet.getRange(1, 1, getNumberOfUser(), 3).getValues();
    const applications = getApplications();
    return userValues.map(userValue => {
        const applicationName = userValue[2];
        return {
            firstName: userValue[0],
            lastName: userValue[1],
            application: applicationName,
            branch: findBranch(applications, applicationName)
        }
    });
}

function getNumberOfUser() {
    return userSheet.getLastRow();
}
//////////////////////////////////////////////////////////////

///////////////////// Application data ///////////////////////
const applicationSheet = sheet.getSheetByName("application");
function getApplicationNames() {
    return getApplications().map(application => application.name);
}

function getMatchingBranch(applicationName) {
    return findBranch(getApplications(), applicationName);
}

function findBranch(applications, applicationName) {
    const matchApplication = applications.find(application => application.name === applicationName);
    return !matchApplication ? "Not found" : matchApplication.branch;
}

function getApplications() {
    return applicationSheet.getRange(1, 1, getNumberOfApplication(), 2).getValues()
        .map(applicationValue => {
            return {
                name: applicationValue[0],
                branch: applicationValue[1]
            }
        });
}

function getNumberOfApplication() {
    return applicationSheet.getLastRow();
}
//////////////////////////////////////////////////////////////////