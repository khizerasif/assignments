function makePerformersGreat(performerList: string[]): string[] {
    const copyOfPerformers = performerList.slice(); 
    
    for (let i = 0; i < copyOfPerformers.length; i++) {
        copyOfPerformers[i] = `the Great ${copyOfPerformers[i]}`;
    }       

    return copyOfPerformers; // Return the modified array
}

function show_performers(performerList: string[]): void {
    console.log("List of Performers:");
    performerList.forEach(performer => {
        console.log(performer);
    });
}

let performers: string[] = ["Merlin", "Houdini", "Copperfield", "Dynamo"];

console.log("Original List of Performers:");
show_performers(performers);

const greatPerformers = makePerformersGreat(performers);

console.log("\nList of Performers after adding 'the Great':");
show_performers(greatPerformers);

