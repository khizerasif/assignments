function createShirt(size: string = 'large', message: string = 'I love TypeScript'): void {
    console.log(`Shirt size: ${size.toUpperCase()}. Message: "${message}"`);
}

createShirt(); 
createShirt('medium'); 
createShirt('small', 'Keep Coding!'); 
