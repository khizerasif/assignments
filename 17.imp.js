var invitees = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log("Original guest list:");
console.log(invitees);
console.log("Sorry, the dinner table won't arrive in time. I can invite only two people for dinner.");
while (invitees.length > 2) {
    var removedInvitee = invitees.pop();
    if (removedInvitee) {
        console.log("Sorry, ".concat(removedInvitee, ", I'm unable to invite you to dinner."));
    }
}
for (var _i = 0, invitees_1 = invitees; _i < invitees_1.length; _i++) {
    var remainingInvitee = invitees_1[_i];
    console.log("Hey ".concat(remainingInvitee, ", you're still invited to dinner."));
}
invitees.pop();
invitees.pop();
console.log("Final guest list:");
console.log(invitees); // Confirming the list is empty
