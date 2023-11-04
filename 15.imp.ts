const guests = [
    "Albert",
    "Leonardo",
    "Jane"
];

console.log(`Dear ${guests[0]}, You are invited to a dinner at my place. Please join us! Sincerely, Maryam`);
console.log(`Dear ${guests[1]}, You are invited to a dinner at my place. Please join us! Sincerely, Maryam`);
console.log(`Dear ${guests[2]}, You are invited to a dinner at my place. Please join us! Sincerely, Maryam`);

const guestNotAttending = 'Leonardo';
console.log(`\nUnfortunately, ${guestNotAttending} can't make it to the dinner.\n`);

const indexToReplaceGuest = guests.indexOf(guestNotAttending);
const newAttendee = 'Emily';

if (indexToReplaceGuest !== -1) {
    guests[indexToReplaceGuest] = newAttendee;
}

console.log("\nSecond set of invitation messages:");
guests.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to the dinner. Please join us!`);
});
