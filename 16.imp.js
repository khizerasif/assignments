var gueests = [
    "Albert",
    "Leonardo",
    "Jane",
];
console.log("Dear ".concat(gueests[0], ", You are invited to a dinner at my place. Please join us! Sincerely, Maryam"));
console.log("Dear ".concat(gueests[1], ", You are invited to a dinner at my place. Please join us! Sincerely, Maryam"));
console.log("Dear ".concat(gueests[2], ", You are invited to a dinner at my place. Please join us! Sincerely, Maryam"));
var gueestCantMakeIt = 'Leonardo';
console.log("\nUnfortunately, ".concat(gueestCantMakeIt, " can't make it to the dinner.\n"));
var indexTooReplace = gueests.indexOf(gueestCantMakeIt);
var newwPerson = 'Emily';
if (indexToReplace !== -1) {
    gueests[indexToReplace] = newPerson;
}
console.log("\nGreat news! I found a bigger dinner table.\n");
gueests.unshift("Olivia"); // Add one guest to the beginning
gueests.splice(Math.floor(gueests.length / 2), 0, "William"); // Add one guest to the middle
gueests.push("Sophia"); // Add one guest to the end using append()
// Sending a new set of invitation messages
console.log("New set of invitation messages:");
guests.forEach(function (gueest) {
    console.log("Dear ".concat(gueest, ", you are invited to the dinner. Please join us!"));
});
