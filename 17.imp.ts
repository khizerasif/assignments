let invitees: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];

console.log("Original guest list:");
console.log(invitees);

console.log("Sorry, the dinner table won't arrive in time. I can invite only two people for dinner.");

while (invitees.length > 2) {
    const removedInvitee = invitees.pop();
    if (removedInvitee) {
        console.log(`Sorry, ${removedInvitee}, I'm unable to invite you to dinner.`);
    }
}

for (const remainingInvitee of invitees) {
    console.log(`Hey ${remainingInvitee}, you're still invited to dinner.`);
}

invitees.pop();
invitees.pop();

console.log("Final guest list:");
console.log(invitees); // Confirming the list is empty
