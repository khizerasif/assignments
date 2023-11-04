
const placesToVisit: string[] = ["Sydney", "Rome", "Great Wall of China", "Rio de Janeiro", "Cape Town"];

console.log("Original Order:");
console.log(placesToVisit);

console.log("\nAlphabetical Order:");
console.log([...placesToVisit].sort());


console.log("\nOriginal Order (to demonstrate it remains unchanged):");
console.log(placesToVisit);

console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());

console.log("\nOriginal Order (to demonstrate it remains unchanged):");
console.log(placesToVisit);

console.log("\nReversed Order:");
console.log(placesToVisit.slice().reverse());

console.log("\nBack to Original Order:");
console.log(placesToVisit.slice().reverse());

console.log("\nSorted in Alphabetical Order:");
console.log(placesToVisit.slice().sort());


console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit.slice().sort().reverse());
