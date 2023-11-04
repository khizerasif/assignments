var illusionists = ["Merlin", "Houdini", "Copperfield", "Dynamo"];
function make_great(illusionistList) {
    for (var i = 0; i < illusionistList.length; i++) {
        illusionistList[i] = "the Great ".concat(illusionistList[i]);
    }
}
function show_illusionists(illusionistList) {
    console.log("List of Illusionists:");
    illusionistList.forEach(function (illusionist) {
        console.log(illusionist);
    });
}
console.log("Original List of Illusionists:");
show_illusionists(illusionists);
make_great(illusionists);
console.log("\nList of Illusionists after adding 'the Great':");
show_illusionists(illusionists);
