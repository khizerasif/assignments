function makeSandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (const item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}

// Call the function three times with different numbers of arguments
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Peanut Butter", "Jelly");
makeSandwich("Turkey", "Bacon", "Avocado");
