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
  return render("register/register", { applicationNames: getApplicationNames() });
}

function loadUser() {
  return render("user/user", { users: getUsers() });
}

function loadWellcome() {
  return render("wellcome/wellcome", {});
}