function makePerformersGreat(performerList) {
    var copyOfPerformers = performerList.slice();
    for (var i = 0; i < copyOfPerformers.length; i++) {
        copyOfPerformers[i] = "the Great ".concat(copyOfPerformers[i]);
    }
    return copyOfPerformers; // Return the modified array
}
function show_performers(performerList) {
    console.log("List of Performers:");
    performerList.forEach(function (performer) {
        console.log(performer);
    });
}
var performers = ["Merlin", "Houdini", "Copperfield", "Dynamo"];
console.log("Original List of Performers:");
show_performers(performers);
var greatPerformers = makePerformersGreat(performers);
console.log("\nList of Performers after adding 'the Great':");
show_performers(greatPerformers);
