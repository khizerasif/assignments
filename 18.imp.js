var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Sydney", "Rome", "Great Wall of China", "Rio de Janeiro", "Cape Town"];
console.log("Original Order:");
console.log(placesToVisit);
console.log("\nAlphabetical Order:");
console.log(__spreadArray([], placesToVisit, true).sort());
console.log("\nOriginal Order (to demonstrate it remains unchanged):");
console.log(placesToVisit);
console.log("\nReverse Alphabetical Order:");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
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
