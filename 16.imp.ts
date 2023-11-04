const participants = [
    "Albert",
    "Leonardo",
    "Jane",
];

console.log(`Dear ${participants[0]}, You are invited to a dinner at my place. Please join us! Sincerely, Maryam`);
console.log(`Dear ${participants[1]}, You are invited to a dinner at my place. Please join us! Sincerely, Maryam`);
console.log(`Dear ${participants[2]}, You are invited to a dinner at my place. Please join us! Sincerely, Maryam`);

const participantCantMakeIt = 'Leonardo';
console.log(`\nUnfortunately, ${participantCantMakeIt} can't make it to the dinner.\n`);

const indexToReplace = participants.indexOf(participantCantMakeIt);
const newPerson = 'Emily';



if (indexToReplace !== -1) {
    participants[indexToReplace] = newPerson;
}

console.log("\nGreat news! I found a bigger dinner table.\n");

participants.unshift("Olivia"); // Add one participant to the beginning
participants.splice(Math.floor(participants.length / 2), 0, "William"); // Add one participant to the middle
participants.push("Sophia"); // Add one participant to the end using append()

// Sending a new set of invitation messages
console.log("New set of invitation messages:");
participants.forEach(participant => {
    console.log(`Dear ${participant}, you are invited to the dinner. Please join us!`);
});
