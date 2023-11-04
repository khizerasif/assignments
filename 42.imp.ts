let illusionists: string[] = ["Merlin", "Houdini", "Copperfield", "Dynamo"];

function make_great(illusionistList: string[]): void {
    for (let i = 0; i < illusionistList.length; i++) {
        illusionistList[i] = `the Great ${illusionistList[i]}`;
    }
}

function show_illusionists(illusionistList: string[]): void {
    console.log("List of Illusionists:");
    illusionistList.forEach(illusionist => {
        console.log(illusionist);
    });
}

console.log("Original List of Illusionists:");
show_illusionists(illusionists);

make_great(illusionists);

console.log("\nList of Illusionists after adding 'the Great':");
show_illusionists(illusionists);
