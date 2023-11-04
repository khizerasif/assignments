function createShirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("Shirt size: ".concat(size.toUpperCase(), ". Message: \"").concat(message, "\""));
}
createShirt();
createShirt('medium');
createShirt('small', 'Keep Coding!');
