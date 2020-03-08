const rounter = {
  "register": loadRegister,
  "user": loadUser
}

function doGet(e) {
  const loadFunction = rounter[e.parameters.v];
  if (loadFunction) {
    return loadFunction();
  }
  return loadWellcome();
}

function loadRegister() {
  const registerTemplate = HtmlService.createTemplateFromFile("register");
  registerTemplate.applicationNames = getApplicationNames();
  return registerTemplate.evaluate();
}

function loadUser() {
  const userTemplate = HtmlService.createTemplateFromFile("user");
  userTemplate.users = getUsers();
  return userTemplate.evaluate();
}

function loadWellcome() {
  return HtmlService.createTemplateFromFile("wellcome").evaluate();
}