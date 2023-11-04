var guests = [
    "Albert",
    "Leonardo",
    "Jane"
];
console.log("Dear ".concat(guests[0], ", You are invited to a dinner at my place. Please join us! Sincerely, Maryam"));
console.log("Dear ".concat(guests[1], ", You are invited to a dinner at my place. Please join us! Sincerely, Maryam"));
console.log("Dear ".concat(guests[2], ", You are invited to a dinner at my place. Please join us! Sincerely, Maryam"));
var guestNotAttending = 'Leonardo';
console.log("\nUnfortunately, ".concat(guestNotAttending, " can't make it to the dinner.\n"));
var indexToReplaceGuest = guests.indexOf(guestNotAttending);
var newAttendee = 'Emily';
if (indexToReplaceGuest !== -1) {
    guests[indexToReplaceGuest] = newAttendee;
}
console.log("\nSecond set of invitation messages:");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to the dinner. Please join us!"));
});
