function checkUsersValid(validUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function (user) {
        return validUsers.some(function (usr) {
            return usr.id === user.id;
        });
    })
  }
}
module.exports = checkUsersValid;
