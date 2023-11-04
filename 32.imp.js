var currentUsers = ['Ali', 'Fatima', 'Omar', 'Zainab', 'Aisha'];
var newUsers = ['Khadija', 'Ahmed', 'Aisha', 'OMAR', 'Zara'];
var currentUsersLower = currentUsers.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var user = newUsers_1[_i];
    if (currentUsersLower.includes(user.toLowerCase())) {
        console.log("The username '".concat(user, "' is not available. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(user, "' is available."));
    }
}
